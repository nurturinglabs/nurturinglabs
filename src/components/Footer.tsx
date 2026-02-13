export default function Footer({ loaded }: { loaded: boolean }) {
  return (
    <footer
      className="flex items-center justify-between relative z-10"
      style={{
        padding: "clamp(14px, 2vh, 22px) clamp(28px, 5vw, 72px)",
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.6s ease 0.9s",
      }}
    >
      <span className="text-muted" style={{ fontSize: 12, fontWeight: 300 }}>
        Built with <span className="text-warm">&#9829;</span>
      </span>
      <span style={{ fontSize: 11, color: "#6B708455" }}>
        &copy; 2026 Nurturinglabs
      </span>
    </footer>
  );
}
