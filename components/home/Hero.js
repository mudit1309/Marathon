"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Users,
  ChevronRight,
  Flame,
  Timer,
  Trophy,
} from "lucide-react";
import { eventInfo } from "@/lib/data/eventData";
import RegisterButton from "@/components/ui/RegisterButton";

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden pt-16 pb-16 lg:pt-24 lg:pb-24"
      aria-label="Mojo Marathons 2026 hero"
    >
      {/* Athletic backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="absolute inset-0 bg-track-stripes" />
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-cyan-500/25 blur-[140px]" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-eco-500/15 blur-[140px]" />
        {/* Giant outlined MARATHON text behind */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center">
          <span
            className="font-display text-[18vw] font-black leading-none tracking-tighter text-white/[0.03]"
            style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.05)" }}
          >
            MARATHON
          </span>
        </div>
      </div>

      <div className="container-narrow">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            {/* Date strip */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="h-1 w-12 bg-brand-cyan-500" />
              <span className="font-display text-sm font-bold uppercase tracking-[0.3em] text-brand-cyan-400">
                {eventInfo.edition} · 17.05.2026 · Noida
              </span>
            </motion.div>

            {/* Main title — massive, sporty */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-5 font-display text-[13vw] font-black leading-[0.85] tracking-tight text-white sm:text-7xl lg:text-[7rem] xl:text-[8.5rem]"
            >
              RUN TO THE
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-cyan-500">
                  FUTURE,
                </span>
                <span className="absolute inset-x-0 bottom-3 -z-0 h-6 bg-brand-eco-500/50 blur-md" />
              </span>
              <br />
              <span className="text-stroke text-white">PROTECT</span>{" "}
              <span className="text-white">THE</span>
              <br />
              <span className="text-brand-eco-500">PLANET.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-white/70 text-pretty"
            >
              {eventInfo.intro}
            </motion.p>

            {/* Quick facts — aggressive sporty chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Chip icon={Calendar}>17 May 2026</Chip>
              <Chip icon={MapPin}>Noida, NCR</Chip>
              <Chip icon={Users}>5,000+ Runners</Chip>
              <Chip icon={Trophy}>₹5L+ Prizes</Chip>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <RegisterButton label="Register Now" source="hero" />
              <Link href="/race-categories" className="btn-secondary">
                Race Details
                <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right: massive race number badge */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: -3 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative mx-auto max-w-sm lg:ml-auto"
            >
              {/* Fake race bib */}
              <div className="relative border-4 border-white bg-white text-brand-navy-900 shadow-2xl">
                <div className="border-b-4 border-brand-cyan-500 bg-brand-cyan-500 p-3 text-center">
                  <div className="font-display text-xs font-bold uppercase tracking-[0.3em] text-white">
                    Mojo Marathons 2026
                  </div>
                </div>
                <div className="p-6 text-center">
                  <div className="font-display text-xs font-bold uppercase tracking-wider text-brand-navy-600">
                    Official Bib
                  </div>
                  <div
                    className="mt-2 font-display text-[11rem] font-black leading-none text-brand-navy-900"
                    style={{ letterSpacing: "-0.03em" }}
                  >
                    001
                  </div>
                  <div className="mt-3 flex items-center justify-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-brand-cyan-500">
                    <Flame className="h-4 w-4" />
                    Half Marathon
                    <Flame className="h-4 w-4" />
                  </div>
                  <div className="mt-4 border-t-2 border-dashed border-brand-navy-300 pt-3 text-[10px] uppercase tracking-wider text-brand-navy-500">
                    17.05.2026 · Noida · 21.0975 KM
                  </div>
                </div>
              </div>

              {/* Floating badges around the bib */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-6 top-6 rotate-[8deg] border-2 border-brand-navy-900 bg-brand-eco-500 px-4 py-2 shadow-xl"
              >
                <div className="flex items-center gap-1 font-display text-sm font-black uppercase text-brand-navy-900">
                  <Timer className="h-4 w-4" />
                  Chip Timed
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -left-6 bottom-10 rotate-[-5deg] border-2 border-white bg-brand-cyan-500 px-4 py-2 shadow-xl"
              >
                <div className="flex items-center gap-1 font-display text-sm font-black uppercase text-white">
                  <Flame className="h-4 w-4" />
                  Live Event
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Chip({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-2 border-2 border-white/15 bg-brand-navy-900/70 px-4 py-2 font-display text-sm font-bold uppercase tracking-wider text-white backdrop-blur transition-colors hover:border-brand-cyan-500 hover:bg-brand-cyan-500/10">
      <Icon className="h-4 w-4 text-brand-cyan-400" />
      {children}
    </div>
  );
}
