import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Learn() {
  const topics = [
    {
      title: "CIA Triad",
      id: "cia-triad",
      content: (
       <>
        <p className = "mt-2"> 
          The CIA Triad is an acronym that is representative of the three parts of data that are in great need of protection. Here is what each of them stand for: 
        </p>
         
        <ul className="space-y-3 mt-4">
          <li className="flex items-center gap-3">
            <CheckCircle className="text-blue-400 w-5 h-5 flex-shrink-0" />
            <p className = "leading-relaxed">
              <strong>Confidentiality</strong> — Ensures that information is only accessible
              to authorized individuals and protected from unauthorized disclosure.
            </p>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-blue-400 w-5 h-5 flex-shrink-0" />
            <p className = "leading-relaxed">
              <strong>Integrity</strong> — Keeps data accurate, consistent, and trustworthy by
              preventing unauthorized modification.
            </p>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-blue-400 w-5 h-5 flex-shrink-0" />
            <p className = "leading-relaxed">
              <strong>Availability</strong> — Ensures data and systems remain accessible to
              authorized users when needed, even in the event of disruptions.
            </p>
          </li>
        </ul>
       </>
      ),
    },
    {
      title: "3 States of Data",
      id: "states-of-data",
      content: (
       <>
        <p className = "mt-2">
          In order to safely protect the CIA of data, we must first learn the three states that data can exist in:
        </p>
        <ul className="space-y-3 mt-4">
          <li className="flex items-center gap-3">
            <CheckCircle className="text-blue-400 w-5 h-5 flex-shrink-0" />
            <p className = "leading-relaxed">
              <strong>Data at Rest</strong> — Stored data in databases, files, hard drives, USB drives, memory, DVDs, etc.
            </p>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-blue-400 w-5 h-5 flex-shrink-0" />
            <p className = "leading-relaxed">
              <strong>Data in Transit</strong> — Data being transferred between systems, file sharing via LAN, through the Internet, etc.
            </p>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-blue-400 w-5 h-5 flex-shrink-0" />
            <p className = "leading-relaxed">
              <strong>Data in Use</strong> — Data currently being processed or accessed through file creation, usage in an application, data being processed/placed in memory, etc.
            </p>
          </li>
        </ul>
       </>
      ),
    },
    {
      title: "Different Types of Authentication",
      id: "types-of-authentication",
      content: (
       <>
        <p className = "mt-2">
          There are several types of authentication, categorized based on three main factors: Something you know, Something you have, and Something you are. These factors provide a basis for different methods of authentication. Here are some examples of each:
        </p>
        <ul className="space-y-3 mt-4">
          <li className="flex items-center gap-3">
            <CheckCircle className="text-blue-400 w-5 h-5 flex-shrink-0" />
            <p className = "leading-relaxed">
              <strong>Something You Know</strong> — Examples include passwords, certificates, PINs, & security questions.
            </p>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-blue-400 w-5 h-5 flex-shrink-0" />
            <p className = "leading-relaxed">
              <strong>Something You Have</strong> — Examples include both physical possessions, such as smart cards, hardware tokens, and USB security keys, or intangible possessions such as online security codes via authenticator apps.
            </p>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-blue-400 w-5 h-5 flex-shrink-0" />
            <p className = "leading-relaxed">
              <strong>Something You Are</strong> — Relates to biometrics, which is based upon measurable physical characteristics to verify identity. Examples include fingerprint scans, facial recognition, voice, & iris scans. This type of authentication is known to be expensive due to requiring higher level technology to fully implement.
            </p>
          </li>
        </ul>
       </>
      ),
    },
    {
      title: "Passwords",
      id: "passwords",
      content: (
       <>
        <p className = "mt-2">
          Generally, there are guidelines that are meant to be followed when generating/creating a safe password. Here are the main guidelines:
        </p>
        <ul className="space-y-3 mt-4">
          <li className="flex items-center gap-3">
            <CheckCircle className="text-blue-400 w-5 h-5 flex-shrink-0" />
            <p className = "leading-relaxed">
              <strong>Personal Information</strong> — When creating a password, do not include any personal information about yourself that could put your account in jeopardy. If malicious users are able to obtain personal information about yourself, it is relatively easy for them to figure out your password.
            </p>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-blue-400 w-5 h-5 flex-shrink-0" />
            <p className = "leading-relaxed">
              <strong>Reusing Passwords</strong> — Passwords should not be reused across different websites or applications because if a malicious user knows the password to any of the websites you use, they can try that password for any other website you use, putting all your accounts in danger.
            </p>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-blue-400 w-5 h-5 flex-shrink-0" />
            <p className = "leading-relaxed">
              <strong>Originality</strong> — Create original, unique, & random passwords that are not taken directly from the dictionary or are common words. 
            </p>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-blue-400 w-5 h-5 flex-shrink-0" />
            <p className = "leading-relaxed">
              <strong>Password Creation</strong> — When creating your password, make sure your password meets these criteria: (8-10 characters minimum, mix of uppercase & lowercase letters, & use of special characters/symbols)
            </p>
          </li>
        </ul>
       </>
      ),
    },
    {
      title: "Phishing",
      id: "phishing",
      content: (
       <>
        <p className = "mt-2">
          Phishing is the use of bogus emails & websites to trick you into supplying an attacker or malicious user with personal/confidential information. However, there are some ways to identify phishing emails/attacks. Here are the easiest ways to do so:
        </p>
        <ul className="space-y-3 mt-4">
          <li className="flex items-center gap-3">
            <CheckCircle className="text-blue-400 w-5 h-5 flex-shrink-0" />
            <p className = "leading-relaxed">
              <strong>Misspellings/Incorrect Grammar</strong> — Misspellings or incorrect grammar in emails are an indicator of a phishing attack. Some attackers do not check for mistakes when creating these malicious emails, while authorized companies hire professional writers to address users which will most likely not contain any grammar mistakes.
            </p>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-blue-400 w-5 h-5 flex-shrink-0" />
            <p className = "leading-relaxed">
              <strong>Email Address not Matching Sender</strong> — Professional emails sent out by companies will contain email addresses that align with the sender name. On the other hand, phishing attacks usually have misalignment between sender name and email address, a strong indicator that the email is fake.
            </p>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-blue-400 w-5 h-5 flex-shrink-0" />
            <p className = "leading-relaxed">
              <strong>URL Spoofing</strong> — Most phishing attacks contain links within the email, asking you to provide personal information in some sketchy website. Typically, the URLs of these links are malicious and do not point to a company's real website when hovered over. This is why you should always hover over any URLs that you think might lead you to malicious sites.
            </p>
          </li>
        </ul>
       </>
      ),
    },
    {
      title: "Social Engineering",
      id: "social-engineering",
      content: (
       <>
        <p className = "mt-2">
          Social engineering are threats specifically made pertaining to human factors within the technology environment. Because humans are susceptible to influence by other people (unlike technical defenses which are much stronger & less vulnerable), it makes social engineering so effective in the world of cybersecurity. But what specifically about human vulnerability makes it so effective?
        </p>
        <ul className="space-y-3 mt-4">
          <li className="flex items-center gap-3">
            <CheckCircle className="text-blue-400 w-5 h-5 flex-shrink-0" />
            <p className = "leading-relaxed">
              <strong>Wanting to Help</strong> — The action of helping someone alone makes any person feel better about themselves inside. Social engineering experts often abuse this by trying to manipulate the helpfulness of the average human. One example is Piggybacking, in which an authorized user may let an unauthorized user into a restricted area, simply because they want to help that person.
            </p>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-blue-400 w-5 h-5 flex-shrink-0" />
            <p className = "leading-relaxed">
              <strong>Avoiding Confrontation</strong> — Authorized people may feel uncomfortable with confronting or directly making contact with someone who they believe should not be in a restricted place. As a result, many of these people do not have the courage to go up and confront someone who, in their mind, should not have access to a restricted place. Another way of describing this is that people do not want to "make a scene". 
            </p>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-blue-400 w-5 h-5 flex-shrink-0" />
            <p className = "leading-relaxed">
              <strong>Sloppy Mistakes</strong> — Sloppy mistakes are one of the main reasons why social engineering is so successful. Rather than needing to enter a secure system and obtaining information that way, humans are vulnerable to making silly mistakes such as leaving passwords directly out in the open, trashing (not shredding) important documents, and even leaving computers with authorized access unattended.
            </p>
          </li>
        </ul>
       </>
      ),
    },
    {
      title: "Potential Threats",
      id: "potential-threats",
      content: (
       <>
        <p className = "mt-2">
          By not getting a good grasp on the explored concepts within this website, your company, or you, may find yourself becoming a victim to several types of attacks. This is why it is best to make sure you (as well as any employees) are well educated on basic cybersecurity principles that need to be addressed in such a greater capacity in the modern era. Here are some potential issues that could arise from an indifference to proper cybersecurity understanding:
        </p>
        <ul className="space-y-3 mt-4">
          <li className="flex items-center gap-3">
            <CheckCircle className="text-blue-400 w-5 h-5 flex-shrink-0" />
            <p className = "leading-relaxed">
              <strong>Stolen Personal Information</strong> — By not being able to identify phishing attacks, utilizing weak passwords, & being unaware of common social engineering techniques, you are putting yourself (and possibly your company) at a great risk of having personal information stolen and even leaked.
            </p>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-blue-400 w-5 h-5 flex-shrink-0" />
            <p className = "leading-relaxed">
              <strong>Account Hijacking</strong> — Not following essential practices for constructing passwords, not possessing proper authentication, & having a very weak understanding of phishing can all lead to you having your account stolen, manipulated, and possibly even destroyed or deleted.
            </p>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-blue-400 w-5 h-5 flex-shrink-0" />
            <p className = "leading-relaxed">
              <strong>Emotional & Mental Strain</strong> — Ultimately, if you do not have a basic understanding of the importance of cybersecurity in this technological age, you are putting yourself at risk of days, weeks, or even years of emotional & mental strain that can result from a variety of attacks made by users/people with malicious intent.
            </p>
          </li>
        </ul>
       </>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-black text-gray-100 font-sans">
      <nav className="bg-zinc-900 border-b border-blue-800 sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-500">Learn Cybersecurity
            <Link href = "/"> </Link>
          </h1>
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
