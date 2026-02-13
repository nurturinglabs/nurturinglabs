"use client";

import { useMemo } from "react";

// Pre-compute bar values at fixed precision to avoid SSR/client hydration mismatches
function computeBars(count: number) {
  return Array.from({ length: count }, (_, i) => {
    const baseHeight = Math.sin((i / count) * Math.PI) * 0.7 + 0.3;
    return {
      delay: `${parseFloat((i * 0.055).toFixed(3))}s`,
      height: `${parseFloat((baseHeight * 100).toFixed(2))}%`,
      opacity: parseFloat((0.6 + baseHeight * 0.4).toFixed(4)),
    };
  });
}

const DEFAULT_BARS = computeBars(36);

export default function Waveform({ bars = 36 }: { bars?: number }) {
  const barData = useMemo(
    () => (bars === 36 ? DEFAULT_BARS : computeBars(bars)),
    [bars]
  );

  return (
    <div className="flex items-center" style={{ gap: 3, height: 56 }}>
      {barData.map((bar, i) => (
        <div
          key={i}
          className="animate-wave"
          style={{
            width: 3,
            borderRadius: 3,
            background: "linear-gradient(180deg, #00FFD1, #00FFD144)",
            animationDuration: "1.6s",
            animationDelay: bar.delay,
            height: bar.height,
            opacity: bar.opacity,
          }}
        />
      ))}
    </div>
  );
}
