import { Outfit, Plus_Jakarta_Sans } from "next/font/google";

// Display font - Bold and distinctive for headlines
export const displayFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

// Body font - Highly readable for paragraphs
export const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

// Combined class for layout
export const fontVariables = `${displayFont.variable} ${bodyFont.variable}`;
