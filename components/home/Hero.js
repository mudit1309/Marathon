"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Users,
  ChevronRight,
  PlayCircle,
  Sparkles,
} from "lucide-react";
import { eventInfo } from "@/lib/data/eventData";
import RegisterButton from "@/components/ui/RegisterButton";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Animated backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="absolute inset-0 bg-circuit-pattern opacity-60" />
        <div
          className="absolute inset-0 bg-grid-pattern"
          style={{ backgroundSize: "60px 60px" }}
        />
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-brand-cyan-500/20 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-brand-eco-500/20 blur-[120px]" />
      </div>

      <div className="container-narrow">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-cyan-500/30 bg-brand-cyan-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan-400 backdrop-blur"
            >
              <Sparkles className="h-4 w-4" />
              {eventInfo.edition} · Registration Open
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-[5.5rem]"
            >
              Run The{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-brand-cyan-400 via-white to-brand-eco-400 bg-clip-text text-transparent">
                  Future
                </span>
                <span className="absolute inset-x-0 bottom-2 -z-0 h-4 bg-brand-cyan-500/30 blur-xl" />
              </span>
              <br />
              Protect the{" "}
              <span className="bg-gradient-to-r from-brand-eco-400 to-brand-cyan-400 bg-clip-text text-transparent">
                Planet.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-white/70 text-pretty"
            >
              {eventInfo.intro}
            </motion.p>

            {/* Quick facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
                <Calendar className="h-4 w-4 text-brand-cyan-400" />
                17 May 2026
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
                <MapPin className="h-4 w-4 text-brand-cyan-400" />
                Noida, NCR
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
                <Users className="h-4 w-4 text-brand-cyan-400" />
                5,000+ Runners
              </div>
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
                Explore Race Details
                <ChevronRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                className="btn-ghost group"
                aria-label="Watch event trailer"
              >
                <PlayCircle className="h-5 w-5 text-brand-cyan-400 transition-transform group-hover:scale-110" />
                Watch Trailer
              </button>
            </motion.div>
          </div>

          {/* Right visual */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="relative mx-auto aspect-square max-w-md">
                {/* Glowing ring */}
                <div
                  className="absolute inset-0 rounded-full border-2 border-brand-cyan-500/30"
                  style={{ animation: "spin 30s linear infinite" }}
                />
                <div
                  className="absolute inset-6 rounded-full border border-brand-eco-500/30"
                  style={{ animation: "spin 20s linear infinite reverse" }}
                />
                <div className="absolute inset-12 rounded-full border border-white/10" />

                {/* Core stat */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <div className="font-display text-8xl font-black leading-none text-white lg:text-9xl">
                    21
                  </div>
                  <div className="mt-1 font-display text-2xl font-bold text-brand-cyan-400">
                    KM
                  </div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                    Half Marathon
                  </div>
                </div>

                {/* Floating pills */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-2 right-0 rounded-2xl border border-white/10 bg-brand-navy-900/90 px-4 py-3 text-xs font-bold text-white backdrop-blur shadow-glow"
                >
                  <div className="text-brand-cyan-400">CHIP TIMED</div>
                  <div className="text-[10px] text-white/60">All categories</div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute bottom-4 -left-4 rounded-2xl border border-white/10 bg-brand-navy-900/90 px-4 py-3 text-xs font-bold text-white backdrop-blur shadow-glow-eco"
                >
                  <div className="text-brand-eco-400">ZERO WASTE</div>
                  <div className="text-[10px] text-white/60">Certified</div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, delay: 0.8 }}
                  className="absolute top-1/2 -right-6 rounded-2xl border border-white/10 bg-brand-navy-900/90 px-4 py-3 text-xs font-bold text-white backdrop-blur"
                >
                  <div className="text-brand-gold-400">₹5L+ PRIZES</div>
                  <div className="text-[10px] text-white/60">Pool</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
