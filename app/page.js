import PillarSlider from "@/components/home/PillarSlider";
import Hero from "@/components/home/Hero";
import AnimatedStats from "@/components/home/AnimatedStats";
import Countdown from "@/components/home/Countdown";
import AboutEvent from "@/components/home/AboutEvent";
import RaceCategories from "@/components/home/RaceCategories";
import RouteVenue from "@/components/home/RouteVenue";
import WhyParticipate from "@/components/home/WhyParticipate";
import EcoSection from "@/components/home/EcoSection";
import BrandVisibility from "@/components/home/BrandVisibility";
import SponsorsSection from "@/components/home/SponsorsSection";
import AudienceTargeting from "@/components/home/AudienceTargeting";
import Testimonials from "@/components/home/Testimonials";
import GalleryPreview from "@/components/home/GalleryPreview";
import RegistrationCTA from "@/components/home/RegistrationCTA";
import FAQ from "@/components/home/FAQ";
import ContactSection from "@/components/home/ContactSection";

export const metadata = {
  title: "Mojo Marathons 2026 | Run Harder. Noida's Biggest Race.",
  description:
    "Noida's biggest half marathon on 17 May 2026. Chip-timed 21K, 10K and 5K Fun Run. 5,000+ runners. Register now on India Running.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* Three pillars slider sits at the very top of the page */}
      <PillarSlider />
      <Hero />
      <AnimatedStats />
      <Countdown />
      <RaceCategories />
      <AboutEvent />
      <RouteVenue />
      <WhyParticipate />
      <EcoSection />
      <AudienceTargeting />
      <BrandVisibility />
      <SponsorsSection />
      <Testimonials />
      <GalleryPreview />
      <RegistrationCTA />
      <FAQ />
      <ContactSection />
    </>
  );
}
