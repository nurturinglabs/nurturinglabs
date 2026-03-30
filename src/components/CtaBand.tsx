const CALENDLY = "https://calendly.com/nurturinglabs/30min";

export default function CtaBand() {
  return (
    <section className="bg-card-bg px-6 py-20 text-center" style={{ borderTop: "1px solid #00FFD10A" }}>
      <h2 className="mx-auto max-w-2xl font-sans text-3xl font-bold leading-tight md:text-5xl" style={{ letterSpacing: "-2px" }}>
        Ready to stop doing{" "}
        <span className="text-accent">the same thing</span> manually?
      </h2>
      <p className="mx-auto mt-6 max-w-lg font-body text-base leading-relaxed text-muted">
        Book a free 30-minute call. We&apos;ll show you exactly where AI saves
        you the most time — and demo a voice agent live.
      </p>
      <a
        href={CALENDLY}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-10 inline-flex items-center gap-4 rounded-[14px] px-8 py-4 font-body transition-all hover:scale-[1.02]"
        style={{
          background: "linear-gradient(135deg, #00FFD1, #00FFD1CC)",
          boxShadow: "0 0 30px #00FFD120, 0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <span className="flex flex-col items-start">
          <span className="font-mono text-[9px] font-bold uppercase tracking-[2px]" style={{ color: "#04342C", opacity: 0.6 }}>
            Free 30-min call
          </span>
          <span className="font-sans text-base font-bold" style={{ color: "#04342C", letterSpacing: "-0.5px" }}>
            Book free consultation
          </span>
        </span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#04342C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    </section>
  );
}
