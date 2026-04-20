import { BrandMarquee } from "./_components/brand-marquee";
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
      <SiteHeader />
      <Hero />
      <BrandMarquee />
      <Highlights />
      <MenuExperience />
      <Atmosphere />
      <Testimonials />
      <ReservationCta />
    </main>
  );
}
