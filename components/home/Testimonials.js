import { Quote, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/lib/data/eventData";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Stories From The Finish Line"
          title="Real runners. Real sponsors. Real moments."
          description="Hear from the people who've already been part of Mojo Marathons."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="group relative h-full overflow-hidden border-2 border-white/10 bg-brand-navy-900/60 p-7 transition-all hover:-translate-y-1 hover:border-brand-cyan-500/70 hover:bg-brand-navy-900/90">
                <div className="absolute left-0 top-0 h-1 w-0 bg-brand-cyan-500 transition-all duration-500 group-hover:w-full" />
                <Quote className="h-10 w-10 text-brand-cyan-500/50" />
                <blockquote className="mt-4 text-base leading-relaxed text-white/80">
                  “{t.quote}”
                </blockquote>
                <div className="mt-6 flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-4 w-4 fill-brand-gold-500 text-brand-gold-500"
                    />
                  ))}
                </div>
                <figcaption className="mt-4 border-t-2 border-white/10 pt-4">
                  <div className="font-display text-base font-bold uppercase tracking-wide text-white">
                    {t.name}
                  </div>
                  <div className="font-display text-xs font-semibold uppercase tracking-wider text-brand-cyan-400">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
