"use client"

import { useState } from "react"
import Navbar from "../../../components/Navbar"

export default function RodEfficiency() {

  const [weight, setWeight] = useState(2)
  const [pricePerKg, setPricePerKg] = useState(13)
  const [multiplier, setMultiplier] = useState(1)
  const [catchTime, setCatchTime] = useState(10)

  const profitPerCatch = weight * pricePerKg * multiplier

  const catchesPerHour = 3600 / catchTime

  const profitPerHour = profitPerCatch * catchesPerHour

  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      <section className="max-w-4xl mx-auto py-24 px-10">

        <h1 className="text-4xl font-bold mb-10">
          Rod Efficiency Calculator
        </h1>

        <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 space-y-6">

          {/* Weight */}
          <div>
            <label className="block mb-2 text-gray-400">
              Average Fish Weight (kg)
            </label>

            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full bg-black border border-gray-700 p-3 rounded"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-2 text-gray-400">
              Price per kg
            </label>

            <input
              type="number"
              value={pricePerKg}
              onChange={(e) => setPricePerKg(Number(e.target.value))}
              className="w-full bg-black border border-gray-700 p-3 rounded"
            />
          </div>

          {/* Mutation */}
          <div>
            <label className="block mb-2 text-gray-400">
              Mutation Multiplier
            </label>

            <input
              type="number"
              value={multiplier}
              onChange={(e) => setMultiplier(Number(e.target.value))}
              className="w-full bg-black border border-gray-700 p-3 rounded"
            />
          </div>

          {/* Catch Time */}
          <div>
            <label className="block mb-2 text-gray-400">
              Average Catch Time (seconds)
            </label>

            <input
              type="number"
              value={catchTime}
              onChange={(e) => setCatchTime(Number(e.target.value))}
              className="w-full bg-black border border-gray-700 p-3 rounded"
            />
          </div>

          {/* Results */}
          <div className="pt-6 border-t border-gray-800 space-y-3">

            <h2 className="text-xl">
              Profit per Catch: <span className="font-bold">{profitPerCatch.toFixed(2)} C$</span>
            </h2>

            <h2 className="text-xl">
              Catches per Hour: <span className="font-bold">{catchesPerHour.toFixed(1)}</span>
            </h2>

            <h2 className="text-2xl font-bold text-green-400">
              Profit per Hour: {profitPerHour.toFixed(0)} C$
            </h2>

          </div>

        </div>

      </section>

    </main>
  )
}