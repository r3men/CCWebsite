export default function About() {
  return (
    <main className="min-h-screen bg-black text-gray-100 font-sans">
      <section className="bg-gradient-to-b from-blue-900/30 to-black py-20 text-center border-b border-blue-900/40">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          About Learn Cybersecurity
        </h1>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Empowering learners to understand, defend, and shape the digital world.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        <article>
          <h2 className="text-3xl font-semibold mb-4 text-blue-400">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            Inform individuals or companies of the importance of cybersecurity and how to safely protect against the dangers of the modern era.
          </p>
        </article>

        <article>
          <h2 className="text-3xl font-semibold mb-4 text-blue-400">Sources Cited</h2>
          <p className="text-gray-300 leading-relaxed">
            <a href = "https://cyber.org" target = "_blank" rel = "noopener referrer" className = "text-blue-400 hover:text-blue-300 underline transition-colors"> </a>
            <a href = "https://chatgpt.com" target = "_blank" rel = "noopener referrer" className = "text-blue-400 hover:text-blue-300 underline transition-colors"> </a>
          </p>
        </article>
        
      </section>

      <footer className="border-t border-blue-900/40 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Learn Cybersecurity. All rights reserved.
      </footer>
    </main>
  );
}
