"use client";

import { useState } from "react";

const CALENDLY = "https://calendly.com/nurturinglabs/30min";

const navLinks = [
  { label: "Voice Agents", href: "#voice-agents" },
  { label: "Services", href: "#services" },
  { label: "How it Works", href: "#how-it-works" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-bg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <div
            className="flex h-8 w-8 items-center justify-center"
            style={{
              borderRadius: 9,
              background: "linear-gradient(135deg, #00FFD1, #00FFD1CC)",
              boxShadow: "0 0 20px #00FFD115",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M6 6v12M18 6v12M6 12h12" stroke="#060608" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col" style={{ lineHeight: 1 }}>
            <span className="font-sans text-text" style={{ fontWeight: 800, fontSize: 15, letterSpacing: "-0.5px" }}>
              haag
            </span>
            <span className="font-mono text-accent" style={{ fontWeight: 400, fontSize: 10, letterSpacing: "2px" }}>
              LABS
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-[10px] px-5 py-2.5 transition-all hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, #00FFD1, #00FFD1CC)",
              boxShadow: "0 0 20px #00FFD115",
            }}
          >
            <span className="flex flex-col items-start">
              <span className="font-mono text-[7px] font-bold uppercase tracking-[1.5px]" style={{ color: "#04342C", opacity: 0.6 }}>
                Free 30-min call
              </span>
              <span className="font-sans text-xs font-bold" style={{ color: "#04342C", letterSpacing: "-0.3px" }}>
                Book free consultation
              </span>
            </span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#04342C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[10px] px-4 py-2 transition-all"
            style={{
              background: "linear-gradient(135deg, #00FFD1, #00FFD1CC)",
            }}
          >
            <span className="flex flex-col items-start">
              <span className="font-mono text-[7px] font-bold uppercase tracking-[1.5px]" style={{ color: "#04342C", opacity: 0.6 }}>
                Free 30-min call
              </span>
              <span className="font-sans text-xs font-bold" style={{ color: "#04342C", letterSpacing: "-0.3px" }}>
                Book free consultation
              </span>
            </span>
          </a>
          <button onClick={() => setOpen(!open)} className="text-text" aria-label="Toggle menu">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border px-6 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-muted">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
