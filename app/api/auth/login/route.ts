import { NextResponse } from "next/server";
import { authenticate, createSessionToken, SESSION_COOKIE } from "@/lib/auth";

export async function POST(request: Request) {
  const { email, password } = (await request.json()) as {
    email?: string;
    password?: string;
  };

  if (!email || !password) {
    return NextResponse.json(
      { message: "Debes ingresar correo y contraseña." },
      { status: 400 }
    );
  }

  const user = authenticate(email, password);

  if (!user) {
    return NextResponse.json(
      { message: "Credenciales incorrectas." },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ user });
  response.cookies.set(SESSION_COOKIE, createSessionToken(user), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return response;
}
