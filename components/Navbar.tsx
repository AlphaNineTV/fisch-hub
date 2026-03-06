export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">

      <h1 className="text-xl font-bold text-white">
        Fisch Hub
      </h1>

      <div className="flex gap-8 text-gray-300">
        <a href="/" className="hover:text-white">Home</a>
        <a href="/download" className="hover:text-white">Download</a>
        <a href="/tools" className="hover:text-white">Tools</a>
        <a
  href="/catches"
  className="text-gray-300 hover:text-white transition"
>
  Live Catches
</a>
      </div>

    </nav>
  )
}