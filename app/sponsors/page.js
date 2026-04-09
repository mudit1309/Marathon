import PageHero from "@/components/ui/PageHero";
import SponsorsSection from "@/components/home/SponsorsSection";
import BrandVisibility from "@/components/home/BrandVisibility";
import ContactSection from "@/components/home/ContactSection";

export const metadata = {
  title: "Sponsors & Partners",
  description:
    "Mojo Marathons offers sponsors premium visibility across 20,000+ highly-engaged NCR runners — from corporate professionals to student athletes and family audiences.",
  alternates: { canonical: "/sponsors" },
};

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sponsors & Partners"
        title="Premium brand visibility, measured."
        description="A three-phase visibility engine delivering 20,000+ cumulative reach across pre-event, event day and post-event storytelling."
      />
      <BrandVisibility />
      <SponsorsSection />
      <ContactSection />
    </>
  );
}
