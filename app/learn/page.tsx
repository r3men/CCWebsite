import { CheckCircle } from "lucide-react";

export default function Learn() {
  const topics = [
    {
      title: "CIA Triad",
      id: "cia-triad",
      content: (
        <ul className="space-y-3 mt-4">
          <li className="flex items-start gap-3">
            <CheckCircle className="text-blue-400 w-5 h-5 mt-1" />
            <p>
              <strong>Confidentiality</strong> — Ensures that information is only accessible
              to authorized individuals and protected from unauthorized disclosure.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="text-blue-400 w-5 h-5 mt-1" />
            <p>
              <strong>Integrity</strong> — Keeps data accurate, consistent, and trustworthy by
              preventing unauthorized modification.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="text-blue-400 w-5 h-5 mt-1" />
            <p>
              <strong>Availability</strong> — Ensures data and systems remain accessible to
              authorized users when needed, even in the event of disruptions.
            </p>
          </li>
        </ul>
      ),
    },
    {
      title: "3 States of Data",
      id: "states-of-data",
      content: (
        <ul className="space-y-3 mt-4">
          <li className="flex items-start gap-3">
            <CheckCircle className="text-blue-400 w-5 h-5 mt-1" />
            <p>
              <strong>Data at Rest</strong> — Stored data in databases, drives, or cloud
              storage that must be encrypted and protected from unauthorized access.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="text-blue-400 w-5 h-5 mt-1" />
            <p>
              <strong>Data in Transit</strong> — Data being transferred between systems,
              requiring secure transmission protocols like HTTPS or VPNs.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="text-blue-400 w-5 h-5 mt-1" />
            <p>
              <strong>Data in Use</strong> — Data currently being processed or accessed,
              needing protection from unauthorized applications or processes.
            </p>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-black text-gray-100 font-sans">
      <nav className="bg-zinc-900 border-b border-blue-800 sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-500">Learn Cybersecurity</h1>
          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            {topics.map((topic) => (
              <li key={topic.id}>
                <a
                  href={`#${topic.id}`}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {topic.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <header className="bg-gradient-to-b from-blue-900/30 to-black py-20 text-center border-b border-blue-900/40">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Explore Core Cybersecurity Concepts
        </h2>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Strengthen your knowledge with fundamental principles that power digital defense systems.
        </p>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        {topics.map((topic) => (
          <article key={topic.id} id={topic.id} className="scroll-mt-24">
            <h3 className="text-3xl font-semibold mb-4 text-blue-400">
              {topic.title}
            </h3>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl pt-0 pb-6 px-6 shadow-md hover:border-blue-700 transition-colors">
              {topic.content}
            </div>
          </article>
        ))}
      </section>

      <footer className="border-t border-blue-900/40 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Learn Cybersecurity. All rights reserved.
      </footer>
    </main>
  );
}
