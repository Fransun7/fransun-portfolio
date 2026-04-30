import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactBg1 from "../assets/Images/Contact-bg1.jpg";
import ContactBg2 from "../assets/Images/Contact-bg2.jpg";
import ContactBg3 from "../assets/Images/Contact-bg3.jpg";

import Toast from "./Toast";

function Contact() {
  const [notePopup, setNotePopup] = useState(false);
  const [noteText, setNoteText] = useState("");

  const Form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2tw97p7",
        "template_lumpw1i",
        Form.current,
        "Qng7D-nvLnXuYz-b7",
      )
      .then(
        (result) => {
          setNoteText("Message sent successfully!");
          setNotePopup(true);
          setTimeout(() => setNotePopup(false), 3000);
          e.target.reset();
        },
        (error) => {
          setNoteText("Failed to send message. Please try again.");
          setNotePopup(true);
          setTimeout(() => setNotePopup(false), 3000);
        },
      );
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 14px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: "10px",
    color: "white",
    fontFamily: "inherit",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = "rgba(249,115,22,0.6)";
    e.target.style.boxShadow = "0 0 0 3px rgba(249,115,22,0.10)";
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = "rgba(255,255,255,0.10)";
    e.target.style.boxShadow = "none";
  };

  return (
    <>
      <Toast show={notePopup} message={noteText} />

      <div
        className="relative bg-no-repeat bg-cover bg-center w-screen mt-7 rounded-2xl rounded-b-none overflow-hidden"
        style={{ backgroundImage: `url(${ContactBg3})` }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(5,5,5,0.93) 0%, rgba(12,8,4,0.92) 100%)",
          }}
        />

        {/* Ambient glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(249,115,22,0.14) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center py-12 px-4">
          {/* Section header */}
          <span
            className="text-xs font-roboto-mono tracking-widest uppercase mb-2"
            style={{ color: "#f97316" }}
          >
            Let's connect
          </span>
          <h2 className="font-story-script text-3xl text-white font-bold mb-1">
            Contact
          </h2>
          <div
            className="mt-3 h-px w-16 mb-10"
            style={{
              background:
                "linear-gradient(90deg, transparent, #f97316, transparent)",
            }}
          />

          {/* Form card */}
          <div
            className="w-full max-w-md rounded-2xl p-7"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(249,115,22,0.18)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
            }}
          >
            <h3
              className="text-lg font-roboto-mono font-semibold mb-6"
              style={{ color: "#f97316" }}
            >
              Send me a message
            </h3>

            <form
              ref={Form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4"
            >
              {/* Name */}
              <div>
                <label
                  className="block text-xs font-roboto-mono tracking-wide mb-1.5"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  YOUR NAME
                </label>
                <input
                  style={inputStyle}
                  placeholder="Enter your name"
                  type="text"
                  name="user_name"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  className="block text-xs font-roboto-mono tracking-wide mb-1.5"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  YOUR EMAIL
                </label>
                <input
                  style={inputStyle}
                  placeholder="Enter your email"
                  name="user_email"
                  id="email"
                  type="email"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              {/* Job title */}
              <div>
                <label
                  className="block text-xs font-roboto-mono tracking-wide mb-1.5"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  JOB TITLE / SUBJECT
                </label>
                <input
                  style={inputStyle}
                  placeholder="Enter job title or subject"
                  type="text"
                  name="subject"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  className="block text-xs font-roboto-mono tracking-wide mb-1.5"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  MESSAGE
                </label>
                <textarea
                  style={{ ...inputStyle, resize: "none" }}
                  rows="4"
                  placeholder="Enter your message"
                  name="message"
                  id="message"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-roboto-mono font-semibold text-sm text-white transition-all duration-300 hover:scale-[1.02] active:scale-95 mt-1"
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
                Send Message →
              </button>

              {/* WhatsApp link */}
              <div className="flex items-center justify-center mt-2">
                <a
                  href="https://wa.me/2349137929760?text=Hello%20I%20am%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-roboto-mono transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.75)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.4)")
                  }
                >
                  Or reach me on{" "}
                  <span className="font-semibold" style={{ color: "#4ade80" }}>
                    WhatsApp ↗
                  </span>
                </a>
              </div>
            </form>
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
    </>
  );
}

export default Contact;
