import { NextResponse } from "next/server";

let catches: any[] = [];

export async function GET() {
  return NextResponse.json(catches);
}

export async function POST(req: Request) {

  const data = await req.json();

  const catchEntry = {
    fish: data.fish,
    weight: data.weight,
    value: data.value,
    mutations: data.mutations,
    time: Date.now()
  };

  catches.unshift(catchEntry);

  // max 50 speichern
  catches = catches.slice(0, 50);

  console.log("New Catch:", catchEntry);

  return NextResponse.json({ status: "ok" });
}