/**
 * Tiny className joiner — works the same as clsx/classnames but zero deps.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function formatDateLong(date) {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateShort(date) {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
