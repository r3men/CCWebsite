export default function Learn() {
  const topics = [
    { title: "CIA Triad", id: "cia-triad" },
    { title: "3 States of Data", id: "states-of-data" },
    { title: "Authentication Types", id: "authentication" },
    { title: "Passwords", id: "passwords" },
    { title: "Phishing", id: "phishing" },
    { title: "Social Engineering", id: "social-engineering" },
    { title: "Potential Threats", id: "potential-threats" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-blue-600">Learn Cybersecurity</h1>
          <ul className="flex space-x-4 text-sm font-medium">
            {topics.map((topic) => (
              <li key={topic.id}>
                <a
                  href={`#${topic.id}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {topic.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-4 py-10 space-y-16">
        {topics.map((topic) => (
          <article key={topic.id} id={topic.id}>
            <h2 className="text-2xl font-bold mb-4 text-blue-600">{topic.title}</h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut
              aliquam tincidunt, nunc nisl aliquam nunc, eget aliquam nisl nunc eget nunc.
              Mauris nec justo vel eros malesuada dictum. Duis quis neque vitae risus
              pulvinar tincidunt non sit amet magna. Integer sit amet justo sed nisi
              ultricies tempor.
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
