"use client";

import { useState, useEffect } from "react";

export default function StatBlock({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <div
        className="font-sans text-text"
        style={{
          fontSize: "clamp(28px, 3.5vw, 42px)",
          fontWeight: 700,
          letterSpacing: "-2px",
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      <div
        className="text-muted font-body"
        style={{ fontSize: 12, fontWeight: 400, marginTop: 6, letterSpacing: "0.5px" }}
      >
        {label}
      </div>
    </div>
  );
}
