import checkmark from "../assets/Images/checkmark.png";

export default function Toast({ message, show }) {
  if (!show) return null;

  return (
    <div
      className="fixed top-6 right-5 flex items-center gap-3 px-5 py-4 rounded-xl font-roboto-mono text-sm z-50"
      style={{
        background: "#111111",
        border: "1px solid rgba(249,115,22,0.45)",
        boxShadow:
          "0 8px 32px rgba(249,115,22,0.20), 0 2px 8px rgba(0,0,0,0.5)",
        color: "white",
        minWidth: "260px",
        maxWidth: "320px",
        animation: "toastSlideIn 0.3s ease-out",
      }}
    >
      {/* Orange accent bar on left */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
        style={{ background: "linear-gradient(180deg, #f97316, #ea580c)" }}
      />

      {/* Checkmark icon */}
      <div
        className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
        style={{ background: "rgba(249,115,22,0.15)" }}
      >
        <img src={checkmark} alt="success" className="w-4 h-4" />
      </div>

      {/* Message */}
      <span style={{ color: "rgba(255,255,255,0.85)" }}>{message}</span>

      <style>{`
        @keyframes toastSlideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
