import Link from "next/link";
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  MapPin,
  Mail,
  Phone,
  Leaf,
} from "lucide-react";
import { eventInfo } from "@/lib/data/eventData";
import NewsletterForm from "@/components/marketing/NewsletterForm";

const QUICK_LINKS = [
  { href: "/about", label: "About Event" },
  { href: "/race-categories", label: "Race Categories" },
  { href: "/route-venue", label: "Route & Venue" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/gallery", label: "Gallery" },
];

const SUPPORT_LINKS = [
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact Us" },
  { href: "/registration", label: "Registration" },
  { href: "/sponsors#become-sponsor", label: "Become a Sponsor" },
];

const SOCIAL_ICONS = {
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  youtube: Youtube,
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-brand-navy-950">
      <div className="pointer-events-none absolute inset-0 bg-circuit-pattern opacity-40" />
      <div className="pointer-events-none absolute inset-0 circuit-bg" />

      <div className="container-narrow relative z-10 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-cyan-500 to-brand-eco-500 p-[2px] shadow-glow">
                <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-brand-navy-950">
                  <span className="font-display text-2xl font-black text-white">
                    M
                  </span>
                </div>
              </div>
              <div>
                <div className="font-display text-2xl font-black text-white">
                  MOJO MARATHONS
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-cyan-400">
                  Noida · Eco-Cyber Edition
                </div>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {eventInfo.intro}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-eco-500/30 bg-brand-eco-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-eco-400">
              <Leaf className="h-4 w-4" />
              Eco-Certified Race Day
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                Event
              </h3>
              <ul className="mt-5 space-y-3">
                {QUICK_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/60 transition-colors hover:text-brand-cyan-400"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                Support
              </h3>
              <ul className="mt-5 space-y-3">
                {SUPPORT_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/60 transition-colors hover:text-brand-cyan-400"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                Contact
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-white/60">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan-400" />
                  <span>{eventInfo.venue.name}, Noida</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan-400" />
                  <a
                    href={`mailto:${eventInfo.contactEmail}`}
                    className="hover:text-brand-cyan-400"
                  >
                    {eventInfo.contactEmail}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan-400" />
                  <a
                    href={`tel:${eventInfo.contactPhone.replace(/\s/g, "")}`}
                    className="hover:text-brand-cyan-400"
                  >
                    {eventInfo.contactPhone}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Stay in the loop
            </h3>
            <p className="mt-3 text-sm text-white/60">
              Early bird drops, route reveals and training tips — straight to
              your inbox.
            </p>
            <NewsletterForm className="mt-5" />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Mojo Marathons. All rights reserved. ·
            Built with performance, technology and sustainability.
          </p>
          <div className="flex items-center gap-3">
            {Object.entries(eventInfo.socials).map(([key, url]) => {
              const Icon = SOCIAL_ICONS[key];
              if (!Icon) return null;
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Mojo Marathons on ${key}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:border-brand-cyan-500/50 hover:bg-brand-cyan-500/10 hover:text-brand-cyan-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
