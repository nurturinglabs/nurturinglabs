"use client";

import { useEffect, useState, useMemo } from "react";
import { verticals, conversations } from "@/lib/convos";

const modes = ["LISTENING", "PROCESSING", "RESPONDING", "SCHEDULING"] as const;

const capTags = [
  "Scheduling",
  "Triage",
  "Smart Routing",
  "Context-Aware",
  "Human Handoff",
  "Multilingual",
];

export default function HeroWidget() {
  const [verticalIdx, setVerticalIdx] = useState(0);
  const [modeIdx, setModeIdx] = useState(0);
  const [showCaller, setShowCaller] = useState(false);
  const [showAi, setShowAi] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setModeIdx((i) => (i + 1) % modes.length), 1400);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    setShowCaller(false);
    setShowAi(false);
    const t1 = setTimeout(() => setShowCaller(true), 400);
    const t2 = setTimeout(() => setShowAi(true), 2200);
    const t3 = setTimeout(() => setVerticalIdx((i) => (i + 1) % verticals.length), 6500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [verticalIdx]);

  const bars = useMemo(() => {
    const count = 36;
    return Array.from({ length: count }, (_, i) => {
      const baseHeight = Math.sin((i / count) * Math.PI) * 0.7 + 0.3;
      return {
        delay: `${parseFloat((i * 0.055).toFixed(3))}s`,
        height: `${parseFloat((baseHeight * 100).toFixed(2))}%`,
        opacity: parseFloat((0.6 + baseHeight * 0.4).toFixed(4)),
      };
    });
  }, []);

  const vertical = verticals[verticalIdx];
  const convo = conversations[vertical];

  return (
    <div className="rounded-2xl border border-border bg-card-bg p-6" style={{ background: "linear-gradient(135deg, #0E0F14, #131420)" }}>
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="animate-pulse-dot inline-block h-2 w-2 rounded-full bg-accent" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
            AI Active
          </span>
        </div>
        <span className="font-mono text-xs text-muted">
          —{modes[modeIdx]}
        </span>
      </div>

      {/* Waveform */}
      <div className="mb-6 flex items-center justify-center" style={{ gap: 3, height: 56 }}>
        {bars.map((bar, i) => (
          <div
            key={i}
            className="animate-wave"
            style={{
              width: 3,
              borderRadius: 3,
              background: "#00FFD1",
              animationDuration: "1.6s",
              animationDelay: bar.delay,
              height: bar.height,
              opacity: bar.opacity,
            }}
          />
        ))}
      </div>

      {/* Conversation */}
      <div className="mb-5 min-h-[120px] space-y-3">
        {showCaller && (
          <div
            className="animate-fade-in font-body"
            style={{
              background: "#00FFD110",
              borderRadius: "12px 12px 12px 4px",
              padding: "10px 14px",
              fontSize: 13,
              color: "#F0F0F2CC",
              lineHeight: 1.5,
              maxWidth: "88%",
              fontWeight: 300,
              border: "1px solid #00FFD115",
            }}
          >
            &ldquo;{convo.caller}&rdquo;
          </div>
        )}
        {showAi && (
          <div
            className="animate-fade-in ml-auto font-body"
            style={{
              background: "#1A1D2A88",
              borderRadius: "12px 12px 4px 12px",
              padding: "10px 14px",
              fontSize: 13,
              color: "#F0F0F2CC",
              lineHeight: 1.5,
              maxWidth: "88%",
              fontWeight: 300,
            }}
          >
            &ldquo;{convo.ai}&rdquo;
          </div>
        )}
      </div>

      {/* Capability tags */}
      <div className="flex flex-wrap gap-2">
        {capTags.map((tag) => (
          <span
            key={tag}
            className="text-muted bg-border"
            style={{
              fontSize: 11,
              fontWeight: 500,
              padding: "4px 10px",
              borderRadius: 6,
              letterSpacing: "0.3px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
