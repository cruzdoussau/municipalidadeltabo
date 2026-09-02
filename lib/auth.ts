import crypto from "crypto";
import { cookies } from "next/headers";

export type Role = "admin" | "prensa" | "marketing";

export type InternalUser = {
  id: string;
  name: string;
  email: string;
  role: Role;
};

export const SESSION_COOKIE = "eltabo_session";

const users: Array<InternalUser & { password: string }> = [
  {
    id: "admin",
    name: "Administrador",
    email: "admin@eltabo.cl",
    password: "Admin2026!",
    role: "admin",
  },
  {
    id: "prensa",
    name: "Equipo de Prensa",
    email: "prensa@eltabo.cl",
    password: "Prensa2026!",
    role: "prensa",
  },
  {
    id: "marketing",
    name: "Marketing Municipal",
    email: "marketing@eltabo.cl",
    password: "Marketing2026!",
    role: "marketing",
  },
];

const secret = process.env.AUTH_SECRET ?? "eltabo-dev-secret-change-me";

function publicUser(user: InternalUser & { password?: string }): InternalUser {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
}

function toBase64Url(value: string) {
  return Buffer.from(value).toString("base64url");
}

function sign(payload: string) {
  return crypto.createHmac("sha256", secret).update(payload).digest("base64url");
}

export function authenticate(email: string, password: string) {
  const user = users.find(
    (item) => item.email.toLowerCase() === email.toLowerCase()
  );

  if (!user || user.password !== password) {
    return null;
  }

  return publicUser(user);
}

export function createSessionToken(user: InternalUser) {
  const payload = toBase64Url(
    JSON.stringify({
      sub: user.id,
      role: user.role,
      exp: Date.now() + 1000 * 60 * 60 * 8,
    })
  );

  return `${payload}.${sign(payload)}`;
}

export function verifySessionToken(token?: string) {
  if (!token) {
    return null;
  }

  const [payload, signature] = token.split(".");
  if (!payload || !signature || sign(payload) !== signature) {
    return null;
  }

  try {
    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString()) as {
      sub: string;
      exp: number;
    };

    if (parsed.exp < Date.now()) {
      return null;
    }

    const user = users.find((item) => item.id === parsed.sub);
    return user ? publicUser(user) : null;
  } catch {
    return null;
  }
}

export async function getCurrentUser() {
  const cookieStore = await cookies();
  return verifySessionToken(cookieStore.get(SESSION_COOKIE)?.value);
}

export function canManageNews(user: InternalUser | null) {
  return user?.role === "admin" || user?.role === "prensa";
}

export function canViewMarketing(user: InternalUser | null) {
  return user?.role === "admin" || user?.role === "marketing";
}
