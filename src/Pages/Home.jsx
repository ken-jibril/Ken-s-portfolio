import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="">
      <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Text section */}
        <div className="flex flex-col items-start text-center md:text-left md:w-1/2">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug">
            Hi I'm Ken <br /> A Front-End Developer
          </h1>

          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed my-6">
            I create websites that are UI friendly <br />
            and embrace the modern web dev vibe. <br />
            I focus on building elegant solutions.
          </p>

          {/* Traits */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
            <p className="text-amber-600 hover:text-amber-500 font-semibold text-sm sm:text-base md:text-lg px-3 py-1 rounded-3xl bg-white/10">
              Creative
            </p>
            <p className="text-amber-600 hover:text-amber-500 font-semibold text-sm sm:text-base md:text-lg px-3 py-1 rounded-3xl bg-white/10">
              Passionate
            </p>
            <p className="text-amber-600 hover:text-amber-500 font-semibold text-sm sm:text-base md:text-lg px-3 py-1 rounded-3xl bg-white/10">
              Focused
            </p>
            <p className="text-amber-600 hover:text-amber-500 font-semibold text-sm sm:text-base md:text-lg px-3 py-1 rounded-3xl bg-white/10">
              Detail-Oriented
            </p>
          </div>

          {/* Button */}
          <Link
            to="/about"
            className="bg-amber-800 hover:bg-amber-700 text-white font-medium text-base sm:text-lg md:text-xl rounded-3xl px-6 py-3 inline-flex items-center gap-2"
          >
            About Me <span className="text-2xl">→</span>
          </Link>
        </div>

        {/* Image section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/src/assets/ken's image.jpg"
            alt="Ken's Photo"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 object-cover rounded-full transition-all duration-500 ease-in-out hover:shadow-[0_0_60px_cyan]"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
