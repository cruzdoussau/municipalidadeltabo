import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const baseUrl = "https://eltabo.cl";
const outputFile = path.join(process.cwd(), "data", "noticias.json");

function decodeHtml(value = "") {
  const named = {
    amp: "&",
    apos: "'",
    gt: ">",
    hellip: "…",
    laquo: "«",
    ldquo: "“",
    lsquo: "‘",
    lt: "<",
    nbsp: " ",
    quot: '"',
    raquo: "»",
    rdquo: "”",
    rsquo: "’",
  };

  return value.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (entity, code) => {
    if (code[0] === "#") {
      const hex = code[1]?.toLowerCase() === "x";
      const number = Number.parseInt(code.slice(hex ? 2 : 1), hex ? 16 : 10);
      return Number.isFinite(number) ? String.fromCodePoint(number) : entity;
    }

    return named[code.toLowerCase()] ?? entity;
  });
}

function cleanText(value = "") {
  return decodeHtml(
    value
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<figure[\s\S]*?<\/figure>/gi, " ")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/p>|<\/li>|<\/h[1-6]>/gi, "\n")
      .replace(/<[^>]+>/g, " ")
  )
    .replace(/\u00a0/g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/\s*\n\s*/g, "\n")
    .trim();
}

function toParagraphs(html = "", fallback = "") {
  const text = cleanText(html);
  const paragraphs = text
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return paragraphs.length ? paragraphs : [fallback].filter(Boolean);
}

function truncate(value, length = 245) {
  const clean = value.replace(/\s*\[…\]\s*|\s*\[&hellip;\]\s*/g, " ").trim();
  if (clean.length <= length) return clean;
  return `${clean.slice(0, length).replace(/\s+\S*$/, "").trim()}…`;
}

function classify(title, body) {
  const headline = title.toLocaleLowerCase("es-CL");
  const text = `${headline} ${body.slice(0, 320).toLocaleLowerCase("es-CL")}`;

  if (/cultura|patrimonio|nicanor|cueca|bafona|folcl|fiestas patrias|desfile comunal|artíst|artist|literatura|música|musica/.test(headline)) {
    return "Cultura";
  }
  if (/seguridad|carabiner|pdi|delito|robo|emergencia|incendio|armada|detenid|persecución|policía|policia|fiscaliza/.test(headline)) {
    return "Seguridad";
  }
  if (/cesfam|cecosf|salud|médic|medic|vacuna|veterin|senda|discapacidad|cuidados/.test(headline)) {
    return "Salud";
  }
  if (/deport|campeonato|gimnasia|corrida|fútbol|futbol|multicancha|gimnasio/.test(headline)) {
    return "Deportes";
  }
  if (/escuela|colegio|estudiant|educa|junaeb|beca|docente/.test(headline)) {
    return "Educación";
  }
  if (/oferta laboral|vacante|contratar|selección de personal|seleccion de personal|empleo|omil|cargo de/.test(headline)) {
    return "Empleo";
  }
  if (/ambient|recicl|residuo|basura|limpieza|humedal|sustent|reutiliza|áreas verdes|areas verdes/.test(headline)) {
    return "Medio Ambiente";
  }
  if (/vecin|organización|organizacion|feria|operativo en terreno|participa|títulos de dominio|titulos de dominio/.test(headline)) {
    return "Comunidad";
  }
  if (/dideco|adulto mayor|personas mayores|mujer|niñez|ninez|juventud|familia|social|comunitari/.test(headline)) {
    return "DIDECO";
  }

  if (/cesfam|cecosf|salud|vacuna|veterin/.test(text)) return "Salud";
  if (/ambient|recicl|residuo|sustent/.test(text)) return "Medio Ambiente";

  return "Municipalidad";
}

function imageFor(post) {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  return (
    media?.media_details?.sizes?.large?.source_url ??
    media?.media_details?.sizes?.medium_large?.source_url ??
    media?.source_url ??
    "/images/home/hero/el-tabo-1.png"
  );
}

function formatDate(date) {
  return new Intl.DateTimeFormat("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date.slice(0, 10)}T12:00:00Z`));
}

async function fetchCategory(categoryId) {
  const firstUrl = `${baseUrl}/wp-json/wp/v2/posts?categories=${categoryId}&per_page=100&page=1&_embed=1`;
  const firstResponse = await fetch(firstUrl);

  if (!firstResponse.ok) {
    throw new Error(`No se pudo leer ${firstUrl}: ${firstResponse.status}`);
  }

  const pages = Number(firstResponse.headers.get("x-wp-totalpages") ?? "1");
  const firstPage = await firstResponse.json();
  const remaining = await Promise.all(
    Array.from({ length: pages - 1 }, async (_, index) => {
      const page = index + 2;
      const url = `${baseUrl}/wp-json/wp/v2/posts?categories=${categoryId}&per_page=100&page=${page}&_embed=1`;
      const response = await fetch(url);
      if (!response.ok) throw new Error(`No se pudo leer ${url}: ${response.status}`);
      return response.json();
    })
  );

  return [firstPage, ...remaining].flat();
}

const posts = await fetchCategory(5);
const noticias = posts.map((post, index) => {
  const title = cleanText(post.title?.rendered ?? "Noticia municipal");
  const body = toParagraphs(post.content?.rendered, title);
  const excerptSource = cleanText(post.excerpt?.rendered) || body[0] || title;
  const category = classify(title, body.join(" "));

  return {
    id: `eltabo-${post.id}`,
    slug: post.slug,
    title,
    category,
    date: formatDate(post.date),
    publishedAt: post.date.slice(0, 10),
    excerpt: truncate(excerptSource),
    image: imageFor(post),
    sourceUrl: post.link,
    author: cleanText(post._embedded?.author?.[0]?.name) || "Equipo de Prensa",
    body,
    tags: [category, "Municipalidad de El Tabo"],
    featured: index < 3,
  };
});

await mkdir(path.dirname(outputFile), { recursive: true });
await writeFile(outputFile, `${JSON.stringify(noticias, null, 2)}\n`, "utf8");

console.log(`Noticias importadas: ${noticias.length}`);
console.log(`Archivo: ${outputFile}`);
console.log("Destacadas:");
for (const noticia of noticias.slice(0, 3)) {
  console.log(JSON.stringify({
    slug: noticia.slug,
    title: noticia.title,
    excerpt: noticia.excerpt,
    image: noticia.image,
  }));
}
