import PageHero from "@/components/ui/PageHero";
import RaceCategories from "@/components/home/RaceCategories";
import RegistrationCTA from "@/components/home/RegistrationCTA";
import FAQ from "@/components/home/FAQ";
import { faqs } from "@/lib/data/eventData";

export const metadata = {
  title: "Race Categories — 21K, 10K & 5K",
  description:
    "Pick your distance: Half Marathon 21K, 10K Run or 5K Fun Run. Chip timing, finisher medals, and race-day support for every runner.",
  alternates: { canonical: "/race-categories" },
};

export default function RaceCategoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Race Categories"
        title="Three races. One unforgettable day."
        description="Whether you're chasing a championship PB, running your first 10K, or here for a family 5K — we've got you covered."
      />
      <RaceCategories />
      <FAQ items={faqs.filter((f) => ["registration", "race-day"].includes(f.category))} />
      <RegistrationCTA />
    </>
  );
}
