import { promises as fs } from "fs";
import path from "path";
import { initialNoticias, type Noticia } from "./news-data";

const dataDir = path.join(process.cwd(), "data");
const newsFile = path.join(dataDir, "noticias.json");

type CreateNoticiaInput = Omit<Noticia, "id" | "slug" | "author"> & {
  author?: string;
  slug?: string;
};

export function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

async function ensureNewsFile() {
  await fs.mkdir(dataDir, { recursive: true });

  try {
    await fs.access(newsFile);
  } catch {
    await fs.writeFile(newsFile, JSON.stringify(initialNoticias, null, 2), "utf8");
  }
}

export async function getNews() {
  try {
    await ensureNewsFile();
    const raw = await fs.readFile(newsFile, "utf8");
    const news = JSON.parse(raw) as Noticia[];

    return news.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  } catch {
    return initialNoticias;
  }
}

export async function getNewsBySlug(slug: string) {
  const news = await getNews();
  return news.find((item) => item.slug === slug);
}

export async function createNews(input: CreateNoticiaInput, author: string) {
  const news = await getNews();
  const baseSlug = input.slug ? slugify(input.slug) : slugify(input.title);
  let slug = baseSlug;
  let index = 2;

  while (news.some((item) => item.slug === slug)) {
    slug = `${baseSlug}-${index}`;
    index += 1;
  }

  const noticia: Noticia = {
    ...input,
    id: `${Date.now()}-${slug}`,
    slug,
    author,
    tags: input.tags ?? [],
    body: input.body.filter(Boolean),
  };

  const updated = [noticia, ...news];
  await ensureNewsFile();
  await fs.writeFile(newsFile, JSON.stringify(updated, null, 2), "utf8");

  return noticia;
}
