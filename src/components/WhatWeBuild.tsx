const services = [
  {
    title: "AI workflow automation",
    description: "Invoicing, scheduling, follow-ups, and sales tracking — connected to your existing tools.",
  },
  {
    title: "Voice agent setup",
    description: "A custom voice agent that handles inbound calls, takes orders, and books appointments 24/7.",
  },
  {
    title: "AI growth bundle",
    description: "Voice agent combined with workflow automations — phone, scheduling, and invoicing on AI.",
  },
];

export default function WhatWeBuild() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-16">
      <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted">
        What we build
      </span>

      <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-xl border border-border md:grid-cols-3">
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`bg-bg p-8 ${i !== 0 ? "border-t border-border md:border-l md:border-t-0" : ""}`}
          >
            <h3 className="font-sans text-lg font-semibold text-text">{s.title}</h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-muted">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
