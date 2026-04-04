import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--nf-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--nf-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--nf-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://haaglabs.com"),
  title: "haagLABS — AI Superpower for Local Businesses",
  description:
    "We build AI voice agents and workflow automations for small businesses — handling calls, scheduling, invoicing, and follow-ups. Done-for-you, in days.",
  openGraph: {
    title: "haagLABS — AI Superpower for Local Businesses",
    description:
      "An AI brain that understands, speaks, and acts. Never miss a call, a customer, or a dollar.",
    url: "https://haaglabs.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} ${ibmPlexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
