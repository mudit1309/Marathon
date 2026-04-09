import { ShieldCheck, Zap, Gift, Clock, ChevronRight } from "lucide-react";
import RegisterButton from "@/components/ui/RegisterButton";
import { eventInfo } from "@/lib/data/eventData";

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "Secure Checkout",
    description: "Registration powered by India Running — India's trusted race platform.",
  },
  {
    icon: Zap,
    title: "Instant Confirmation",
    description: "E-ticket + BIB details delivered to your inbox in seconds.",
  },
  {
    icon: Gift,
    title: "Early Bird Perks",
    description: "₹200–₹300 off every category until 28 Feb 2026.",
  },
  {
    icon: Clock,
    title: "Easy Transfers",
    description: "Plans changed? Transfer your bib up to 10 days before race day.",
  },
];

export default function RegistrationCTA() {
  return (
    <section id="register" className="relative py-24">
      <div className="container-narrow">
        <div className="relative overflow-hidden border-2 border-brand-cyan-500/50 bg-gradient-to-br from-brand-navy-900 via-brand-navy-800 to-brand-navy-950 p-8 sm:p-14">
          {/* Glow accents */}
          <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-brand-cyan-500/25 blur-[120px]" />
          <div className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-brand-eco-500/20 blur-[120px]" />
          <div className="absolute inset-0 bg-track-stripes opacity-60" />

          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="section-eyebrow">
                <Zap className="h-3.5 w-3.5" />
                Registration Open
              </span>
              <h2 className="section-heading mt-5 text-balance text-white">
                Your bib is waiting at{" "}
                <span className="gradient-text">the start line.</span>
              </h2>
              <p className="mt-5 max-w-xl text-lg text-white/70 text-pretty">
                Secure your spot on India Running — our official registration
                partner. Trusted checkout, instant confirmation and
                transferable bibs.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <RegisterButton
                  label="Register on India Running"
                  source="registration-cta"
                />
                <a
                  href={eventInfo.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  View Pricing
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/50">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-brand-eco-400" />
                  SSL-secured payment
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-cyan-400" />
                  UPI, cards, netbanking
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                {BENEFITS.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="border-2 border-white/15 bg-brand-navy-950/60 p-4 backdrop-blur transition-colors hover:border-brand-cyan-500/60"
                  >
                    <Icon className="h-5 w-5 text-brand-cyan-400" />
                    <div className="mt-3 font-display text-sm font-bold uppercase tracking-wider text-white">
                      {title}
                    </div>
                    <div className="mt-1 text-xs text-white/60">
                      {description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
