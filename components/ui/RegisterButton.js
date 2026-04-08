import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { eventInfo } from "@/lib/data/eventData";

/**
 * Primary registration CTA, reused across the site.
 * Points at India Running with a clear visual hierarchy and tracking params
 * so we can attribute conversions from different sections.
 */
export default function RegisterButton({
  label = "Register Now",
  source = "generic",
  category,
  className,
  variant = "primary",
  showArrow = true,
}) {
  const url = new URL(eventInfo.registrationUrl);
  url.searchParams.set("utm_source", "mojomarathons.com");
  url.searchParams.set("utm_medium", "web");
  url.searchParams.set("utm_campaign", source);
  if (category) url.searchParams.set("category", category);

  const classes =
    variant === "primary"
      ? "btn-primary"
      : variant === "secondary"
      ? "btn-secondary"
      : "btn-ghost";

  return (
    <Link
      href={url.toString()}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(classes, className)}
    >
      {label}
      {showArrow && <ChevronRight className="h-4 w-4" />}
    </Link>
  );
}
