import {
  Trophy,
  Leaf,
  Users,
  HeartPulse,
  Medal,
  Sparkles,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { whyParticipate } from "@/lib/data/eventData";

const ICONS = {
  Trophy,
  Leaf,
  Users,
  HeartPulse,
  Medal,
  Sparkles,
};

export default function WhyParticipate() {
  return (
    <section id="why" className="relative py-24">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Why Run Mojo"
          title="Six reasons this isn't just another race."
          description="We obsess over the details that make a race day unforgettable — from the course map to the medal in your hand."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyParticipate.map((item, i) => {
            const Icon = ICONS[item.icon] || Sparkles;
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand-cyan-500/40 hover:bg-white/[0.06]">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-cyan-500/10 blur-3xl transition-all duration-500 group-hover:bg-brand-cyan-500/25" />
                  <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-cyan-500/20 to-brand-eco-500/20 text-brand-cyan-400 ring-1 ring-brand-cyan-500/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="relative mt-6 font-display text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-white/65">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
