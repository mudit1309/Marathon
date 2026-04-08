import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  Dumbbell,
  Users,
  Smartphone,
  Leaf,
  HeartPulse,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { audienceSegments } from "@/lib/data/eventData";

const ICONS = { Briefcase, GraduationCap, Dumbbell, Users };

const PSYCHOGRAPHICS = [
  { icon: Smartphone, label: "Tech-Savvy" },
  { icon: Leaf, label: "Eco-Conscious" },
  { icon: HeartPulse, label: "Health-Focused" },
  { icon: TrendingUp, label: "Ambitious" },
];

export default function AudienceTargeting() {
  return (
    <section id="audience" className="relative py-24">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Our Community"
          title={
            <>
              Connecting with{" "}
              <span className="gradient-text">NCR's Changemakers.</span>
            </>
          }
          description="A community of 5,000+ runners from four distinct audiences united by one psychographic: tech-savvy, eco-conscious, health-focused and ambitious."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {audienceSegments.map((seg, i) => {
                const Icon = ICONS[seg.icon] || Users;
                return (
                  <Reveal key={seg.title} delay={i * 0.08}>
                    <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-brand-cyan-500/40 hover:bg-white/[0.06]">
                      <div className="flex items-start justify-between">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-cyan-500/15 text-brand-cyan-400 ring-1 ring-brand-cyan-500/30">
                          <Icon className="h-5 w-5" />
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-white/20 transition-all group-hover:text-brand-cyan-400" />
                      </div>
                      <h3 className="mt-5 font-display text-xl font-bold text-white">
                        {seg.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/65">
                        {seg.description}
                      </p>
                      <Link
                        href={`/about#${seg.target}`}
                        className="mt-5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand-cyan-400 hover:underline"
                      >
                        {seg.cta}
                      </Link>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Psychographics panel */}
          <div className="lg:col-span-4">
            <div className="glass-card sticky top-28 p-7">
              <h3 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-brand-cyan-400">
                Psychographics
              </h3>
              <div className="mt-5 space-y-3">
                {PSYCHOGRAPHICS.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-eco-500/15 text-brand-eco-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold text-white">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-brand-eco-500/20 bg-brand-eco-500/5 p-4 text-xs text-white/70">
                NCR's most socially-connected running community — with
                repeat engagement across both editions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
