const painPoints = [
  { num: "01", heading: "Missed calls", description: "Leads and orders lost when no one picks up" },
  { num: "02", heading: "Scheduling chaos", description: "Back-and-forth just to book a simple appointment" },
  { num: "03", heading: "Manual invoicing", description: "Hours lost creating and chasing invoices weekly" },
  { num: "04", heading: "Sales blind spots", description: "No clear view of pipeline or follow-ups" },
];

export default function PainPoints() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted">
        Sound familiar?
      </span>

      <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-xl border border-border sm:grid-cols-2 lg:grid-cols-4">
        {painPoints.map((item, i) => (
          <div
            key={item.num}
            className={`bg-bg p-6 ${
              i !== 0 ? "border-t border-border sm:border-l sm:border-t-0 lg:border-t-0" : ""
            } ${i === 2 ? "sm:border-t lg:border-t-0" : ""}`}
          >
            <span className="font-mono text-sm" style={{ color: "#6B708444" }}>{item.num}</span>
            <h3 className="mt-3 font-sans text-lg font-semibold text-text">{item.heading}</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-muted">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
