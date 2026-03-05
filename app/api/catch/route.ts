import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: "API running" });
}

export async function POST(req: Request) {
  const data = await req.json();

  console.log("New Catch:", data);

  return NextResponse.json({ status: "ok" });
}