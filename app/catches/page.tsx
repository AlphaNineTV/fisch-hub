import Navbar from "@/components/Navbar"
import CatchFeed from "@/components/CatchFeed"

export default function CatchesPage() {

  return (

    <main className="bg-gradient-to-b from-black via-gray-950 to-black text-white min-h-screen">

      <Navbar />

      <section className="max-w-6xl mx-auto py-20 px-10">

        <h1 className="text-4xl font-bold mb-10">
          🎣 Live Catch Feed
        </h1>

        <CatchFeed />

      </section>

    </main>

  )

}