import Navbar from "../../components/Navbar"

export default function Tools() {
  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      <section className="max-w-6xl mx-auto py-32 px-10">

        <h1 className="text-5xl font-bold mb-10">
          Fisch Hub Tools
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <a
  href="/tools/profit-calculator"
  className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition"
>
  <h3 className="text-xl mb-3">Profit Calculator</h3>
  <p className="text-gray-400">
    Estimate fishing profit based on weight and mutations.
  </p>
</a>

<a
  href="/tools/rod-comparison"
  className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition"
>
  <h3 className="text-xl mb-3">Rod Comparison</h3>
  <p className="text-gray-400">
    Compare rods and find the most profitable setup.
  </p>
</a>

<a
  href="/tools/rod-efficiency"
  className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition"
>
  <h3 className="text-xl mb-3">Rod Efficiency</h3>
  <p className="text-gray-400">
    Calculate profit per hour based on rod efficiency.
  </p>
</a>

        </div>

      </section>

    </main>
  )
}