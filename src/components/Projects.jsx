import { useState } from "react";
import Project1 from "../assets/Images/Project1.png";
import Projecct2 from "../assets/Images/quiz app.png";
import Project3 from "../assets/Images/Project2.png";
import Project4 from "../assets/Images/Project3.png";
import Projecct5 from "../assets/Images/project5.png";
import bg1 from "../assets/Images/bg1.jpg";
import Project6 from "../assets/Images/agro-connect.png";

const projects = [
  {
    title: "Movie Library Web App",
    image: Project1,
    link: "https://quiz-app-wlnd.vercel.app/",
    description:
      "A movie website that lets users explore and discover films, with redirects to downloadable movie sources. Built with vanilla JavaScript, HTML, and CSS.",
  },
  {
    title: "Quiz Web App",
    image: Projecct2,
    link: "https://quiz-app-zeta-sooty.vercel.app/",
    description:
      "A free, open-source practice tool built for Nigerian students preparing for JAMB. Covers Biology, Chemistry, and Physics with score tracking and a wrong-answer review feature. Built with vanilla JavaScript.",
  },
  {
    title: "Task Manager Web App",
    image: Project3,
    link: null,
    description:
      "An essential productivity tool designed for managing personal and team task flow efficiently. Built with vanilla JavaScript, HTML, and CSS.",
  },
  {
    title: "Book Management System Web App",
    image: Project4,
    link: null,
    description:
      "A system developed for seamless book and library management, allowing users to track, add, and organize books in a structured interface.",
  },
  {
    title: "Weather Web App",
    image: Projecct5,
    link: "https://weather-app-omega-jade-89.vercel.app/",
    description:
      "An easy-to-use weather application that fetches and displays real-time weather data based on the user's location or a searched city.",
  },
  {
    title: "AgroConnect Web App",
    image: Project6,
    link: "https://agro-connect-react.vercel.app/",
    description:
      "A digital marketplace for agriculture products where consumers, vendors, buyers meet farmers for sale of produce without stress. Built with React.js and TailwindCSS.",
  },
];

function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  // function for opening description
  const openDescription = (e, index) => {
    e.preventDefault();
    setActiveIndex(index);
  };

  // function for closing description
  const closeDescription = (e, index) => {
    setActiveIndex(null);
  };

  return (
    <div
      className="relative mt-7 rounded-2xl rounded-b-none overflow-hidden min-h-screen"
      style={{ background: "#080808" }}
    >
      {/* Top ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(249,115,22,0.14) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Section header */}
      <div className="relative z-10 flex flex-col items-center pt-10 mb-10">
        <span
          className="text-xs font-roboto-mono tracking-widest uppercase mb-2"
          style={{ color: "#f97316" }}
        >
          What I've built
        </span>
        <h2 className="font-story-script text-3xl text-white font-bold">
          Projects
        </h2>
        <div
          className="mt-3 h-px w-16"
          style={{
            background:
              "linear-gradient(90deg, transparent, #f97316, transparent)",
          }}
        />
      </div>

      {/* Grid container */}
      <div className="relative z-10 grid grid-cols-1 gap-5 font-mono px-5 pb-12 sm:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group rounded-2xl flex flex-col overflow-hidden transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = "1px solid rgba(249,115,22,0.35)";
              e.currentTarget.style.boxShadow =
                "0 8px 40px rgba(249,115,22,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = "1px solid rgba(255,255,255,0.07)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Image container */}
            <div className="relative w-full h-40 overflow-hidden">
              <img
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                src={project.image}
                alt={project.title}
              />
              {/* Image overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(8,8,8,0.85) 100%)",
                }}
              />
            </div>

            {/* Card content */}
            <div className="p-4 flex flex-col flex-1">
              {/* Index badge */}
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="text-xs font-roboto-mono"
                  style={{ color: "rgba(249,115,22,0.6)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div
                  className="h-px flex-1"
                  style={{ background: "rgba(249,115,22,0.15)" }}
                />
              </div>

              {/* Title */}
              <h1
                className="font-bold font-story-script text-lg leading-snug"
                style={{ color: "#f97316" }}
              >
                {project.title}
              </h1>

              {/* Bottom actions */}
              <div className="mt-auto pt-4 flex items-center justify-between">
                <a
                  href=""
                  className="text-xs font-roboto-mono underline transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#f97316")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
                  }
                  onClick={(e) => openDescription(e, index)}
                >
                  View Details
                </a>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-roboto-mono font-semibold px-4 py-1.5 rounded-lg text-white transition-all duration-200 hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, #f97316, #ea580c)",
                      boxShadow: "0 2px 12px rgba(249,115,22,0.25)",
                    }}
                  >
                    Live Demo
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0113 17.5H4.5a2.25 2.25 0 01-2.25-2.25V6.25A2.25 2.25 0 014.5 4h5a.75.75 0 010 1.5h-5z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                      />
                    </svg>
                  </a>
                ) : (
                  <span
                    className="text-xs font-roboto-mono px-4 py-1.5 rounded-lg"
                    style={{
                      color: "rgba(255,255,255,0.25)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    In Progress
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Description Modal */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 px-4"
          style={{
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(6px)",
          }}
          onClick={closeDescription}
        >
          <div
            className="rounded-2xl p-6 max-w-sm w-full font-mono shadow-2xl"
            style={{
              background: "#111111",
              border: "1px solid rgba(249,115,22,0.35)",
              boxShadow: "0 0 60px rgba(249,115,22,0.15)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className="text-xs font-roboto-mono"
                style={{ color: "rgba(249,115,22,0.6)" }}
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <div
                className="h-px flex-1"
                style={{ background: "rgba(249,115,22,0.2)" }}
              />
            </div>

            <h2
              className="font-story-script text-xl font-bold mb-3"
              style={{ color: "#f97316" }}
            >
              {projects[activeIndex].title}
            </h2>

            <p
              className="text-sm leading-relaxed font-roboto-mono"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              {projects[activeIndex].description}
            </p>

            <button
              onClick={closeDescription}
              className="mt-6 text-sm font-roboto-mono font-semibold px-5 py-2 rounded-lg transition-all duration-200 hover:scale-105"
              style={{
                background: "rgba(249,115,22,0.12)",
                border: "1px solid rgba(249,115,22,0.35)",
                color: "#f97316",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
