import Link from "next/link";
import { Camera, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const PLACEHOLDERS = [
  { label: "Start Line", gradient: "from-brand-cyan-500/30 to-brand-navy-900" },
  { label: "The Crowd", gradient: "from-brand-eco-500/30 to-brand-navy-900" },
  { label: "Hydration Stop", gradient: "from-brand-cyan-500/20 to-brand-eco-500/20" },
  { label: "Pacer Squad", gradient: "from-brand-gold-500/25 to-brand-navy-900" },
  { label: "Finish Line", gradient: "from-brand-eco-500/30 to-brand-cyan-500/20" },
  { label: "Medal Moment", gradient: "from-brand-gold-500/30 to-brand-cyan-500/20" },
  { label: "Community Zone", gradient: "from-brand-cyan-500/25 to-brand-eco-500/25" },
  { label: "Eco Awards", gradient: "from-brand-eco-500/30 to-brand-navy-900" },
];

export default function GalleryPreview() {
  return (
    <section id="gallery" className="relative py-24">
      <div className="container-narrow">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="Race-Day Vibe"
            title="Live the atmosphere."
            description="A snapshot from the 2025 edition — crowd energy, finish-line emotion, eco-awards and everything in between."
            className="!max-w-xl"
          />
          <Link
            href="/gallery"
            className="btn-secondary self-end !py-3 !text-xs"
          >
            View Full Gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {PLACEHOLDERS.map((p, i) => (
            <div
              key={p.label}
              className={`group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${p.gradient} transition-all duration-500 hover:-translate-y-1 hover:border-brand-cyan-500/50 hover:shadow-glow ${
                i === 0 || i === 5 ? "sm:col-span-2 sm:aspect-[2/1]" : ""
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Camera className="h-10 w-10 text-white/30 transition-all group-hover:scale-110 group-hover:text-white/60" />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy-950 via-brand-navy-950/60 to-transparent p-4">
                <div className="text-xs font-bold uppercase tracking-wider text-white">
                  {p.label}
                </div>
                <div className="text-[10px] text-white/50">Mojo 2025</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
