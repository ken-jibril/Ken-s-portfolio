function About() {
  return (
    <section id="about" className="px-4 py-20">
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
    </section>
  );
}

export default About;
