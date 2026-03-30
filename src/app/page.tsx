import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import VoiceAgents from "@/components/VoiceAgents";
import WhatWeBuild from "@/components/WhatWeBuild";
import HowItWorks from "@/components/HowItWorks";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg font-sans text-text">
      <Nav />
      <main>
        <Hero />
        <PainPoints />
        <VoiceAgents />
        <WhatWeBuild />
        <HowItWorks />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
