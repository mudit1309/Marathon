"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Users,
  CalendarDays,
  MapPin,
  Briefcase,
  GraduationCap,
  Dumbbell,
  Home as HomeIcon,
  Megaphone,
  Flag,
  Film,
  Play,
  Pause,
} from "lucide-react";
import RegisterButton from "@/components/ui/RegisterButton";

/**
 * 3-pillar hero slider — auto-advancing carousel sitting at the top of the
 * home page. Each slide = one pillar. Sporty theme, racing red + electric
 * yellow accents, bold display type, side-entering cards.
 */

const PILLARS = [
  {
    id: "platform",
    number: "01",
    eyebrow: "Pillar 01 — The Platform",
    title: "The Platform",
    highlight: "At A Glance",
    tagline: "5,000+ runners. 3 races. One legendary day.",
    description:
      "Noida's biggest sporting weekend takes over the city on 17 May 2026. Half Marathon, 10K and 5K Fun Run — built for athletes, beginners and everyone in between.",
    image: "/content/pillar-platform.jpg",
    imageAlt: "Mojo Marathons Platform at a Glance",
    color: "red",
    chips: [
      { icon: Users, label: "5,000+ Runners" },
      { icon: CalendarDays, label: "17 May 2026" },
      { icon: MapPin, label: "Noida, NCR" },
    ],
    cta: { label: "See Race Categories", href: "/race-categories" },
    stats: [
      { value: "21K", label: "Half Marathon" },
      { value: "10K", label: "Timed Run" },
      { value: "5K", label: "Fun Run" },
    ],
  },
  {
    id: "changemakers",
    number: "02",
    eyebrow: "Pillar 02 — The Community",
    title: "NCR's",
    highlight: "Changemakers",
    tagline: "A community that shows up, runs hard, cheers louder.",
    description:
      "Corporate teams, urban youth, fitness crews and families — Mojo unites NCR's most active, ambitious and health-focused community every race day.",
    image: "/content/pillar-changemakers.jpg",
    imageAlt: "Connecting with NCR's Changemakers",
    color: "yellow",
    chips: [
      { icon: Briefcase, label: "Corporates" },
      { icon: GraduationCap, label: "Students" },
      { icon: Dumbbell, label: "Fitness Clubs" },
      { icon: HomeIcon, label: "Families" },
    ],
    cta: { label: "Meet The Community", href: "/about" },
    stats: [
      { value: "100+", label: "Companies" },
      { value: "50+", label: "Running Clubs" },
      { value: "4", label: "Audiences" },
    ],
  },
  {
    id: "visibility",
    number: "03",
    eyebrow: "Pillar 03 — Brand Visibility",
    title: "360° Brand",
    highlight: "Visibility",
    tagline: "20,000+ cumulative on-ground & digital reach.",
    description:
      "A three-phase visibility engine: Pre-Event momentum, Event Day maximum exposure, and Post-Event lasting value. Every sponsor gets the full athletic spotlight.",
    image: "/content/pillar-visibility.jpg",
    imageAlt: "Amplifying Impact 360 Brand Visibility",
    color: "orange",
    chips: [
      { icon: Megaphone, label: "Pre-Event" },
      { icon: Flag, label: "Event Day" },
      { icon: Film, label: "Post-Event" },
    ],
    cta: { label: "Become A Sponsor", href: "/sponsors" },
    stats: [
      { value: "20K+", label: "Reach" },
      { value: "15M+", label: "Impressions" },
      { value: "40+", label: "Media" },
    ],
  },
];

const COLOR_STYLES = {
  red: {
    accent: "bg-brand-cyan-500",
    accentText: "text-brand-cyan-500",
    border: "border-brand-cyan-500",
    glow: "shadow-glow",
    chip: "border-brand-cyan-500/60 bg-brand-cyan-500/10 text-white",
    numberOutline: "text-brand-cyan-500/15",
  },
  yellow: {
    accent: "bg-brand-eco-500",
    accentText: "text-brand-eco-500",
    border: "border-brand-eco-500",
    glow: "shadow-glow-eco",
    chip: "border-brand-eco-500/60 bg-brand-eco-500/10 text-white",
    numberOutline: "text-brand-eco-500/15",
  },
  orange: {
    accent: "bg-brand-gold-500",
    accentText: "text-brand-gold-500",
    border: "border-brand-gold-500",
    glow: "shadow-glow-orange",
    chip: "border-brand-gold-500/60 bg-brand-gold-500/10 text-white",
    numberOutline: "text-brand-gold-500/15",
  },
};

const SLIDE_DURATION = 6500;

export default function PillarSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [imgErrors, setImgErrors] = useState({});
  const progressRef = useRef(null);

  const next = useCallback(
    () => setActive((i) => (i + 1) % PILLARS.length),
    []
  );
  const prev = useCallback(
    () => setActive((i) => (i - 1 + PILLARS.length) % PILLARS.length),
    []
  );
  const goTo = useCallback((i) => setActive(i), []);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const id = setTimeout(next, SLIDE_DURATION);
    return () => clearTimeout(id);
  }, [active, paused, next]);

  // Progress bar reset on slide change
  useEffect(() => {
    if (!progressRef.current) return;
    progressRef.current.style.animation = "none";
    // force reflow to restart animation
    void progressRef.current.offsetWidth;
    progressRef.current.style.animation = paused
      ? "none"
      : `pillarProgress ${SLIDE_DURATION}ms linear forwards`;
  }, [active, paused]);

  const pillar = PILLARS[active];
  const styles = COLOR_STYLES[pillar.color];

  return (
    <section
      id="pillars"
      className="relative isolate overflow-hidden pt-24 pb-12 lg:pt-28"
      aria-roledescription="carousel"
      aria-label="Mojo Marathons three pillars"
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="absolute inset-0 bg-track-stripes" />
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-brand-cyan-500/20 blur-[140px]" />
        <div className="absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-brand-eco-500/15 blur-[140px]" />
      </div>

      <div className="container-narrow">
        {/* Slider header */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="stripe-accent mb-4 h-2 w-24" />
            <h2 className="font-display text-3xl font-black leading-none text-white sm:text-4xl lg:text-5xl">
              Our Three Pillars
            </h2>
            <p className="mt-2 max-w-xl text-sm text-white/60 sm:text-base">
              The platform, the community, the visibility — everything that
              makes Mojo Marathons unmissable.
            </p>
          </div>

          {/* Slide controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous pillar"
              className="flex h-12 w-12 items-center justify-center border-2 border-white/20 bg-brand-navy-900/60 text-white backdrop-blur transition-all hover:border-brand-cyan-500 hover:bg-brand-cyan-500"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Resume auto-play" : "Pause auto-play"}
              className="flex h-12 w-12 items-center justify-center border-2 border-white/20 bg-brand-navy-900/60 text-white backdrop-blur transition-all hover:border-brand-eco-500 hover:bg-brand-eco-500 hover:text-brand-navy-900"
            >
              {paused ? (
                <Play className="h-4 w-4" />
              ) : (
                <Pause className="h-4 w-4" />
              )}
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next pillar"
              className="flex h-12 w-12 items-center justify-center border-2 border-white/20 bg-brand-navy-900/60 text-white backdrop-blur transition-all hover:border-brand-cyan-500 hover:bg-brand-cyan-500"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Main slide card */}
        <div
          className={`relative overflow-hidden border-2 ${styles.border} bg-brand-navy-900/90 backdrop-blur transition-all duration-500`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Progress bar */}
          <div className="absolute left-0 right-0 top-0 z-20 h-1 bg-white/10">
            <div
              ref={progressRef}
              className={`h-full ${styles.accent}`}
              style={{ width: "0%" }}
            />
          </div>

          {/* Slides */}
          <div className="relative min-h-[540px] sm:min-h-[560px] lg:min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 grid gap-0 lg:grid-cols-12"
                role="group"
                aria-roledescription="slide"
                aria-label={`${active + 1} of ${PILLARS.length} — ${pillar.title}`}
              >
                {/* Text side */}
                <div className="relative z-10 flex flex-col justify-between p-6 sm:p-10 lg:col-span-7 lg:p-12">
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <span
                        className={`section-eyebrow ${
                          pillar.color === "yellow"
                            ? "section-eyebrow--yellow"
                            : ""
                        } ${
                          pillar.color === "orange"
                            ? "!bg-brand-gold-500 !text-brand-navy-900"
                            : ""
                        }`}
                      >
                        {pillar.eyebrow}
                      </span>
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="mt-6 font-display text-6xl font-black leading-[0.85] text-white sm:text-7xl lg:text-[6.5rem] xl:text-[8rem]"
                    >
                      {pillar.title}
                      <br />
                      <span className={styles.accentText}>
                        {pillar.highlight}
                      </span>
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35, duration: 0.5 }}
                      className="mt-6 font-display text-lg uppercase tracking-wider text-white/80 sm:text-xl"
                    >
                      {pillar.tagline}
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45, duration: 0.5 }}
                      className="mt-4 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base"
                    >
                      {pillar.description}
                    </motion.p>

                    {/* Chips */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.55, duration: 0.5 }}
                      className="mt-6 flex flex-wrap gap-2"
                    >
                      {pillar.chips.map(({ icon: Icon, label }) => (
                        <div
                          key={label}
                          className={`flex items-center gap-2 border ${styles.chip} px-3 py-1.5 text-xs font-bold uppercase tracking-wider`}
                        >
                          <Icon className="h-3.5 w-3.5" />
                          {label}
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  {/* CTAs */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="mt-8 flex flex-wrap items-center gap-3"
                  >
                    <RegisterButton
                      label="Register Now"
                      source={`pillar-${pillar.id}`}
                    />
                    <Link href={pillar.cta.href} className="btn-secondary">
                      {pillar.cta.label}
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
                </div>

                {/* Image side */}
                <div className="relative lg:col-span-5">
                  {/* Giant outlined pillar number background */}
                  <div
                    className={`pointer-events-none absolute -right-4 top-8 z-0 font-display text-[14rem] font-black leading-none ${styles.numberOutline} sm:text-[20rem]`}
                    style={{ WebkitTextStroke: "2px currentColor" }}
                  >
                    {pillar.number}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15, duration: 0.7 }}
                    className="relative z-10 h-full p-6 sm:p-10 lg:p-8"
                  >
                    <div
                      className={`relative aspect-[4/3] w-full overflow-hidden border-2 ${styles.border} ${styles.glow} skew-cut bg-brand-navy-800`}
                    >
                      {imgErrors[pillar.id] ? (
                        <ImagePlaceholder pillar={pillar} styles={styles} />
                      ) : (
                        <Image
                          src={pillar.image}
                          alt={pillar.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 45vw"
                          className="object-cover"
                          onError={() =>
                            setImgErrors((e) => ({ ...e, [pillar.id]: true }))
                          }
                          priority={active === 0}
                        />
                      )}
                      {/* Overlay gradient */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy-900/80 via-transparent to-transparent" />
                    </div>

                    {/* Stats strip */}
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {pillar.stats.map((s) => (
                        <div
                          key={s.label}
                          className="border border-white/10 bg-brand-navy-900/80 px-2 py-3 text-center backdrop-blur"
                        >
                          <div
                            className={`font-display text-xl font-black sm:text-2xl ${styles.accentText}`}
                          >
                            {s.value}
                          </div>
                          <div className="mt-0.5 text-[9px] font-bold uppercase tracking-wider text-white/60">
                            {s.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dot navigation */}
        <div
          className="mt-6 flex items-center justify-center gap-3"
          role="tablist"
          aria-label="Pillar slides"
        >
          {PILLARS.map((p, i) => {
            const pStyles = COLOR_STYLES[p.color];
            const isActive = i === active;
            return (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to pillar ${i + 1}: ${p.title}`}
                onClick={() => goTo(i)}
                className={`group relative flex items-center gap-2 border-2 px-4 py-2 transition-all duration-300 ${
                  isActive
                    ? `${pStyles.border} ${pStyles.accent} text-white`
                    : "border-white/20 bg-transparent text-white/60 hover:border-white/50 hover:text-white"
                }`}
              >
                <span className="font-display text-sm font-black tabular-nums">
                  {p.number}
                </span>
                <span className="hidden font-display text-xs font-bold uppercase tracking-wider sm:inline">
                  {p.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        @keyframes pillarProgress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

/**
 * Stylized fallback when the real image isn't available yet.
 */
function ImagePlaceholder({ pillar, styles }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-navy-800 to-brand-navy-900">
      <div className="absolute inset-0 bg-diagonal-stripes" />
      <div className="relative z-10 p-8 text-center">
        <div
          className={`mx-auto flex h-20 w-20 items-center justify-center border-4 ${styles.border} ${styles.accent}`}
        >
          <span className="font-display text-3xl font-black text-white">
            {pillar.number}
          </span>
        </div>
        <div className="mt-5 font-display text-2xl font-black uppercase tracking-wider text-white">
          {pillar.title}
        </div>
        <div
          className={`mt-1 font-display text-base uppercase tracking-wider ${styles.accentText}`}
        >
          {pillar.highlight}
        </div>
        <div className="mt-4 text-xs text-white/50">
          Add <code className="text-white/80">{pillar.image}</code> to see this
          image
        </div>
      </div>
    </div>
  );
}
