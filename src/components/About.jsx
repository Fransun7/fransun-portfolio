import AboutBg from "../assets/Images/About-bg.jpg";
import aboutpic from "../assets/Images/aboutpic.jpg";
import pic6 from "../assets/Images/pic6.jpg";
import pic1 from "../assets/Images/pic1.jpg";
import upbg from "../assets/Images/upbg.jpg";
import bg1 from "../assets/Images/bg1.jpg";

function About() {
  return (
    <div>
      <div
        className="relative text-white mt-7 w-screen bg-no-repeat bg-cover bg-center rounded-2xl rounded-b-none overflow-hidden"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(5,5,5,0.93) 0%, rgba(12,8,4,0.90) 100%)",
          }}
        />

        {/* Ambient glow */}
        <div
          className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.13) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 pb-16">
          {/* Section header */}
          <div className="flex flex-col items-center pt-10 mb-8">
            <span
              className="text-xs font-roboto-mono tracking-widest uppercase mb-2"
              style={{ color: "#f97316" }}
            >
              Get to know me
            </span>
            <h2 className="font-story-script text-3xl text-white font-bold">
              About Me
            </h2>
            <div
              className="mt-3 h-px w-16"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #f97316, transparent)",
              }}
            />
          </div>

          <div className="grid grid-rows-1 gap-8 px-6 max-w-lg mx-auto">
            {/* Profile image + role badge */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                {/* Glow ring */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    boxShadow: "0 0 40px rgba(249,115,22,0.40)",
                    borderRadius: "9999px",
                  }}
                />
                <div
                  className="rounded-full overflow-hidden"
                  style={{
                    width: "140px",
                    height: "140px",
                    border: "3px solid rgba(249,115,22,0.55)",
                  }}
                >
                  <img
                    className="w-full h-full object-cover"
                    src={aboutpic}
                    alt="Francis"
                  />
                </div>
              </div>

              {/* Role badge */}
              <div
                className="px-5 py-2 rounded-full font-roboto-mono text-sm font-semibold"
                style={{
                  background: "rgba(249,115,22,0.12)",
                  border: "1px solid rgba(249,115,22,0.4)",
                  color: "#f97316",
                }}
              >
                Front-end Web Developer
              </div>
            </div>

            {/* Bio text */}
            <div
              className="rounded-2xl p-5"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(249,115,22,0.15)",
              }}
            >
              {/* Decorative top bar */}
              <div
                className="h-px w-12 mb-4"
                style={{ background: "#f97316" }}
              />

              <p className="text-neutral-300 font-roboto-mono text-sm leading-relaxed">
                "My journey into{" "}
                <span className="text-white font-semibold">
                  web development
                </span>{" "}
                began with a simple curiosity: 'How does this work?' That
                question led me down a rabbit hole of code, and I discovered the
                immense satisfaction of building something from nothing. I've
                since dedicated myself to mastering the art of front-end
                development."
              </p>

              <p className="mt-4 text-neutral-300 font-roboto-mono text-sm leading-relaxed">
                "As a{" "}
                <span className="text-white font-semibold">
                  front-end developer
                </span>
                , I am a problem-solver and a creator. I love using{" "}
                <span className="text-white font-semibold">HTML, CSS</span>, and{" "}
                <span className="text-white font-semibold">TailwindCSS</span> to
                bring static designs to life, and I leverage{" "}
                <span className="text-white font-semibold">React</span> and{" "}
                <span className="text-white font-semibold">JavaScript</span> to
                build dynamic, interactive interfaces that feel fast and
                intuitive. Every line of code I write is a step toward a better
                user experience."
              </p>
            </div>

            {/* Skills row */}
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "React",
                "Tailwind CSS",
                "Git & GitHub",
              ].map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-roboto-mono px-3 py-1.5 rounded-lg"
                  style={{
                    background: "rgba(249,115,22,0.08)",
                    border: "1px solid rgba(249,115,22,0.25)",
                    color: "#fdba74",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Download CV button */}
            <div className="flex justify-center mt-2">
              <a
                href="/my cv.pdf"
                download="francis-omotayo-cv.pdf"
                className="inline-flex items-center gap-3 font-roboto-mono text-sm font-semibold px-7 py-3 rounded-xl text-white transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #f97316, #ea580c)",
                  boxShadow: "0 4px 20px rgba(249,115,22,0.35)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 6px 28px rgba(249,115,22,0.55)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(249,115,22,0.35)")
                }
              >
                Download My CV
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    clipRule="evenodd"
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                    fillRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(249,115,22,0.45), transparent)",
          }}
        />
      </div>
    </div>
  );
}

export default About;
