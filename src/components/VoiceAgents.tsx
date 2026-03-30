const voiceVerticals = [
  { name: "Restaurants", desc: "Order taking & reservations" },
  { name: "Dental & health clinics", desc: "Appointment scheduling" },
  { name: "Apartment management", desc: "Maintenance & tenant calls" },
  { name: "Wisconsin cities", desc: "Community health survey automation" },
  { name: "Auto dealerships", desc: "Lead intake & service booking" },
  { name: "Home services", desc: "Booking & dispatch support" },
];

const demoHints = [
  "Order a Chicken Shawarma",
  "Ask about specials",
  "Change your order mid-call",
  "Ask for pickup time",
];

export default function VoiceAgents() {
  return (
    <section id="voice-agents" className="mx-auto max-w-6xl px-6 py-16">
      {/* Label row */}
      <div className="flex flex-wrap items-center gap-4">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted">
          Voice Agents
        </span>
        <span
          className="inline-flex items-center gap-3 rounded-[8px] px-4 py-2"
          style={{ background: "#00FFD10A", border: "1px solid #00FFD118" }}
        >
          <span className="inline-flex h-3 w-3 rounded-full bg-accent animate-glow-dot" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-[1.5px] text-accent">
            Live demo available now
          </span>
        </span>
      </div>

      {/* Title */}
      <h2 className="mt-6 font-sans text-3xl font-bold tracking-tight md:text-5xl" style={{ letterSpacing: "-2px" }}>
        Your phone, <span className="text-accent">always answered</span>
      </h2>

      {/* Contained block */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-border">
        {/* Top area */}
        <div className="bg-card-bg p-8">
          <h3 className="font-sans text-xl font-semibold">
            Custom-built for <span className="text-accent">your industry</span>
          </h3>
          <p className="mt-2 max-w-lg font-body text-sm leading-relaxed text-muted">
            Voice agents that handle inbound calls 24/7 — taking orders, booking
            appointments, answering FAQs, and running health surveys. No hold
            music. No missed revenue.
          </p>
        </div>

        {/* Verticals grid */}
        <div className="grid grid-cols-2 border-t border-border md:grid-cols-3 lg:grid-cols-6">
          {voiceVerticals.map((v, i) => (
            <div
              key={v.name}
              className={`bg-bg p-5 ${
                i !== 0 ? "border-l border-t border-border lg:border-t-0" : ""
              }`}
            >
              <span className="font-sans text-sm font-semibold text-text">{v.name}</span>
              <p className="mt-1 font-body text-xs text-muted">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Demo call box */}
        <div className="border-t border-border bg-card-bg p-8">
          <h4 className="font-sans text-base font-semibold text-text">
            Try it yourself — call our live restaurant demo
          </h4>

          <div className="mt-4 flex flex-wrap gap-2">
            {demoHints.map((hint) => (
              <span
                key={hint}
                className="rounded-full px-3 py-1.5 font-body text-xs text-muted"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                {hint}
              </span>
            ))}
          </div>

          <a
            href="tel:+12622331917"
            className="mt-6 inline-flex items-center gap-4 rounded-[12px] px-7 py-4 transition-opacity hover:opacity-90"
            style={{ background: "#00FFD1" }}
          >
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
              style={{ background: "#060608" }}
            >
              <svg className="animate-ring" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00FFD1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[2px]" style={{ color: "#060608" }}>
                Call Live Demo
              </span>
              <span className="font-sans text-lg font-bold" style={{ color: "#060608", letterSpacing: "-0.5px" }}>
                (262) 233-1917
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
