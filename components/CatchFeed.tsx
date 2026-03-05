"use client";

import { useEffect, useState } from "react";

export default function CatchFeed() {

  const [catches, setCatches] = useState<any[]>([]);

  async function loadCatches() {

    const res = await fetch("/api/catch");

    const data = await res.json();
    setCatches(data.catches);

    setCatches(data);
  }

  useEffect(() => {

    loadCatches();

    const interval = setInterval(loadCatches, 5000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="bg-zinc-900 p-6 rounded-xl">

      <h2 className="text-xl font-bold mb-4">
        🎣 Live Catches
      </h2>

      <div className="space-y-2">

        {catches
  .filter(c => c.fish && c.fish.trim() !== "")
  .map((c, i) => (

          <div key={i} className="text-sm text-gray-300">

            🎣 {c.fish} | {c.weight}kg | +{c.value}C$

{c.mutations?.length > 0 && (
  <> | {c.mutations.map((m:any)=>`✨ ${m}`).join(" | ")}</>
)}
<div className="text-xs text-gray-500">
  {Math.floor((Date.now() - c.time) / 1000)}s ago

  
</div>
          </div>

        ))}

      </div>

    </div>

  );

}