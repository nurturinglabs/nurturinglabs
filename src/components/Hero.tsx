"use client";

import { useEffect, useState } from "react";
import HeroWidget from "./HeroWidget";
import { verticals } from "@/lib/convos";

const CALENDLY = "https://calendly.com/nurturinglabs/30min";

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % verticals.length), 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left column */}
        <div>
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-10 bg-accent" />
            <span className="font-mono text-xs font-medium uppercase tracking-[3px] text-accent">
              AI Implementation for Small Business
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-sans"
            style={{
              fontSize: "clamp(36px, 4.8vw, 58px)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-3px",
            }}
          >
            AI that works for
          </h1>

          {/* Cycling vertical */}
          <div className="relative mt-1" style={{ height: "clamp(46px, 6vw, 70px)" }}>
            {verticals.map((v, i) => (
              <span
                key={v}
                className="font-sans text-accent"
                style={{
                  fontSize: "clamp(36px, 4.8vw, 58px)",
                  fontWeight: 800,
                  letterSpacing: "-3px",
                  position: i === idx ? "relative" : "absolute",
                  left: 0,
                  top: 0,
                  whiteSpace: "nowrap",
                  animation: i === idx ? "textCycle 2s ease-in-out" : "none",
                  opacity: i === idx ? 1 : 0,
                }}
              >
                {v}
              </span>
            ))}
          </div>

          {/* Body */}
          <p className="mt-6 max-w-[420px] font-body text-muted" style={{ fontSize: "clamp(14px, 1.4vw, 16px)", lineHeight: 1.7, fontWeight: 300 }}>
            We build AI voice agents and workflow automations for small businesses
            — handling calls, scheduling, invoicing, and follow-ups. Done-for-you,
            in days.
          </p>

          {/* CTA row */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-accent"
              style={{
                border: "1.5px solid #00FFD1",
                padding: "clamp(12px, 1.4vh, 16px) clamp(22px, 2.5vw, 32px)",
                borderRadius: 10,
                fontSize: "clamp(13px, 1.2vw, 15px)",
                fontWeight: 600,
                letterSpacing: "-0.2px",
              }}
            >
              Book free consultation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 flex gap-10 border-t border-border pt-4">
            <div>
              <span className="font-sans text-3xl font-bold text-text" style={{ letterSpacing: "-2px" }}>24/7</span>
              <p className="mt-1 font-body text-xs text-muted">Always on</p>
            </div>
            <div>
              <span className="font-sans text-3xl font-bold text-text" style={{ letterSpacing: "-2px" }}>0</span>
              <p className="mt-1 font-body text-xs text-muted">Missed calls</p>
            </div>
            <div>
              <span className="font-sans text-3xl font-bold text-text" style={{ letterSpacing: "-2px" }}>5</span>
              <p className="mt-1 font-body text-xs text-muted">Days to go live</p>
            </div>
            <div>
              <span className="font-sans text-3xl font-bold text-text" style={{ letterSpacing: "-2px" }}>5x</span>
              <p className="mt-1 font-body text-xs text-muted">Cheaper than staff</p>
            </div>
          </div>
        </div>

        {/* Right column — Widget */}
        <div className="lg:mt-8">
          <HeroWidget />
        </div>
      </div>
    </section>
  );
}
