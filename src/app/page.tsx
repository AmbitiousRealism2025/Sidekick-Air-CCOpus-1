import {
  Hero,
  OriginStory,
  Problem,
  Difference,
  Standard,
  App,
  CTA,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section - Full viewport */}
      <Hero />

      {/* Origin Story - Dark section */}
      <OriginStory />

      {/* Problem Section - Light section with pain points */}
      <Problem />

      {/* Difference Section - Dark/deep with features */}
      <Difference />

      {/* Standard Section - Future vision with AI */}
      <Standard />

      {/* App Section - Light with app features */}
      <App />

      {/* CTA Section - Dark with signup */}
      <CTA />
    </main>
  );
}
