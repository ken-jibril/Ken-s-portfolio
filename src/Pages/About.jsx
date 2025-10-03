function About() {
  return (
    <section className="px-4 py-12">
      {/* Heading */}
      <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8">
        About Me
      </h1>

      {/* About text */}
      <div className="max-w-4xl mx-auto text-white leading-relaxed space-y-6 px-2 sm:px-6">
        <p className="text-base sm:text-lg md:text-xl font-medium">
          Hey, I'm Ken — a Front-End Developer passionate about creating fast,
          responsive, and visually engaging web experiences. I enjoy crafting
          clean, reusable components that make development smoother and more
          scalable.
        </p>

        <p className="text-base sm:text-lg md:text-xl font-medium">
          Over time, I've built projects ranging from responsive websites to
          interactive apps with API integrations. My focus is always on
          delivering intuitive, accessible interfaces that users actually enjoy
          using.
        </p>

        <p className="text-base sm:text-lg md:text-xl font-medium">
          When I'm not coding, you'll probably find me watching a good series or
          vibing to some jams — both keep me inspired and fuel my creativity
          when I get back to the code.
        </p>
      </div>

      {/* Tech Stack */}
      <div className="max-w-5xl mx-auto mt-12">
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6">
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <p className="bg-white text-amber-700 text-lg sm:text-xl md:text-2xl text-center flex items-center justify-center rounded py-2 px-3 font-bold hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-[0_0_20px_cyan]">
            HTML5
          </p>
          <p className="bg-white text-amber-700 text-lg sm:text-xl md:text-2xl text-center flex items-center justify-center rounded py-2 px-3 font-bold hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-[0_0_20px_cyan]">
            CSS3
          </p>
          <p className="bg-white text-amber-700 text-lg sm:text-xl md:text-2xl text-center flex items-center justify-center rounded py-2 px-3 font-bold hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-[0_0_20px_cyan]">
            JavaScript (ES6+)
          </p>
          <p className="bg-white text-amber-700 text-lg sm:text-xl md:text-2xl text-center flex items-center justify-center rounded py-2 px-3 font-bold hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-[0_0_20px_cyan]">
            React.js
          </p>
          <p className="bg-white text-amber-700 text-lg sm:text-xl md:text-2xl text-center flex items-center justify-center rounded py-2 px-3 font-bold hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-[0_0_20px_cyan]">
            Node.js
          </p>
          <p className="bg-white text-amber-700 text-lg sm:text-xl md:text-2xl text-center flex items-center justify-center rounded py-2 px-3 font-bold hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-[0_0_20px_cyan]">
            Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
