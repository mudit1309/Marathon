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
              <figure className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all hover:border-brand-cyan-500/40 hover:bg-white/[0.06]">
                <Quote className="h-8 w-8 text-brand-cyan-500/40" />
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
                <figcaption className="mt-4 border-t border-white/10 pt-4">
                  <div className="font-display text-base font-bold text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-white/50">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
