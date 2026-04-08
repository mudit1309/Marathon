import Link from "next/link";
import { MapPin, Flag, Droplets, Heart, Camera, Music2, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const HIGHLIGHTS = [
  {
    icon: Flag,
    title: "Championship Course",
    description:
      "A certified, scenic route through Noida's signature skyline with elevation-friendly loops.",
  },
  {
    icon: Droplets,
    title: "Hydration Every 2.5 KM",
    description:
      "Water, electrolytes and energy gels at every station — fully stocked throughout the race.",
  },
  {
    icon: Heart,
    title: "Medical Support",
    description:
      "Ambulances, trained paramedics and a finish-line medical tent with physio partners.",
  },
  {
    icon: Camera,
    title: "Course Photography",
    description:
      "Free race-day photos for every runner, AI-tagged to your bib and delivered same-day.",
  },
  {
    icon: Music2,
    title: "Live Cheer Zones",
    description:
      "DJs, drum circles, family cheer stands and local community squads along the route.",
  },
  {
    icon: MapPin,
    title: "Race Village",
    description:
      "Food trucks, partner activations, kids corner and a recovery zone — open all morning.",
  },
];

export default function RouteVenue() {
  return (
    <section id="route" className="relative py-24">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Route & Venue"
          title="A course engineered for great race days."
          description="Start lines that flow, elevation that rewards, hydration where you need it, and cheer zones that push you through every kilometre."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Map visual */}
          <Reveal className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-brand-navy-800 via-brand-navy-900 to-brand-navy-950 p-6 shadow-premium">
              <div className="absolute inset-0 bg-circuit-pattern opacity-40" />

              {/* SVG fake route */}
              <div className="relative aspect-[4/3] w-full">
                <svg
                  viewBox="0 0 400 300"
                  className="h-full w-full"
                  role="img"
                  aria-label="Marathon route map preview"
                >
                  <defs>
                    <linearGradient id="route-gradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#00C2EB" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* City grid */}
                  <g stroke="rgba(255,255,255,0.05)" strokeWidth="0.5">
                    {[...Array(12)].map((_, i) => (
                      <line key={`v-${i}`} x1={i * 40} y1="0" x2={i * 40} y2="300" />
                    ))}
                    {[...Array(10)].map((_, i) => (
                      <line key={`h-${i}`} x1="0" y1={i * 40} x2="400" y2={i * 40} />
                    ))}
                  </g>

                  {/* Route path */}
                  <path
                    d="M 40 250 Q 80 180 140 200 T 240 160 Q 290 100 340 140 T 360 60"
                    fill="none"
                    stroke="url(#route-gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    filter="url(#glow)"
                  />

                  {/* Hydration markers */}
                  {[
                    { x: 90, y: 215 },
                    { x: 170, y: 190 },
                    { x: 240, y: 160 },
                    { x: 310, y: 120 },
                  ].map((p, i) => (
                    <g key={i}>
                      <circle cx={p.x} cy={p.y} r="5" fill="#00C2EB" />
                      <circle cx={p.x} cy={p.y} r="8" fill="none" stroke="#00C2EB" strokeWidth="1" opacity="0.5" />
                    </g>
                  ))}

                  {/* Start & finish */}
                  <g>
                    <circle cx="40" cy="250" r="8" fill="#10B981" />
                    <text x="52" y="255" fill="#fff" fontSize="12" fontWeight="bold">
                      START
                    </text>
                  </g>
                  <g>
                    <circle cx="360" cy="60" r="8" fill="#FFD166" />
                    <text x="310" y="55" fill="#fff" fontSize="12" fontWeight="bold">
                      FINISH
                    </text>
                  </g>
                </svg>
              </div>

              <div className="relative mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-white/60">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-eco-500" />
                  Start
                  <span className="mx-2 h-2 w-2 rounded-full bg-brand-cyan-500" />
                  Hydration Stations
                  <span className="mx-2 h-2 w-2 rounded-full bg-brand-gold-500" />
                  Finish
                </div>
                <span className="text-[10px] uppercase tracking-wider text-white/40">
                  Illustrative route · Official map released April 2026
                </span>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-5">
            <div className="glass-card p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-brand-cyan-400">
                <MapPin className="h-4 w-4" />
                Venue
              </div>
              <div className="mt-2 font-display text-2xl font-bold text-white">
                Noida, Uttar Pradesh
              </div>
              <div className="text-sm text-white/60">
                (Exact venue announcement: March 2026)
              </div>
              <Link
                href="/route-venue"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan-400 hover:underline"
              >
                View full route guide
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {HIGHLIGHTS.slice(0, 4).map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <Icon className="h-5 w-5 text-brand-cyan-400" />
                  <div className="mt-2 text-sm font-bold text-white">{title}</div>
                  <div className="mt-1 text-xs text-white/60">{description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
