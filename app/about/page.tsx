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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet 
            justo sit amet lacus lacinia vehicula. Proin in risus et sapien pharetra 
            malesuada at ac enim. In a leo sed lorem ultrices finibus. Vestibulum ante 
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
            Donec vitae mauris quis erat dignissim congue sit amet non eros.
          </p>
        </article>

        <article>
          <h2 className="text-3xl font-semibold mb-4 text-blue-400">Why We Built This</h2>
          <p className="text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id elit 
            vel mauris consequat volutpat. Nullam porta eros in neque rhoncus tincidunt. 
            Aenean sit amet eros vel purus ultricies porttitor vel vitae ipsum. Vivamus 
            sit amet lorem eget justo eleifend feugiat sit amet at lacus.
          </p>
        </article>

        <article>
          <h2 className="text-3xl font-semibold mb-4 text-blue-400">Our Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat 
            commodo mi, in sagittis enim lacinia ut. Fusce venenatis erat at purus 
            volutpat, sed vehicula lorem elementum. Sed a nisl vel elit rhoncus porta. 
            Vivamus blandit, massa vel blandit imperdiet, nunc sapien tincidunt libero, 
            a gravida eros orci vel erat.
          </p>
        </article>
      </section>

      <footer className="border-t border-blue-900/40 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Learn Cybersecurity. All rights reserved.
      </footer>
    </main>
  );
}
