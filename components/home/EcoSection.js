import { Shirt, Sprout, Recycle, Leaf } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const ICONS = { Shirt, Sprout, Recycle };

const ITEMS = [
  {
    icon: "Shirt",
    title: "Recycled Performance Gear",
    description:
      "Event T-shirts made from recycled plastic. Performance fabric with a conscience.",
    stat: "12 bottles",
    statLabel: "upcycled per tee",
  },
  {
    icon: "Sprout",
    title: "Zero-Waste Initiatives",
    description:
      "Biodegradable race bibs and seeded, plantable 'Thank You' cards that grow into flowers.",
    stat: "0",
    statLabel: "plastic bibs",
  },
  {
    icon: "Recycle",
    title: "Responsible Operations",
    description:
      "Minimal plastic across the race village with compost, recycling and landfill segregation at every touchpoint.",
    stat: "3-bin",
    statLabel: "waste sort system",
  },
];

export default function EcoSection() {
  return (
    <section id="eco" className="relative py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-eco-500/[0.04] to-transparent" />
      </div>
      <div className="container-narrow">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow !border-brand-eco-500/30 !bg-brand-eco-500/10 !text-brand-eco-400">
            <Leaf className="h-3.5 w-3.5" />
            Eco-Conscious DNA
          </span>
          <h2 className="section-heading mt-5 text-balance text-white">
            Minimising waste.{" "}
            <span className="bg-gradient-to-r from-brand-eco-400 to-brand-cyan-400 bg-clip-text text-transparent">
              Maximising impact.
            </span>
          </h2>
          <p className="mt-5 text-lg text-white/65 text-pretty">
            Mojo Marathons is proof that world-class races can be kind to the
            planet. Every runner leaves the city a little greener than they
            found it.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {ITEMS.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="group relative h-full overflow-hidden border-2 border-brand-eco-500/30 bg-brand-navy-900/70 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand-eco-500/70 hover:shadow-glow-eco">
                  <div className="inline-flex h-14 w-14 items-center justify-center border-2 border-brand-eco-500/50 bg-brand-eco-500/15 text-brand-eco-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-wide text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {item.description}
                  </p>
                  <div className="mt-6 flex items-baseline gap-2 border-t border-brand-eco-500/20 pt-4">
                    <span className="font-display text-3xl font-black text-brand-eco-400">
                      {item.stat}
                    </span>
                    <span className="text-xs text-white/60">
                      {item.statLabel}
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
