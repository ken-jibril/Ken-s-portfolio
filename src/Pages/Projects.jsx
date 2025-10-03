function Projects() {
  return (
    <section className="px-4 py-12">
      {/* Heading */}
      <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10">
        My Projects
      </h1>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        
        {/* Project Card */}
        <div className="max-w-sm w-full hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-[0_0_30px_magenta] rounded-xl bg-gray-800">
          <img
            src="/src/assets/Frontend_Mentor.io .png"
            alt="QR Code"
            className="rounded-t-xl w-full object-cover"
          />
          <div className="p-4">
            <h2 className="text-white text-center text-xl sm:text-2xl font-bold mb-2">
              QR Code Component
            </h2>
            <p className="text-white text-base sm:text-lg leading-relaxed text-center">
              The QR Code above is to be used to give access to Front-End mentor challenges for practice.
            </p>
            <div className="flex justify-center mt-4">
              <a
                href="https://qr-code-component-pied-phi-87.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 text-black font-semibold px-6 py-2 rounded-xl hover:bg-amber-400 hover:scale-105 transition-all duration-300"
              >
                View Live
              </a>
            </div>
          </div>
        </div>

        {/* Blog Preview Card */}
        <div className="max-w-sm w-full hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-[0_0_30px_magenta] rounded-xl bg-gray-800">
          <img
            src="/src/assets/Screenshot 2025-08-21 125557.png"
            alt="Blog Card Photo"
            className="rounded-t-xl w-full object-cover"
          />
          <div className="p-4">
            <h2 className="text-white text-center text-xl sm:text-2xl font-bold mb-2">
              Blog Preview Card
            </h2>
            <p className="text-white text-base sm:text-lg leading-relaxed text-center">
              The Blog Card is used as a clickable card to view more details on the Front-end Technologies.
            </p>
            <div className="flex justify-center mt-4">
              <a
                href="https://blog-preview-card-weld-delta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 text-black font-semibold px-6 py-2 rounded-xl hover:bg-amber-400 hover:scale-105 transition-all duration-300"
              >
                View Live
              </a>
            </div>
          </div>
        </div>

        {/* Social Links Profile */}
        <div className="max-w-sm w-full hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-[0_0_30px_magenta] rounded-xl bg-gray-800">
          <img
            src="/src/assets/Screenshot 2025-08-23 195239.png"
            alt="Profile Card Photo"
            className="rounded-t-xl w-full object-cover"
          />
          <div className="p-4">
            <h2 className="text-white text-center text-xl sm:text-2xl font-bold mb-2">
              Social Link's Profile
            </h2>
            <p className="text-white text-base sm:text-lg leading-relaxed text-center">
              This Social Links Profile serves as a personal hub, allowing users to easily access and connect with the owner's various social media platforms.
            </p>
            <div className="flex justify-center mt-4">
              <a
                href="https://social-links-profile-nu-khaki.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 text-black font-semibold px-6 py-2 rounded-xl hover:bg-amber-400 hover:scale-105 transition-all duration-300"
              >
                View Live
              </a>
            </div>
          </div>
        </div>

        {/* Recipe Page */}
        <div className="max-w-sm w-full hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-[0_0_30px_magenta] rounded-xl bg-gray-800">
          <img
            src="/src/assets/Screenshot 2025-10-02 131425.png"
            alt="Recipe Photo"
            className="rounded-t-xl w-full object-cover"
          />
          <div className="p-4">
            <h2 className="text-white text-center text-xl sm:text-2xl font-bold mb-2">
              Recipe Page
            </h2>
            <p className="text-white text-base sm:text-lg leading-relaxed text-center">
              This Recipe Details Page provides a complete breakdown of a dish, featuring its image, title, description, instructions, ingredients, and nutritional info.
            </p>
            <div className="flex justify-center mt-4">
              <a
                href="https://recipe-mu-gules.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 text-black font-semibold px-6 py-2 rounded-xl hover:bg-amber-400 hover:scale-105 transition-all duration-300"
              >
                View Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
