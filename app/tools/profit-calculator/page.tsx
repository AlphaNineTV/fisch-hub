"use client"

import { useState } from "react"
import Navbar from "../../../components/Navbar"

export default function ProfitCalculator() {

  const [weight, setWeight] = useState(1)
  const [price, setPrice] = useState(10)
  const [multiplier, setMultiplier] = useState(1)

  const profit = weight * price * multiplier

  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      <section className="max-w-4xl mx-auto py-24 px-10">

        <h1 className="text-4xl font-bold mb-10">
          Profit Calculator
        </h1>

        <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 space-y-6">

          {/* Weight */}
          <div>
            <label className="block mb-2 text-gray-400">
              Fish Weight (kg)
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
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
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

          {/* Result */}
          <div className="pt-6 border-t border-gray-800">

            <h2 className="text-2xl font-bold">
              Estimated Profit: {profit.toFixed(2)} C$
            </h2>

          </div>

        </div>

      </section>

    </main>
  )
}