import Navbar from "../../components/Navbar"

export default function Download() {
  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      <section className="max-w-4xl mx-auto py-32 px-10 text-center">

        <h1 className="text-5xl font-bold mb-6">
          Download Fisch Hub Tracker
        </h1>

        <p className="text-gray-400 mb-10">
          Automatically track your catches while playing Roblox Fisch.
        </p>

        <a
          href="#"
          className="bg-green-600 hover:bg-green-500 px-10 py-4 rounded-lg text-lg"
        >
          Download Tracker
        </a>

      </section>

    </main>
  )
}