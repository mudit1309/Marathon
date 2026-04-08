import PageHero from "@/components/ui/PageHero";
import RouteVenue from "@/components/home/RouteVenue";
import RegistrationCTA from "@/components/home/RegistrationCTA";
import { MapPin, Clock, Car, Navigation } from "lucide-react";

export const metadata = {
  title: "Route & Venue — Noida",
  description:
    "A scenic, championship-certified course through Noida's skyline. See the route map, venue details, parking, hydration stops and race-day facilities.",
  alternates: { canonical: "/route-venue" },
};

const FACILITIES = [
  {
    icon: MapPin,
    title: "Race Village",
    description:
      "Food trucks, music, kids corner and partner activations — the heart of race day.",
  },
  {
    icon: Clock,
    title: "Staggered Flag-Offs",
    description:
      "21K at 5:00 AM, 10K at 5:30 AM, 5K at 6:00 AM — zero congestion at the start.",
  },
  {
    icon: Car,
    title: "Parking & Transit",
    description:
      "Free parking on-site plus shuttle service from key NCR metro stations.",
  },
  {
    icon: Navigation,
    title: "Live Tracking",
    description:
      "Friends and family can follow runners in real time via the Mojo app.",
  },
];

export default function RouteVenuePage() {
  return (
    <>
      <PageHero
        eyebrow="Route & Venue"
        title="A course engineered for PBs."
        description="Scenic, certified and fast — with cheer zones, hydration and medical support built in at every kilometre."
      />
      <RouteVenue />
      <section className="py-24">
        <div className="container-narrow">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FACILITIES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="card-premium p-6"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-cyan-500/15 text-brand-cyan-400 ring-1 ring-brand-cyan-500/30">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-white/60">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <RegistrationCTA />
    </>
  );
}
