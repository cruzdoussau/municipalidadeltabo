import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { canManageNews, getCurrentUser } from "@/lib/auth";
import { slugify } from "@/lib/news-store";

export async function POST(request: Request) {
  const user = await getCurrentUser();

  if (!canManageNews(user)) {
    return NextResponse.json(
      { message: "No tienes permisos para subir imágenes." },
      { status: 403 }
    );
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json(
      { message: "Debes seleccionar una imagen." },
      { status: 400 }
    );
  }

  if (!file.type.startsWith("image/")) {
    return NextResponse.json(
      { message: "El archivo debe ser una imagen." },
      { status: 400 }
    );
  }

  const uploadDir = path.join(process.cwd(), "public", "images", "uploads");
  await fs.mkdir(uploadDir, { recursive: true });

  const extension = path.extname(file.name) || ".jpg";
  const fileName = `${Date.now()}-${slugify(path.basename(file.name, extension))}${extension}`;
  const arrayBuffer = await file.arrayBuffer();
  await fs.writeFile(path.join(uploadDir, fileName), Buffer.from(arrayBuffer));

  return NextResponse.json({ path: `/images/uploads/${fileName}` });
}
