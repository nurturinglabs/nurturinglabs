"use client";

import { verticals, tags } from "@/lib/data";
import StatusCycler from "./StatusCycler";
import Waveform from "./Waveform";

export default function DemoCard({ activeV }: { activeV: number }) {
  return (
    <div
      className="demo-card relative overflow-hidden w-full flex flex-col border border-border cursor-default"
      style={{
        maxWidth: 420,
        gap: 22,
        borderRadius: 22,
        padding: "clamp(28px, 3.5vh, 44px) clamp(24px, 2.8vw, 40px)",
        background: "linear-gradient(135deg, #0E0F14, #131420)",
      }}
    >
      {/* Glow orb */}
      <div
        className="absolute rounded-full"
        style={{
          top: -60,
          right: -60,
          width: 200,
          height: 200,
          background: "radial-gradient(circle, #00FFD10C, transparent)",
        }}
      />

      {/* Status */}
      <StatusCycler />

      {/* Waveform */}
      <Waveform />

      {/* Cycling conversations */}
      <div className="flex flex-col gap-3 relative" style={{ minHeight: 110 }}>
        {verticals.map((v, i) => (
          <div
            key={v.name}
            className="flex flex-col gap-3"
            style={{
              position: i === activeV ? "relative" : "absolute",
              top: 0,
              left: 0,
              right: 0,
              animation: i === activeV ? "msgIn 4s ease-in-out" : "none",
              opacity: i === activeV ? 1 : 0,
            }}
          >
            {/* Caller bubble */}
            <div
              className="font-body"
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
              &ldquo;{v.caller}&rdquo;
            </div>
            {/* AI bubble */}
            <div
              className="font-body"
              style={{
                background: "#1A1D2A88",
                borderRadius: "12px 12px 4px 12px",
                padding: "10px 14px",
                fontSize: 13,
                color: "#F0F0F2CC",
                lineHeight: 1.5,
                maxWidth: "88%",
                alignSelf: "flex-end",
                fontWeight: 300,
              }}
            >
              &ldquo;{v.ai}&rdquo;
            </div>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap">
        {tags.map((t) => (
          <span
            key={t}
            className="text-muted bg-border"
            style={{
              fontSize: 11,
              fontWeight: 500,
              padding: "4px 10px",
              borderRadius: 6,
              letterSpacing: "0.3px",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
