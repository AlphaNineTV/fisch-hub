"use client";

import { useEffect, useState } from "react";

export default function GlobalStats() {

  const [stats, setStats] = useState<any>(null);

  async function loadStats() {

    const res = await fetch("/api/catch");

    const data = await res.json();

    setStats(data.stats);
  }

  useEffect(() => {

    loadStats();

    const interval = setInterval(loadStats, 5000);

    return () => clearInterval(interval);

  }, []);

  if (!stats) return null;

  return (

    <div className="bg-zinc-900 p-6 rounded-xl">

      <h2 className="text-xl font-bold mb-4">
        🌍 Global Stats
      </h2>

      <div className="space-y-2 text-gray-300">

        <div>🐟 Total Fish: {stats.totalFish}</div>

        <div>💰 Global Profit: {stats.totalMoney} C$</div>

        {stats.biggestFish && (
          <div>
            🐋 Biggest Fish: {stats.biggestFish.fish} ({stats.biggestFish.weight}kg)
          </div>
        )}

      </div>

    </div>

  );
}