import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sidekick Air | Reimagining Recovery",
  description:
    "The revolutionary inflatable therapy table. Professional strength meets limitless mobility. Built for therapists who move with their clients.",
  keywords: [
    "therapy table",
    "massage table",
    "portable therapy table",
    "inflatable therapy table",
    "physical therapy equipment",
    "athletic training",
    "Sidekick Air",
  ],
  authors: [{ name: "Sidekick Air" }],
  creator: "Sidekick Air",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sidekickair.com",
    title: "Sidekick Air | Reimagining Recovery",
    description:
      "The revolutionary inflatable therapy table. Professional strength meets limitless mobility.",
    siteName: "Sidekick Air",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sidekick Air | Reimagining Recovery",
    description:
      "The revolutionary inflatable therapy table. Professional strength meets limitless mobility.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${fontVariables} antialiased grain-overlay`}>
        {children}
      </body>
    </html>
  );
}
