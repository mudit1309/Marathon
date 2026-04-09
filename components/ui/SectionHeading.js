import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  children,
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {eyebrow && <span className="section-eyebrow mb-5">{eyebrow}</span>}
      {title && (
        <h2 className="section-heading mt-5 text-balance text-white">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-white/65 text-pretty">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
