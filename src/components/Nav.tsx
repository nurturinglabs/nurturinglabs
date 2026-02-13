"use client";

export default function Nav({ loaded }: { loaded: boolean }) {
  return (
    <nav
      className="flex items-center justify-between relative z-10"
      style={{
        padding: "clamp(18px, 2.5vh, 30px) clamp(28px, 5vw, 72px)",
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.5s ease 0.1s",
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div
          className="w-8 h-8 flex items-center justify-center"
          style={{
            borderRadius: 9,
            background: "linear-gradient(135deg, #00FFD1, #00FFD1CC)",
            boxShadow: "0 0 20px #00FFD115",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 18V6l12 12V6"
              stroke="#060608"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-col" style={{ lineHeight: 1 }}>
          <span
            className="font-sans text-text"
            style={{ fontWeight: 800, fontSize: 15, letterSpacing: "-0.5px" }}
          >
            nurturing
          </span>
          <span
            className="font-mono text-accent"
            style={{ fontWeight: 400, fontSize: 10, letterSpacing: "2px" }}
          >
            LABS
          </span>
        </div>
      </div>

      {/* Contact */}
      <a
        href="mailto:hello@nurturinglabs.com"
        className="text-muted no-underline transition-colors duration-200 hover:text-accent"
        style={{
          fontSize: 12,
          fontWeight: 400,
          letterSpacing: "1px",
          borderBottom: "1px solid #1A1D2A",
          paddingBottom: 2,
        }}
      >
        GET IN TOUCH
      </a>
    </nav>
  );
}
