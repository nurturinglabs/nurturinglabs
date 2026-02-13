"use client";

import { useState, useEffect } from "react";
import { verticals } from "@/lib/data";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import DemoCard from "@/components/DemoCard";
import Footer from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [activeV, setActiveV] = useState(0);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 150);
  }, []);

  useEffect(() => {
    const i = setInterval(
      () => setActiveV((p) => (p + 1) % verticals.length),
      4000
    );
    return () => clearInterval(i);
  }, []);

  return (
    <div
      className="w-screen h-screen overflow-hidden bg-bg font-sans text-text flex flex-col relative"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute"
          style={{
            width: "60vw",
            height: "60vh",
            top: "-10vh",
            right: "-10vw",
            background: "radial-gradient(ellipse, #00FFD108, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.03,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "128px 128px",
          }}
        />
      </div>

      {/* Nav */}
      <Nav loaded={loaded} />

      {/* Main grid */}
      <main
        className="flex-1 grid grid-cols-1 md:grid-cols-2 relative z-10"
        style={{
          padding: "0 clamp(28px, 5vw, 72px)",
          gap: "clamp(28px, 4vw, 56px)",
          alignContent: "center",
        }}
      >
        {/* Left: Hero */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateX(0)" : "translateX(-30px)",
            transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s",
          }}
        >
          <Hero activeV={activeV} />
        </div>

        {/* Right: Demo card */}
        <div
          className="flex flex-col items-center justify-center"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateX(0)" : "translateX(30px)",
            transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s",
          }}
        >
          <DemoCard activeV={activeV} />
        </div>
      </main>

      {/* Footer */}
      <Footer loaded={loaded} />
    </div>
  );
}
