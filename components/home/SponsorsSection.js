import Link from "next/link";
import { Crown, Star, Handshake, Users, Mic2, ChevronRight, Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { sponsorsData } from "@/lib/data/eventData";

const TIERS = [
  {
    key: "title",
    label: "Title Sponsor",
    icon: Crown,
    items: sponsorsData.title,
    size: "xl",
  },
  {
    key: "poweredBy",
    label: "Powered By",
    icon: Star,
    items: sponsorsData.poweredBy,
    size: "lg",
  },
  {
    key: "associate",
    label: "Associate Sponsors",
    icon: Handshake,
    items: sponsorsData.associate,
    size: "md",
  },
  {
    key: "community",
    label: "Community Partners",
    icon: Users,
    items: sponsorsData.community,
    size: "sm",
  },
  {
    key: "media",
    label: "Media Partners",
    icon: Mic2,
    items: sponsorsData.media,
    size: "sm",
  },
];

const SIZE_CLASSES = {
  xl: "h-32 sm:h-40",
  lg: "h-24 sm:h-28",
  md: "h-20 sm:h-24",
  sm: "h-16 sm:h-20",
};

function SponsorLogo({ name, size }) {
  // Premium placeholder — swap with <Image /> once real logos are uploaded
  return (
    <div
      className={`group relative flex ${SIZE_CLASSES[size]} items-center justify-center border-2 border-white/10 bg-brand-navy-900/60 px-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-brand-cyan-500/70 hover:bg-brand-navy-900/90`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center border-2 border-brand-cyan-500/50 bg-brand-cyan-500/15">
          <Award className="h-5 w-5 text-brand-cyan-400" />
        </div>
        <div className="font-display text-base font-bold uppercase tracking-wide text-white sm:text-lg">
          {name}
        </div>
      </div>
    </div>
  );
}

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="relative py-24">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Our Partners"
          title={
            <>
              Backed by brands that{" "}
              <span className="gradient-text">believe in better.</span>
            </>
          }
          description="From category-defining sponsors to community collectives, every logo here stands for runners, the planet and NCR's active future."
        />

        <div className="mt-16 space-y-10">
          {TIERS.map((tier, idx) => {
            if (!tier.items || tier.items.length === 0) return null;
            const Icon = tier.icon;
            return (
              <Reveal key={tier.key} delay={idx * 0.06}>
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center border-2 border-brand-cyan-500/50 bg-brand-cyan-500/15 text-brand-cyan-400">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-white/80">
                      {tier.label}
                    </h3>
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-brand-cyan-500/60 to-transparent" />
                  </div>
                  <div
                    className={`grid gap-4 ${
                      tier.size === "xl"
                        ? "grid-cols-1"
                        : tier.size === "lg"
                        ? "grid-cols-2"
                        : tier.size === "md"
                        ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                        : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
                    }`}
                  >
                    {tier.items.map((s) => (
                      <SponsorLogo key={s.slug} name={s.name} size={tier.size} />
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Become a sponsor CTA */}
        <div
          id="become-sponsor"
          className="mt-20 overflow-hidden border-2 border-brand-cyan-500/60 bg-gradient-to-br from-brand-navy-800 via-brand-navy-900 to-brand-navy-950 p-10 sm:p-14"
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="section-eyebrow">
                <Handshake className="h-3.5 w-3.5" />
                Become a Sponsor
              </span>
              <h3 className="section-heading mt-5 text-balance text-white">
                Reach 20,000+ highly engaged NCR runners.
              </h3>
              <p className="mt-4 text-base text-white/70">
                Mojo Marathons delivers a premium, brand-safe audience — tech
                professionals, corporate decision-makers, families and
                community runners. Choose a package or let us build one
                tailored to your goals.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact?subject=sponsorship"
                  className="btn-primary"
                >
                  Request Sponsor Deck
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <Link href="/sponsors" className="btn-secondary">
                  View Packages
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: "20K+", label: "Total Reach" },
                { number: "5K+", label: "On-Ground" },
                { number: "100+", label: "Corporates" },
                { number: "3", label: "Phases" },
                { number: "15M+", label: "Ad Impressions" },
                { number: "40+", label: "Media Outlets" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="border-2 border-white/15 bg-brand-navy-950/60 p-4 text-center backdrop-blur transition-colors hover:border-brand-cyan-500/60"
                >
                  <div className="font-display text-3xl font-black text-white">
                    {s.number}
                  </div>
                  <div className="mt-1 font-display text-[10px] font-bold uppercase tracking-widest text-brand-cyan-400">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
