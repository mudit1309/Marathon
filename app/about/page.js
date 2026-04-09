import PageHero from "@/components/ui/PageHero";
import AboutEvent from "@/components/home/AboutEvent";
import EcoSection from "@/components/home/EcoSection";
import AudienceTargeting from "@/components/home/AudienceTargeting";
import WhyParticipate from "@/components/home/WhyParticipate";
import Testimonials from "@/components/home/Testimonials";
import RegistrationCTA from "@/components/home/RegistrationCTA";

export const metadata = {
  title: "About Mojo Marathons",
  description:
    "Mojo Marathons is Noida's biggest half marathon — where passion, performance and the planet meet. Learn our story, mission and community.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Mojo Marathons"
        title="Built for NCR. Built for the planet."
        description="A running event reimagined for the way NCR lives, works and moves — athletic, eco-conscious and community-led."
      />
      <AboutEvent />
      <WhyParticipate />
      <EcoSection />
      <AudienceTargeting />
      <Testimonials />
      <RegistrationCTA />
    </>
  );
}
