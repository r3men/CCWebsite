import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white font-sans">
      <main className="flex flex-col items-center justify-center px-6 py-20 text-center space-y-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Learn Cybersecurity
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
            Master cybersecurity concepts. Build your defense. Stay safe.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/learn"
            className="px-8 py-3 rounded-full border border-blue-500 text-blue-400 hover:bg-blue-500/10 transition-colors font-semibold"
          >
            Start Learning
          </Link>

          <a
            href="/about"
            className="px-8 py-3 rounded-full border border-blue-500 text-blue-400 hover:bg-blue-500/10 transition-colors font-semibold"
          >
            Learn More
          </a>
        </div>

        <div className="mt-16 relative">
          <div className="absolute -inset-2 bg-blue-600/30 blur-3xl rounded-full"></div>
          <div className="relative bg-gradient-to-b from-blue-700 to-black p-12 rounded-3xl shadow-lg border border-blue-900/30">
            <h2 className="text-2xl font-bold mb-2">“Security starts with awareness.”</h2>
            <p className="text-gray-400 text-sm">
              Dive into key cybersecurity principles that protect people and organizations every day.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
