"use client"

import { useState } from "react"
import Navbar from "../../../components/Navbar"

export default function RodComparison() {

  const [weight, setWeight] = useState(2)
  const [multiplier, setMultiplier] = useState(1)

  const rodA = 13
  const rodB = 18

  const profitA = weight * rodA * multiplier
  const profitB = weight * rodB * multiplier

  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      <section className="max-w-4xl mx-auto py-24 px-10">

        <h1 className="text-4xl font-bold mb-10">
          Rod Comparison
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

          {/* Multiplier */}
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

          {/* Results */}
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-800">

            <div className="bg-black p-6 rounded border border-gray-700">
              <h3 className="text-xl mb-2">Rod A</h3>
              <p className="text-gray-400 mb-2">Price/kg: {rodA}</p>
              <p className="text-2xl font-bold">
                {profitA.toFixed(2)} C$
              </p>
            </div>

            <div className="bg-black p-6 rounded border border-gray-700">
              <h3 className="text-xl mb-2">Rod B</h3>
              <p className="text-gray-400 mb-2">Price/kg: {rodB}</p>
              <p className="text-2xl font-bold">
                {profitB.toFixed(2)} C$
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  )
}