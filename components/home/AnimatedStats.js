"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Users, Trophy, Flag, Leaf, Globe, Zap } from "lucide-react";

const STATS = [
  { icon: Users, value: 5000, suffix: "+", label: "Expected Participants" },
  { icon: Globe, value: 20000, suffix: "+", label: "Total Reach" },
  { icon: Trophy, value: 5, suffix: "L+", label: "Prize Pool (₹)" },
  { icon: Flag, value: 3, suffix: "", label: "Race Categories" },
  { icon: Leaf, value: 100, suffix: "%", label: "Eco-Certified Race" },
  { icon: Zap, value: 2, suffix: "nd", label: "Edition" },
];

function AnimatedNumber({ value, duration = 2000 }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const startTime = performance.now();
    let frame;
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(start + (value - start) * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return <span ref={ref}>{display.toLocaleString("en-IN")}</span>;
}

export default function AnimatedStats() {
  return (
    <section className="relative py-20">
      <div className="container-narrow">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {STATS.map(({ icon: Icon, value, suffix, label }) => (
            <div
              key={label}
              className="group relative border-2 border-white/10 bg-brand-navy-900/70 p-5 text-center backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-cyan-500/70 hover:bg-brand-navy-900"
            >
              <div className="absolute left-0 top-0 h-1 w-0 bg-brand-cyan-500 transition-all duration-500 group-hover:w-full" />
              <div className="mx-auto inline-flex h-11 w-11 items-center justify-center border-2 border-brand-cyan-500/50 bg-brand-cyan-500/10 text-brand-cyan-400 transition-colors group-hover:bg-brand-cyan-500/25">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-3 font-display text-4xl font-black text-white sm:text-5xl">
                <AnimatedNumber value={value} />
                <span className="text-brand-cyan-400">{suffix}</span>
              </div>
              <div className="mt-1 font-display text-[11px] font-bold uppercase tracking-widest text-white/70">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
