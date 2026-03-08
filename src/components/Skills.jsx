import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaDatabase } from "react-icons/fa";
import { SiDjango, SiFirebase, SiSqlite } from "react-icons/si";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function Skills() {
  const [openCategory, setOpenCategory] = useState("frontend");

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend",
      icon: "{ }",
      skills: [
        {
          name: "HTML5",
          icon: <FaHtml5 className="text-orange-500 text-2xl" />,
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt className="text-blue-500 text-2xl" />,
        },
        {
          name: "JavaScript (ES6+)",
          icon: <FaJs className="text-yellow-400 text-2xl" />,
        },
        {
          name: "React",
          icon: <span className="text-2xl">⚛️</span>,
        },
      ],
    },
    {
      id: "backend",
      title: "Backend",
      icon: "⚙️",
      skills: [
        {
          name: "Python",
          icon: <FaPython className="text-blue-400 text-2xl" />,
        },
        {
          name: "Django",
          icon: <SiDjango className="text-green-600 text-2xl" />,
        },
      ],
    },
    {
      id: "database",
      title: "Database",
      icon: <FaDatabase className="text-orange-600 text-2xl" />,
      skills: [
        {
          name: "MySQL",
          icon: <FaDatabase className="text-orange-600 text-2xl" />,
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="text-yellow-500 text-2xl" />,
        },
        {
          name: "SQLite",
          icon: <SiSqlite className="text-blue-500 text-2xl" />,
        },
      ],
    },
    {
      id: "softskills",
      title: "Soft Skills",
      icon: "💬",
      skills: [
        {
          name: "Communication Skills",
          icon: <span className="text-2xl">🗣️</span>,
        },
        {
          name: "Team Collaboration",
          icon: <span className="text-2xl">🤝</span>,
        },
        {
          name: "Project Management",
          icon: <span className="text-2xl">📋</span>,
        },
      ],
    },
  ];

  return (
    <section id="skills" className="px-4 py-20">
      <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
        Skills & Technologies
      </h1>
      <p className="text-gray-300 text-base sm:text-lg text-center mb-12 max-w-2xl mx-auto">
        Here's what I bring to the table — a solid foundation in both frontend
        and backend development.
      </p>

      <div className="max-w-3xl mx-auto space-y-4">
        {skillCategories.map((category) => (
          <div
            key={category.id}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden transition-all duration-300"
          >
            {/* Header - Clickable */}
            <button
              onClick={() => toggleCategory(category.id)}
              className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-gray-700/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                {/* Icon */}
                <span className="text-amber-500 font-mono text-xl sm:text-2xl font-bold">
                  {category.icon}
                </span>
                {/* Category Name */}
                <span className="text-white text-lg sm:text-xl font-semibold">
                  {category.title}
                </span>
              </div>
              {/* Dropdown Arrow */}
              <span className="text-amber-500 text-xl transition-transform duration-300">
                {openCategory === category.id ? (
                  <FiChevronUp />
                ) : (
                  <FiChevronDown />
                )}
              </span>
            </button>

            {/* Expandable Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openCategory === category.id
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4 sm:p-5 pt-0 flex flex-col gap-2 sm:gap-3">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/10 hover:bg-amber-500/20 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 cursor-default"
                  >
                    {skill.icon}
                    <span className="text-white text-sm sm:text-base font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
