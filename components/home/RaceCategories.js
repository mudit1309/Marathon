"use client";

import { motion } from "framer-motion";
import { Trophy, Zap, Heart, Clock, Medal, Users2, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import RegisterButton from "@/components/ui/RegisterButton";
import { raceCategories } from "@/lib/data/eventData";
import { cn } from "@/lib/utils";

const ICON_MAP = { Trophy, Zap, Heart };

const TIER_STYLES = {
  cyan: {
    ring: "border-brand-cyan-500/40 hover:border-brand-cyan-400",
    glow: "from-brand-cyan-500/20 to-transparent",
    chip: "bg-brand-cyan-500/15 text-brand-cyan-300 border-brand-cyan-500/30",
    number: "text-brand-cyan-400",
  },
  eco: {
    ring: "border-brand-eco-500/40 hover:border-brand-eco-400",
    glow: "from-brand-eco-500/20 to-transparent",
    chip: "bg-brand-eco-500/15 text-brand-eco-300 border-brand-eco-500/30",
    number: "text-brand-eco-400",
  },
  gold: {
    ring: "border-brand-gold-500/40 hover:border-brand-gold-400",
    glow: "from-brand-gold-500/20 to-transparent",
    chip: "bg-brand-gold-500/15 text-brand-gold-400 border-brand-gold-500/30",
    number: "text-brand-gold-400",
  },
};

export default function RaceCategories() {
  return (
    <section id="race-categories" className="relative py-24">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Race Categories"
          title="Choose your distance. Find your pace."
          description="Whether you're chasing a PB, running your first 10K or joining the 5K with your family — there's a category built for you."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {raceCategories.map((cat, idx) => {
            const Icon = ICON_MAP[cat.icon] || Trophy;
            const style = TIER_STYLES[cat.color] || TIER_STYLES.cyan;
            return (
              <motion.article
                key={cat.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-3xl border bg-white/[0.03] p-8 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06]",
                  style.ring
                )}
              >
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                    style.glow
                  )}
                />

                <div className="relative flex items-start justify-between">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white">
                    <Icon className={cn("h-6 w-6", style.number)} />
                  </div>
                  <span
                    className={cn(
                      "rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider",
                      style.chip
                    )}
                  >
                    {cat.timed ? "Chip Timed" : "Non-Timed"}
                  </span>
                </div>

                <div className="relative mt-8">
                  <div className="flex items-baseline gap-2">
                    <span
                      className={cn(
                        "font-display text-7xl font-black leading-none",
                        style.number
                      )}
                    >
                      {cat.distance.split(" ")[0]}
                    </span>
                    <span className="font-display text-2xl font-black text-white/40">
                      KM
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-bold text-white">
                    {cat.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/60">{cat.tagline}</p>
                </div>

                <p className="relative mt-5 text-sm leading-relaxed text-white/70">
                  {cat.description}
                </p>

                <div className="relative mt-6 grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2">
                    <Clock className="h-3.5 w-3.5 text-white/50" />
                    <span className="text-white/80">{cat.startTime}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2">
                    <Users2 className="h-3.5 w-3.5 text-white/50" />
                    <span className="text-white/80">
                      {cat.minAge}+ years
                    </span>
                  </div>
                </div>

                <ul className="relative mt-6 space-y-2">
                  {cat.benefits.slice(0, 4).map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-xs text-white/65"
                    >
                      <Medal className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-cyan-400" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-white/50">
                      Entry Fee
                    </div>
                    <div className="font-display text-xl font-bold text-white">
                      {cat.fee}
                      <span className="ml-1 text-xs font-normal text-brand-eco-400">
                        early bird {cat.earlyBird}
                      </span>
                    </div>
                  </div>
                  <RegisterButton
                    label="Join"
                    source={`category-${cat.slug}`}
                    category={cat.slug}
                    className="!px-5 !py-2.5"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-white/50">
            Want to bring a corporate team of 10 or more? We offer team slabs
            and branded bibs.{" "}
            <a
              href="/contact?subject=corporate"
              className="font-semibold text-brand-cyan-400 hover:underline"
            >
              Get in touch
              <ChevronRight className="inline h-3 w-3" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
