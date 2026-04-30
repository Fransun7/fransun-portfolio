import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./components/myHome";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{ background: "#080808", minHeight: "100vh", width: "100vw" }}
      >
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
          <div
            className="flex items-center justify-center rounded-2xl px-2 py-2 w-full max-w-xl"
            style={{
              background: "rgba(10,10,10,0.75)",
              border: "1px solid rgba(249,115,22,0.22)",
              backdropFilter: "blur(14px)",
              boxShadow:
                "0 4px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(249,115,22,0.06)",
            }}
          >
            <ul className="flex items-center gap-1 sm:gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/projects", label: "Projects" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === "/"}
                    className={({ isActive }) =>
                      isActive ? "nav-active" : "nav-inactive"
                    }
                    style={({ isActive }) =>
                      isActive
                        ? {
                            display: "inline-block",
                            padding: "7px 18px",
                            borderRadius: "10px",
                            fontSize: "13px",
                            fontWeight: "600",
                            fontFamily: "Roboto Mono, monospace",
                            letterSpacing: "0.03em",
                            color: "white",
                            background:
                              "linear-gradient(135deg, #f97316, #ea580c)",
                            boxShadow: "0 2px 14px rgba(249,115,22,0.35)",
                            textDecoration: "none",
                            transition: "all 0.2s",
                          }
                        : {
                            display: "inline-block",
                            padding: "7px 18px",
                            borderRadius: "10px",
                            fontSize: "13px",
                            fontWeight: "500",
                            fontFamily: "Roboto Mono, monospace",
                            letterSpacing: "0.03em",
                            color: "rgba(255,255,255,0.55)",
                            textDecoration: "none",
                            transition: "all 0.2s",
                          }
                    }
                    onMouseEnter={(e) => {
                      if (!e.currentTarget.classList.contains("nav-active")) {
                        e.currentTarget.style.color = "#f97316";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!e.currentTarget.classList.contains("nav-active")) {
                        e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                      }
                    }}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Page content — push down below fixed navbar */}
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import "./App.css";
// import Home from "./components/myHome";
// import Projects from "./components/Projects";
// import About from "./components/About";
// import Contact from "./components/Contact";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="bg-black h-screen w-screen mt-0">
//         <nav className="p-3 gap-4">
//           <div className="flex justify-center h-[8vh]">
//             <div className="nav-glow w-4/5 text-center flex justify-center rounded-b-sm text-black border-8 border-t-0 inset-0 rounded-2xl border-cyan-500 bg-black/60 backdrop-blur-sm">
//               <ul className="flex space-x-4 items-center sm:space-x-10 md:space-x-20 font-bold text-white font-roboto">
//                 <li>
//                   <NavLink
//                     to="/"
//                     className={({ isActive }) =>
//                       isActive
//                         ? "text-cyan-400 nav-link-active"
//                         : "text-white hover:text-cyan-400 transition-colors duration-200"
//                     }
//                   >
//                     Home
//                   </NavLink>
//                 </li>

//                 <li>
//                   <NavLink
//                     to="/about"
//                     className={({ isActive }) =>
//                       isActive
//                         ? "text-cyan-400 nav-link-active"
//                         : "text-white hover:text-cyan-400 transition-colors duration-200"
//                     }
//                   >
//                     About
//                   </NavLink>
//                 </li>

//                 <li>
//                   <NavLink
//                     to="/projects"
//                     className={({ isActive }) =>
//                       isActive
//                         ? "text-cyan-400 nav-link-active"
//                         : "text-white hover:text-cyan-400 transition-colors duration-200"
//                     }
//                   >
//                     Projects
//                   </NavLink>
//                 </li>

//                 <li>
//                   <NavLink
//                     to="/contact"
//                     className={({ isActive }) =>
//                       isActive
//                         ? "text-cyan-400 nav-link-active"
//                         : "text-white hover:text-cyan-400 transition-colors duration-200"
//                     }
//                   >
//                     Contact
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

// // import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// // import "./App.css";
// // import Home from "./components/myHome";
// // import Projects from "./components/Projects";
// // import About from "./components/About";
// // import Contact from "./components/Contact";
// // import Practice from "./components/Practice";

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <div className=" bg-black h-screen w-screen mt-0">
// //         <nav className="p-3 gap-4">
// //           <div className=" flex justify-center h-[8vh]">
// //             <div className="w-4/5 text-center flex justify-center rounded-b-sm text-black border-4  border-t-0 inset-0 rounded-xl border-cyan-600">
// //               <ul className="flex space-x-4 items-center sm:space-x-10 md:space-x-20 font-bold text-white font-roboto">
// //                 <li>
// //                   <NavLink
// //                     to="/"
// //                     className={({ isActive }) =>
// //                       isActive
// //                         ? "text-cyan-500"
// //                         : "text-white hover:text-cyan-500"
// //                     }
// //                   >
// //                     Home
// //                   </NavLink>
// //                 </li>

// //                 <li>
// //                   <NavLink
// //                     to="/about"
// //                     className={({ isActive }) =>
// //                       isActive
// //                         ? "text-cyan-500"
// //                         : "text-white hover:text-cyan-500"
// //                     }
// //                   >
// //                     About
// //                   </NavLink>
// //                 </li>

// //                 <li>
// //                   <NavLink
// //                     to="/projects"
// //                     className={({ isActive }) =>
// //                       isActive
// //                         ? "text-cyan-500"
// //                         : "text-white hover:text-cyan-500"
// //                     }
// //                   >
// //                     Projects
// //                   </NavLink>
// //                 </li>
// //                 <li>
// //                   <NavLink
// //                     to="/contact"
// //                     className={({ isActive }) =>
// //                       isActive
// //                         ? "text-cyan-500"
// //                         : "text-white hover:text-cyan-500"
// //                     }
// //                   >
// //                     Contact
// //                   </NavLink>
// //                 </li>

// //                 <li>
// //                   <NavLink
// //                     to="/practice"
// //                     className={({ isActive }) =>
// //                       isActive
// //                         ? "text-cyan-500"
// //                         : "text-white hover:text-cyan-500"
// //                     }
// //                   >
// //                     Practice
// //                   </NavLink>
// //                 </li>
// //               </ul>
// //             </div>
// //           </div>
// //         </nav>

// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/projects" element={<Projects />} />
// //           <Route path="/about" element={<About />} />
// //           <Route path="/contact" element={<Contact />} />
// //           <Route path="/practice" element={<Practice />} />
// //         </Routes>
// //       </div>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;
