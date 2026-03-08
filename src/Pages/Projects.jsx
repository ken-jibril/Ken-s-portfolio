function Projects() {
  const projects = [
    {
      id: 1,
      title: "Movers App",
      description:
        "A moving company application for booking and managing relocation services.",
      liveUrl: "https://movers-app-amber.vercel.app/",
      image: "/MoveMate kenya (1).png",
    },
    {
      id: 2,
      title: "Soin Tours",
      description:
        "A tour booking website for exploring destinations and booking travel experiences.",
      liveUrl: "https://soin-tours.vercel.app/",
      image: "/Soin Africa Safaris.png",
    },
    {
      id: 3,
      title: "My Portfolio",
      description:
        "My personal portfolio website showcasing my skills, projects, and expertise as a frontend developer.",
      liveUrl: "https://ken-s-portfolio-pi.vercel.app/",
      image: "/Tech-inspired logo featuring 'F' and 'D' initials..png",
    },
  ];

  return (
    <section id="projects" className="px-4 py-20">
      {/* Heading */}
      <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10">
        My Projects
      </h1>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center max-w-5xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="max-w-sm w-full hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-[0_0_30px_magenta] rounded-xl p-4 bg-gray-800/50 border border-gray-700"
          >
            {/* Project Image - Placeholder until user provides photos */}
            <div className="rounded-xl w-full h-48 sm:h-56 bg-gray-700 flex items-center justify-center mb-4">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-400 text-lg">Photo coming soon</span>
              )}
            </div>

            <div className="p-4">
              <h2 className="text-white text-center text-xl sm:text-2xl font-bold mb-2">
                {project.title}
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-center mb-4">
                {project.description}
              </p>
              <div className="flex justify-center mt-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500 text-black font-semibold px-6 py-2 rounded-xl hover:bg-amber-400 hover:scale-105 transition-all duration-300"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
