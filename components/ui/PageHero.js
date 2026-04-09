import { cn } from "@/lib/utils";

export default function PageHero({ eyebrow, title, description, children, className }) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden pt-36 pb-16",
        className
      )}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="absolute inset-0 bg-track-stripes opacity-50" />
        <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-cyan-500/25 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-brand-eco-500/15 blur-3xl" />
      </div>
      <div className="container-narrow text-center">
        {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
        <h1 className="mt-5 font-display text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/65 text-pretty">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
