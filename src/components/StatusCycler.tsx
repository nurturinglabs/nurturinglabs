"use client";

import { useState, useEffect } from "react";
import { statuses } from "@/lib/data";

export default function StatusCycler() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const i = setInterval(
      () => setIdx((p) => (p + 1) % statuses.length),
      2000
    );
    return () => clearInterval(i);
  }, []);

  return (
    <div className="flex items-center gap-2.5">
      {/* Pulsing dot */}
      <div className="relative">
        <div className="w-2.5 h-2.5 rounded-full bg-accent relative z-[1]" />
        <div className="absolute -inset-1 rounded-full border-2 border-accent animate-ripple" />
      </div>

      {/* Status text */}
      <div className="relative h-4 flex items-center">
        <span className="font-mono text-xs text-accent tracking-[1px]">
          AI ACTIVE &mdash;{" "}
        </span>
        {statuses.map((s, i) => (
          <span
            key={s}
            className="font-mono text-xs text-accent tracking-[1px] transition-opacity duration-[400ms]"
            style={{
              position: i === idx ? "relative" : "absolute",
              opacity: i === idx ? 1 : 0,
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
