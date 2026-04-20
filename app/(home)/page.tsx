import { Atmosphere } from "./_components/atmosphere";
import { Hero } from "./_components/hero";
import { Highlights } from "./_components/highlights";
import { MenuExperience } from "./_components/menu-experience";
import { ReservationCta } from "./_components/reservation-cta";
import { SiteHeader } from "./_components/site-header";
import { Testimonials } from "./_components/testimonials";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,192,120,0.12),transparent_25%),radial-gradient(circle_at_20%_20%,rgba(130,69,26,0.15),transparent_26%),radial-gradient(circle_at_80%_10%,rgba(255,224,178,0.08),transparent_22%)]" />
      <SiteHeader />
      <Hero />
      <Highlights />
      <MenuExperience />
      <Atmosphere />
      <Testimonials />
      <ReservationCta />
    </main>
  );
}
