import { Megaphone, Flag, Film, ArrowRight, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { brandVisibilityPhases } from "@/lib/data/eventData";

const ICONS = { Megaphone, Flag, Film };

export default function BrandVisibility() {
  return (
    <section id="brand-visibility" className="relative py-24">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="For Sponsors"
          title={
            <>
              Amplifying Impact:{" "}
              <span className="gradient-text">360° Brand Visibility</span>
            </>
          }
          description="Total Reach: 20,000+ cumulative on-ground & digital impressions across a three-phase visibility engine built for your brand."
        />

        <div className="relative mt-16 grid gap-6 lg:grid-cols-3">
          {/* Connecting line */}
          <div className="pointer-events-none absolute left-0 right-0 top-24 hidden h-px bg-gradient-to-r from-transparent via-brand-cyan-500/40 to-transparent lg:block" />

          {brandVisibilityPhases.map((phase, i) => {
            const Icon = ICONS[phase.icon] || Megaphone;
            return (
              <Reveal key={phase.phase} delay={i * 0.12}>
                <div className="group relative h-full overflow-hidden border-2 border-white/10 bg-brand-navy-900/70 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand-cyan-500/70 hover:shadow-athletic">
                  <div className="absolute left-0 top-0 h-1 w-0 bg-brand-cyan-500 transition-all duration-500 group-hover:w-full" />
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-16 w-16 items-center justify-center border-2 border-brand-cyan-500/50 bg-brand-cyan-500/10">
                      <Icon className="h-7 w-7 text-brand-cyan-400" />
                    </div>
                    <span className="font-display text-7xl font-black leading-none text-white/10">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="mt-6 font-display text-xs font-bold uppercase tracking-[0.25em] text-brand-cyan-400">
                    {phase.phase}
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-white">
                    {phase.title}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {phase.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-white/70"
                      >
                        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-eco-400" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 border-2 border-brand-eco-500/40 bg-brand-eco-500/10 px-6 py-4 text-center text-sm text-white/70">
          <TrendingUp className="h-5 w-5 text-brand-eco-400" />
          <span>
            Every title & powered-by sponsor receives a post-event{" "}
            <strong className="text-brand-eco-400">Digital Impact Report</strong>{" "}
            with real reach, engagement and attribution numbers.
          </span>
        </div>
      </div>
    </section>
  );
}
