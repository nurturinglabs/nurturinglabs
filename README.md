# Nurturinglabs

AI-powered voice solutions for local businesses — never miss a call, a customer, or a dollar.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Fonts:** Space Grotesk · Inter · IBM Plex Mono
- **Deployment:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Tailwind theme, animations, keyframes
│   ├── layout.tsx       # Root layout, fonts, SEO metadata
│   └── page.tsx         # Landing page
├── components/
│   ├── Nav.tsx          # Navigation bar
│   ├── Hero.tsx         # Headline, CTA, stats
│   ├── DemoCard.tsx     # Live demo card with chat bubbles
│   ├── Waveform.tsx     # Animated waveform visualization
│   ├── StatusCycler.tsx # AI status indicator
│   ├── StatBlock.tsx    # Stat display (24/7, <1s, 5x)
│   └── Footer.tsx       # Footer
└── lib/
    └── data.ts          # Verticals, statuses, tags
```

## ElevenLabs Voice AI Projects

Production-grade voice agents built on the ElevenLabs Conversational AI platform:

| Project | Domain | What it does | Live Demo |
|---------|--------|-------------|-----------|
| [Domino's Voice Agent](https://github.com/nurturinglabs/elevenlabsagent-dominos) | Food & Delivery | Voice-powered pizza ordering with real-time cart, menu browsing, and conversational checkout | [elevenlabsagent-dominos.vercel.app](https://elevenlabsagent-dominos.vercel.app) |
| [Airtel AI Support](https://github.com/nurturinglabs/elevenlabsagent-airtel) | Telecom | Customer support agent handling balance checks, recharges, network diagnostics, and support tickets | [elevenlabsagent-airtel.vercel.app](https://elevenlabsagent-airtel.vercel.app) |
| [Ringaa](https://github.com/nurturinglabs/elevenlabsagent-ringaa) | Education | School admissions voice assistant for seat availability, campus visit booking, and lead capture | [elevenlabsagent-ringaa.vercel.app](https://elevenlabsagent-ringaa.vercel.app) |
| [Meddo](https://github.com/nurturinglabs/elevenlabsagent-meddo) | Healthcare | Clinical voice assistant for SOAP notes, patient summaries, pattern detection, and scheduling | [elevenlabsagent-meddo.vercel.app](https://elevenlabsagent-meddo.vercel.app) |
| [Ordra](https://github.com/nurturinglabs/elevenlabsagent-ordra) | Ordering | Voice-first ordering agent | [elevenlabsagent-ordra.vercel.app](https://elevenlabsagent-ordra.vercel.app) |
| [FDE Showcase](https://github.com/nurturinglabs/elevenlabsagent-fde) | Portfolio | Showcase site presenting all four voice AI demos across telecom, food, education, and healthcare | [elevenlabsagent-fde.vercel.app](https://elevenlabsagent-fde.vercel.app) |

All projects built with Next.js, TypeScript, Tailwind CSS, and ElevenLabs Conversational AI SDK.

## Deployment

```bash
npm run build
```

Deploy to Vercel by connecting the GitHub repo — no additional configuration needed.
