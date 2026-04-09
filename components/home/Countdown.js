"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { eventInfo } from "@/lib/data/eventData";
import RegisterButton from "@/components/ui/RegisterButton";

function getTimeRemaining(targetDate) {
  const total = new Date(targetDate).getTime() - Date.now();
  if (total <= 0) {
    return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    total,
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / 1000 / 60) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(() => getTimeRemaining(eventInfo.eventDate));

  useEffect(() => {
    const id = setInterval(() => {
      setTime(getTimeRemaining(eventInfo.eventDate));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const blocks = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <section className="relative isolate py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-cyan-500/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-eco-500/50 to-transparent" />
      </div>
      <div className="container-narrow">
        <div className="relative overflow-hidden border-2 border-brand-cyan-500/60 bg-gradient-to-br from-brand-navy-800 via-brand-navy-900 to-brand-navy-950 p-8 backdrop-blur-xl sm:p-14">
          <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-cyan-500/20 blur-3xl" />
          <div className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-brand-eco-500/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="section-eyebrow">
                <Clock className="h-3.5 w-3.5" />
                Flag-off Countdown
              </span>
              <h2 className="section-heading mt-5 text-balance text-white">
                Race day is{" "}
                <span className="gradient-text">almost here.</span>
              </h2>
              <p className="mt-5 max-w-md text-lg text-white/65 text-pretty">
                Lock in your bib before early-bird pricing ends on 28 Feb 2026.
                Slots are capped and selling out fast.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <RegisterButton label="Secure My Bib" source="countdown" />
                <div className="flex items-center gap-2 rounded-full border border-brand-eco-500/30 bg-brand-eco-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-eco-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-brand-eco-400" />
                  Limited slots left
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3 sm:gap-4">
              {blocks.map((b) => (
                <div
                  key={b.label}
                  className="relative overflow-hidden border-2 border-brand-cyan-500/40 bg-brand-navy-900/90 p-4 text-center backdrop-blur sm:p-6"
                >
                  <div className="font-display text-4xl font-black tabular-nums text-white sm:text-5xl">
                    {String(b.value).padStart(2, "0")}
                  </div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-widest text-brand-cyan-400 sm:text-xs">
                    {b.label}
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-cyan-500/60 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
