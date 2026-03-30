export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <a href="/" className="flex items-center gap-2">
          <div
            className="flex h-7 w-7 items-center justify-center"
            style={{ borderRadius: 7, background: "linear-gradient(135deg, #00FFD1, #00FFD1CC)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M6 18V6l12 12V6" stroke="#060608" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col" style={{ lineHeight: 1 }}>
            <span className="font-sans text-text" style={{ fontWeight: 800, fontSize: 13, letterSpacing: "-0.5px" }}>
              nurturing
            </span>
            <span className="font-mono text-accent" style={{ fontWeight: 400, fontSize: 9, letterSpacing: "2px" }}>
              LABS
            </span>
          </div>
        </a>

        <span className="font-body text-sm text-muted" style={{ fontWeight: 300 }}>
          AI implementation for small business · 2026
        </span>

        <a href="mailto:hello@nurturinglabs.com" className="font-body text-sm text-muted transition-colors hover:text-text">
          hello@nurturinglabs.com
        </a>
      </div>
    </footer>
  );
}
