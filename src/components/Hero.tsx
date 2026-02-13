"use client";

import { verticals } from "@/lib/data";
import StatBlock from "./StatBlock";

// Pre-compute badge bar values at fixed precision to avoid hydration mismatches
const badgeBars = Array.from({ length: 16 }, (_, i) => {
  const sin = Math.sin((i / 16) * Math.PI);
  return {
    delay: `${parseFloat((i * 0.08).toFixed(2))}s`,
    height: `${parseFloat(((sin * 0.7 + 0.3) * 100).toFixed(2))}%`,
    opacity: parseFloat((0.5 + sin * 0.5).toFixed(4)),
  };
});

export default function Hero({ activeV }: { activeV: number }) {
  return (
    <div className="flex flex-col" style={{ gap: "clamp(20px, 3vh, 36px)" }}>
      <div>
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2"
          style={{
            background: "#00FFD10A",
            border: "1px solid #00FFD118",
            borderRadius: 20,
            padding: "5px 14px",
            marginBottom: "clamp(12px, 1.5vh, 18px)",
          }}
        >
          <div className="flex items-center" style={{ gap: 2.5, height: 22 }}>
            {badgeBars.map((bar, i) => (
              <div
                key={i}
                className="bg-accent animate-wave"
                style={{
                  width: 2,
                  borderRadius: 2,
                  animationDelay: bar.delay,
                  height: bar.height,
                  opacity: bar.opacity,
                }}
              />
            ))}
          </div>
          <span
            className="font-mono text-accent"
            style={{ fontSize: 10, letterSpacing: "1.5px", fontWeight: 700 }}
          >
            AI-POWERED
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-sans"
          style={{
            fontSize: "clamp(32px, 4.8vw, 58px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-3px",
            marginBottom: "clamp(8px, 1.2vh, 14px)",
          }}
        >
          AI Superpower
          <br />
          for{" "}
          <span
            className="relative inline-block"
            style={{ minWidth: "clamp(140px, 20vw, 260px)" }}
          >
            {verticals.map((v, i) => (
              <span
                key={v.name}
                className="text-accent inline-block"
                style={{
                  position: i === activeV ? "relative" : "absolute",
                  left: 0,
                  top: 0,
                  whiteSpace: "nowrap",
                  animation: i === activeV ? "textCycle 4s ease-in-out" : "none",
                  opacity: i === activeV ? 1 : 0,
                }}
              >
                {v.name}
              </span>
            ))}
          </span>
        </h1>

        {/* Action line */}
        <div
          className="relative flex items-center"
          style={{ height: 22, marginBottom: "clamp(10px, 1.5vh, 18px)" }}
        >
          {verticals.map((v, i) => (
            <span
              key={v.action}
              className="text-accent font-body"
              style={{
                fontSize: "clamp(14px, 1.3vw, 16px)",
                fontWeight: 400,
                fontStyle: "italic",
                whiteSpace: "nowrap",
                position: i === activeV ? "relative" : "absolute",
                left: 0,
                animation: i === activeV ? "textCycle 4s ease-in-out" : "none",
                opacity: i === activeV ? 1 : 0,
              }}
            >
              {v.action}
            </span>
          ))}
        </div>

        {/* Body copy */}
        <p
          className="text-muted font-body"
          style={{
            fontSize: "clamp(14px, 1.4vw, 16px)",
            lineHeight: 1.6,
            fontWeight: 300,
            maxWidth: 400,
          }}
        >
          An AI brain that understands, speaks, and acts &mdash; so you never
          miss a call, a customer, or a dollar.
        </p>
      </div>

      {/* CTA */}
      <div className="flex items-center gap-4">
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener"
          className="demo-btn inline-flex items-center gap-2 text-accent bg-transparent"
          style={{
            border: "1.5px solid #00FFD1",
            padding: "clamp(12px, 1.4vh, 16px) clamp(22px, 2.5vw, 32px)",
            borderRadius: 10,
            fontSize: "clamp(13px, 1.2vw, 15px)",
            fontWeight: 600,
            letterSpacing: "-0.2px",
          }}
        >
          Book a Demo
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
        <span className="font-body" style={{ fontSize: 13, color: "#6B708488", fontWeight: 300 }}>
          Free 2-week pilot
        </span>
      </div>

      {/* Stats */}
      <div
        className="flex border-t border-border"
        style={{
          gap: "clamp(28px, 4vw, 56px)",
          paddingTop: "clamp(8px, 1.5vh, 16px)",
        }}
      >
        <StatBlock value="24/7" label="Always on" delay={600} />
        <StatBlock value="<1s" label="Response time" delay={750} />
        <StatBlock value="5x" label="Cheaper than staff" delay={900} />
      </div>
    </div>
  );
}
