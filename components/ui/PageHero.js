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
        <div className="absolute inset-0 bg-circuit-pattern opacity-40" />
        <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-cyan-500/20 blur-3xl" />
      </div>
      <div className="container-narrow text-center">
        {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
        <h1 className="mt-5 font-display text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-6xl">
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
