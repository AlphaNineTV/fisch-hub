import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-black via-gray-950 to-black text-white min-h-screen">

      <Navbar />


      {/* HERO */}

      <section className="max-w-6xl mx-auto py-32 px-10">

<h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
  Fisch Hub
</h1>

        <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
          The ultimate tracking and analytics platform for Roblox Fisch.
        </p>

        <div className="flex gap-6">

          <a
            href="/download"
            className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-lg font-semibold transition shadow-lg shadow-blue-600/30"
          >
            Download Tracker
          </a>

          <a
            href="/tools"
            className="border border-gray-700 hover:border-gray-500 px-8 py-4 rounded-lg transition"
          >
            Explore Tools
          </a>

          <a
  href="/catches"
  className="border border-gray-700 hover:border-gray-500 px-8 py-4 rounded-lg transition"
>
  View Live Catch Feed
</a>

        </div>

      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-10 py-20">

        <h2 className="text-3xl font-bold mb-12">
          Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-gray-900/60 backdrop-blur p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition">
            <h3 className="text-xl mb-3 font-semibold">
              Automatic Catch Tracking
            </h3>
            <p className="text-gray-400">
              Fisch Hub automatically tracks every fish you catch while playing Roblox Fisch.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl mb-3 font-semibold">
              Profit Analytics
            </h3>
            <p className="text-gray-400">
              Analyze your fishing profit, mutation rates and catch efficiency.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl mb-3 font-semibold">
              Meta Tools
            </h3>
            <p className="text-gray-400">
              Discover the best rods, fishing spots and strategies.
            </p>
          </div>

        </div>

      </section>

      {/* TOOLS PREVIEW */}
      <section className="max-w-6xl mx-auto px-10 py-20">

        <h2 className="text-3xl font-bold mb-12">
          Fisch Hub Tools
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl mb-3">Profit Calculator</h3>
<p className="text-gray-400 mb-12 max-w-xl">
  Powerful analytics tools designed to optimize your fishing strategy.
</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl mb-3">Rod Comparison</h3>
            <p className="text-gray-400">
              Compare rods and find the most efficient setup.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl mb-3">Spot Analyzer</h3>
            <p className="text-gray-400">
              Discover the most profitable fishing spots.
            </p>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 mt-20 py-10 text-center text-gray-500">

        <p>Fisch Hub © 2026</p>

      </footer>

    </main>
  )
}