import { Link } from "react-router-dom";
import pic1 from "../assets/Images/pic1.jpg";
import pic2 from "../assets/Images/pic2.jpg";
import pic3 from "../assets/Images/pic3.jpg";
import pic4 from "../assets/Images/pic4.jpg";
import pic5 from "../assets/Images/pic5.jpg";
import myHomeBg from "../assets/Images/Home-bg.jpg";
import myHomeBg2 from "../assets/Images/Home-bg2.jpg";

function MyHome() {
  return (
    <div
      className="relative bg-no-repeat bg-cover bg-center h-screen overflow-hidden"
      style={{ backgroundImage: `url(${myHomeBg2})` }}
    >
      {/* Dark overlay with orange tint */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(5,5,5,0.92) 0%, rgba(10,10,10,0.88) 50%, rgba(20,8,0,0.92) 100%)",
        }}
      />

      {/* Ambient orange glow — bottom right */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      {/* Ambient orange glow — top left */}
      <div
        className="absolute top-0 left-0 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-[80vh] grid grid-cols-2 gap-4 p-12 items-center">
        {/* Left Section */}
        <div className="flex flex-col justify-center p-3">
          {/* Eyebrow label */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className="inline-block w-8 h-1.5"
              style={{ background: "#f97316" }}
            />
            <span
              className="text-xs font-roboto-mono tracking-widest uppercase"
              style={{ color: "#f97316" }}
            >
              Front-End Developer
            </span>
          </div>

          <h1 className="text-4xl font-roboto-mono font-extrabold text-white leading-tight">
            Hello, I'm{" "}
            <span
              style={{
                color: "#f97316",
                textShadow: "0 0 24px rgba(249,115,22,0.45)",
              }}
            >
              Francis
            </span>
          </h1>

          <p className="text-neutral-400 font-roboto-mono text-sm mt-4 leading-relaxed max-w-sm">
            I build fast, intuitive interfaces with{" "}
            <span className="text-white font-semibold">React</span>,{" "}
            <span className="text-white font-semibold">Tailwind CSS</span>, and{" "}
            <span className="text-white font-semibold">JavaScript</span> turning
            ideas into polished digital experiences.
          </p>

          {/* Explore button */}
          <div className="flex items-center mt-8">
            <div className="relative group">
              <Link to="/projects">
                <button
                  className="relative font-roboto-mono font-semibold text-sm text-white px-7 py-3 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #f97316, #ea580c)",
                    boxShadow: "0 4px 24px rgba(249,115,22,0.35)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 6px 32px rgba(249,115,22,0.55)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 4px 24px rgba(249,115,22,0.35)")
                  }
                >
                  <div className="flex items-center gap-2">
                    <span>Explore My Work</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        clipRule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
              </Link>
            </div>
          </div>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-2 mt-7">
            {["React", "JavaScript", "Tailwind CSS", "HTML & CSS"].map(
              (tech) => (
                <span
                  key={tech}
                  className="text-xs font-roboto-mono px-3 py-1 rounded-full border"
                  style={{
                    color: "#f97316",
                    borderColor: "rgba(249,115,22,0.3)",
                    background: "rgba(249,115,22,0.06)",
                  }}
                >
                  {tech}
                </span>
              ),
            )}
          </div>
        </div>

        {/* Right Section — Profile Image */}
        <div className="flex justify-center items-center">
          <div className="relative">
            {/* Spinning ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #f97316, transparent, #f97316, transparent, transparent)",
                padding: "3px",
                borderRadius: "9999px",
                animation: "spin 6s linear infinite",
              }}
            />
            {/* Orange glow behind image */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow: "0 0 60px rgba(249,115,22,0.35)",
                borderRadius: "9999px",
              }}
            />
            <div
              className="relative rounded-full overflow-hidden"
              style={{
                width: "220px",
                height: "220px",
                border: "3px solid rgba(249,115,22,0.6)",
              }}
            >
              <img
                className="w-full h-full object-cover"
                src={pic2}
                alt="Francis"
              />
              {/* Subtle orange overlay on image */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(249,115,22,0.08) 0%, transparent 60%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(249,115,22,0.5), transparent)",
        }}
      />

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default MyHome;
