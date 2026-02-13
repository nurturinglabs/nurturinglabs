import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--nf-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--nf-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--nf-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nurturinglabs.com"),
  title: "Nurturinglabs \u2014 AI Superpower for Local Businesses",
  description:
    "An AI brain that understands, speaks, and acts. Never miss a call, a customer, or a dollar. 24/7 AI solutions for dental clinics, restaurants, veterinary clinics, and more.",
  openGraph: {
    title: "Nurturinglabs \u2014 AI Superpower for Local Businesses",
    description:
      "An AI brain that understands, speaks, and acts. Never miss a call, a customer, or a dollar.",
    url: "https://nurturinglabs.com",
    type: "website",
    images: ["/og-image.png"],
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
        className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
