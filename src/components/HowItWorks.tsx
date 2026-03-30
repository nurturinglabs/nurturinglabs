const steps = [
  { num: "01", heading: "Free call", description: "30 minutes to map your biggest time sink and pick the right solution" },
  { num: "02", heading: "We build it", description: "Configure, test, and connect AI to your tools and phone number" },
  { num: "03", heading: "You run it", description: "Handoff with a walkthrough — no technical knowledge required" },
  { num: "04", heading: "Grow from there", description: "Add more automations as you see results — no lock-in" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-16">
      <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted">
        How it works
      </span>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <div
            key={step.num}
            className={`py-6 pr-6 ${
              i !== 0 ? "border-t border-border sm:border-l sm:border-t-0 lg:border-t-0 sm:pl-6" : ""
            }`}
          >
            <span className="font-sans text-4xl font-light leading-none" style={{ color: "rgba(255,255,255,0.07)" }}>
              {step.num}
            </span>
            <h3 className="mt-4 font-sans text-lg font-semibold text-text">{step.heading}</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-muted">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
