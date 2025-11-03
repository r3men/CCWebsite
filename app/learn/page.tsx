export default function Learn() {
  const topics = [
    {
      title: "CIA Triad",
      id: "cia-triad",
      content: `
        The CIA Triad is an acronym used to represent the goal of network security. This goal pertains to the security of data. To create utmost network security, the fundamental data properties that need to be maintained are C (Confidentiality), I (Integrity), and A (Availability). Confidentiality refers ensuring that the data is not revealed, that it can only be accessed & viewed by authorized people. Integrity refers to keeping the data intact, ascertaining the data is not corrupted or modified. Finally, availability refers to the constant accessibility of data, allowing authorized users to reliaby access any information when needed. In the event of disruptions or threats, data backups and a solid recovery plan should be readily available. 
      `,
    },
    {
      title: "3 States of Data",
      id: "states-of-data",
      content: `
        Data exists in three primary states: at rest, in transit, and in use. 
        Protecting data in each state requires specific strategies — encryption, 
        secure transfer protocols, and endpoint protections.
      `,
    },
    {
      title: "Authentication Types",
      id: "authentication",
      content: `
        Authentication verifies a user's identity before granting access to resources. 
        Common methods include passwords, biometrics, security tokens, and multifactor authentication.
      `,
    },
    {
      title: "Passwords",
      id: "passwords",
      content: `
        Passwords are the most common authentication method, but they are also 
        one of the most vulnerable. Strong password policies and password managers 
        can help reduce risks.
      `,
    },
    {
      title: "Phishing",
      id: "phishing",
      content: `
        Phishing is a type of social engineering attack where attackers trick individuals 
        into revealing sensitive information by posing as trusted entities.
      `,
    },
    {
      title: "Social Engineering",
      id: "social-engineering",
      content: `
        Social engineering manipulates people into divulging confidential information. 
        Awareness and education are key defenses against these psychological attacks.
      `,
    },
    {
      title: "Potential Threats",
      id: "potential-threats",
      content: `
        Cyber threats come in many forms — malware, ransomware, DDoS attacks, insider threats, and more. 
        Understanding these helps in building effective defense mechanisms.
      `,
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
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 shadow-md hover:border-blue-700 transition-colors">
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {topic.content}
              </p>
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
