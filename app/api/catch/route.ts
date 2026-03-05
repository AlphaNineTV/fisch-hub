import { NextResponse } from "next/server";

let catches: any[] = [];

export async function GET() {

  const totalFish = catches.length;

  const totalMoney = catches.reduce(
    (sum, c) => sum + (c.value || 0),
    0
  );

  const biggestFish = catches.reduce((max, c) => {
    if (!max) return c;
    return c.weight > max.weight ? c : max;
  }, null);

  return NextResponse.json({
    catches,
    stats: {
      totalFish,
      totalMoney,
      biggestFish
    }
  });
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
  catches = catches.slice(0, 100);

  console.log("New Catch:", catchEntry);

  return NextResponse.json({ status: "ok" });
}