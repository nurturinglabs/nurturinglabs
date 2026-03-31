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
              className="group inline-flex items-center gap-4 rounded-[14px] px-7 py-3.5 font-body transition-all hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #00FFD1, #00FFD1CC)",
                boxShadow: "0 0 30px #00FFD120, 0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              <span className="flex flex-col items-start">
                <span className="font-mono text-[9px] font-bold uppercase tracking-[2px]" style={{ color: "#04342C", opacity: 0.6 }}>
                  Free 30-min call
                </span>
                <span className="font-sans text-sm font-bold" style={{ color: "#04342C", letterSpacing: "-0.5px" }}>
                  Book free consultation
                </span>
              </span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#04342C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
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
