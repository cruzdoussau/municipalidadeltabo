import { NextResponse } from "next/server";
import { canManageNews, getCurrentUser } from "@/lib/auth";
import { createNews, getNews } from "@/lib/news-store";
import type { CategoriaNoticia } from "@/lib/news-data";

const validCategories: Array<Exclude<CategoriaNoticia, "Todas">> = [
  "Municipalidad",
  "Comunidad",
  "Deportes",
  "Cultura",
  "DIDECO",
  "Educación",
  "Empleo",
  "Medio Ambiente",
  "Salud",
  "Seguridad",
];

export async function GET() {
  const news = await getNews();
  return Response.json({ news });
}

export async function POST(request: Request) {
  const user = await getCurrentUser();

  if (!user || !canManageNews(user)) {
    return NextResponse.json(
      { message: "No tienes permisos para crear noticias." },
      { status: 403 }
    );
  }

  const body = (await request.json()) as {
    title?: string;
    category?: Exclude<CategoriaNoticia, "Todas">;
    date?: string;
    publishedAt?: string;
    excerpt?: string;
    image?: string;
    body?: string;
    tags?: string;
    featured?: boolean;
  };

  if (
    !body.title ||
    !body.category ||
    !body.publishedAt ||
    !body.excerpt ||
    !body.image ||
    !body.body
  ) {
    return NextResponse.json(
      { message: "Completa título, categoría, fecha, bajada, imagen y cuerpo." },
      { status: 400 }
    );
  }

  if (!validCategories.includes(body.category)) {
    return NextResponse.json(
      { message: "La categoría seleccionada no es válida." },
      { status: 400 }
    );
  }

  const date = body.date ?? new Intl.DateTimeFormat("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${body.publishedAt}T12:00:00`));

  const noticia = await createNews(
    {
      title: body.title,
      category: body.category,
      date,
      publishedAt: body.publishedAt,
      excerpt: body.excerpt,
      image: body.image,
      body: body.body
        .split(/\n{2,}/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean),
      tags: (body.tags ?? "")
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      featured: Boolean(body.featured),
    },
    user.name
  );

  return NextResponse.json({ noticia }, { status: 201 });
}
