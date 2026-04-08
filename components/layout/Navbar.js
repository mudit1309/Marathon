"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { eventInfo } from "@/lib/data/eventData";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/race-categories", label: "Race Categories" },
  { href: "/route-venue", label: "Route & Venue" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-brand-navy-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        )}
      >
        <nav
          aria-label="Primary navigation"
          className="container-narrow flex h-20 items-center justify-between"
        >
          <Link
            href="/"
            aria-label="Mojo Marathons home"
            className="group flex items-center gap-3"
          >
            <div className="relative h-11 w-11 overflow-hidden rounded-xl bg-gradient-to-br from-brand-cyan-500 to-brand-eco-500 p-[2px] shadow-glow">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-brand-navy-950">
                <span className="font-display text-xl font-black text-white">
                  M
                </span>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-lg font-black leading-none tracking-tight text-white">
                MOJO
              </div>
              <div className="font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-cyan-400">
                Marathons
              </div>
            </div>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                      active
                        ? "text-brand-cyan-400"
                        : "text-white/75 hover:text-white"
                    )}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand-cyan-400 to-brand-eco-400" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={eventInfo.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden md:inline-flex !py-3 !text-xs"
            >
              Register Now
              <ChevronRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-brand-navy-950/90 backdrop-blur-xl transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
        <div
          className={cn(
            "absolute inset-x-4 top-24 rounded-3xl border border-white/10 bg-brand-navy-900/95 p-6 shadow-2xl transition-all duration-300",
            mobileOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          )}
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold",
                      active
                        ? "bg-brand-cyan-500/10 text-brand-cyan-400"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {link.label}
                    <ChevronRight className="h-4 w-4 opacity-50" />
                  </Link>
                </li>
              );
            })}
          </ul>
          <a
            href={eventInfo.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-5 w-full"
          >
            Register Now
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  );
}
