import { NextResponse } from "next/server";
import { canViewMarketing, getCurrentUser } from "@/lib/auth";
import { getAnalyticsSummary } from "@/lib/analytics-store";

export async function GET() {
  const user = await getCurrentUser();

  if (!canViewMarketing(user)) {
    return NextResponse.json(
      { message: "No tienes permisos para ver métricas." },
      { status: 403 }
    );
  }

  const analytics = await getAnalyticsSummary();
  return Response.json({ analytics });
}
