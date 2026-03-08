import { useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="flex flex-row gap-2 sm:gap-4 items-center justify-evenly px-4 sm:px-6 py-2 bg-gray-800/95 backdrop-blur-sm shadow-lg border-b border-gray-700">
        {/* Left side - Avatar and Initials */}
        <div className="flex items-center gap-3">
          {/* Avatar - Face only with fade and beard */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-amber-500 flex-shrink-0">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Face - Light chocolate skin tone */}
              <ellipse cx="50" cy="55" rx="35" ry="40" fill="#8B5A2B" />

              {/* Forehead shadow for depth */}
              <ellipse
                cx="50"
                cy="35"
                rx="30"
                ry="12"
                fill="#7A4A1F"
                opacity="0.3"
              />

              {/* Fade haircut - darker top */}
              <ellipse cx="50" cy="25" rx="32" ry="15" fill="#1a1a1a" />
              <ellipse cx="50" cy="32" rx="33" ry="10" fill="#2d2d2d" />

              {/* Eyes */}
              <ellipse cx="38" cy="50" rx="4" ry="3" fill="#1a1a1a" />
              <ellipse cx="62" cy="50" rx="4" ry="3" fill="#1a1a1a" />

              {/* Eyebrows */}
              <path
                d="M32 44 Q38 42 44 44"
                stroke="#1a1a1a"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M56 44 Q62 42 68 44"
                stroke="#1a1a1a"
                strokeWidth="2"
                fill="none"
              />

              {/* Nose */}
              <path
                d="M50 52 L48 62 L52 62"
                stroke="#6B4423"
                strokeWidth="2"
                fill="none"
              />

              {/* Mouth */}
              <path
                d="M42 70 Q50 75 58 70"
                stroke="#3d2314"
                strokeWidth="2"
                fill="none"
              />

              {/* Beard at bottom of chin only */}
              <path
                d="M25 70 Q20 85 30 95 Q50 105 70 95 Q80 85 75 70"
                fill="#1a1a1a"
              />
              <path
                d="M25 70 Q20 80 30 88 Q50 98 70 88 Q80 80 75 70"
                fill="#2d2d2d"
              />

              {/* Ears */}
              <ellipse cx="15" cy="55" rx="5" ry="8" fill="#8B5A2B" />
              <ellipse cx="85" cy="55" rx="5" ry="8" fill="#8B5A2B" />
            </svg>
          </div>

          {/* Initials KN */}
          <span className="text-amber-500 font-bold text-lg sm:text-xl tracking-wider">
            KN
          </span>
        </div>

        {/* Center - Navigation Links */}
        <div className="flex flex-row gap-1 sm:gap-2 items-center justify-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm sm:text-base lg:text-lg px-2 sm:px-3 py-1 rounded-full transition-all duration-300 ease-in-out whitespace-nowrap ${
                activeSection === item.id
                  ? "text-amber-500 bg-amber-500/20 font-semibold"
                  : "text-white hover:text-amber-400 hover:bg-white/10"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Empty right side for balance */}
        <div className="w-10 sm:w-12"></div>
      </div>
    </nav>
  );
}

export default Navbar;
