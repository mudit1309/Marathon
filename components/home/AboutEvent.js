import { Shield, Sparkles, Cpu, Leaf } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const PILLARS = [
  {
    icon: Cpu,
    title: "Tech-First Race Day",
    description:
      "Live chip timing, real-time tracking, instant certificates and a dashboard every runner can share.",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious By Design",
    description:
      "Recycled fabric tees, biodegradable bibs, plantable thank-you cards and waste segregation across the venue.",
  },
  {
    icon: Shield,
    title: "Safety You Can Trust",
    description:
      "Medical aid every 2.5 km, ambulances on-course, trained paramedics and a fully-staffed finish-line tent.",
  },
  {
    icon: Sparkles,
    title: "A Festival, Not Just A Race",
    description:
      "Live music, food, community zones, kids corner and partner activations make race day an all-day event.",
  },
];

export default function AboutEvent() {
  return (
    <section id="about" className="relative py-24">
      <div className="container-narrow">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="About the Event"
              title="Where performance meets purpose."
              description="Mojo Marathons was built for NCR's most ambitious community — runners, creators, corporates and families who want their race day to mean something beyond the finish line."
            />
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="border-2 border-brand-cyan-500/40 bg-brand-cyan-500/10 p-5">
                <div className="font-display text-5xl font-black text-white">
                  5K
                </div>
                <div className="mt-1 font-display text-xs font-bold uppercase tracking-widest text-brand-cyan-400">
                  Runners Expected
                </div>
              </div>
              <div className="border-2 border-brand-eco-500/40 bg-brand-eco-500/10 p-5">
                <div className="font-display text-5xl font-black text-white">
                  100%
                </div>
                <div className="mt-1 font-display text-xs font-bold uppercase tracking-widest text-brand-eco-400">
                  Eco-Certified
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {PILLARS.map(({ icon: Icon, title, description }, idx) => (
                <Reveal
                  key={title}
                  delay={idx * 0.08}
                  className="card-premium p-6"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center border-2 border-brand-cyan-500/50 bg-brand-cyan-500/10 text-brand-cyan-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
