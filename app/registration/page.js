import PageHero from "@/components/ui/PageHero";
import RegisterButton from "@/components/ui/RegisterButton";
import { ShieldCheck, Zap, Gift, Clock, ChevronRight, ExternalLink } from "lucide-react";
import { eventInfo, raceCategories } from "@/lib/data/eventData";
import Link from "next/link";

export const metadata = {
  title: "Register — Mojo Marathons 2026",
  description:
    "Register for Mojo Marathons 2026 on India Running. Secure checkout, instant confirmation, early bird pricing until 28 Feb 2026.",
  alternates: { canonical: "/registration" },
};

const STEPS = [
  {
    num: "01",
    title: "Pick your race",
    description: "21K Half Marathon, 10K Run or 5K Fun Run.",
  },
  {
    num: "02",
    title: "Register on India Running",
    description:
      "You'll be taken to our trusted partner's secure checkout.",
  },
  {
    num: "03",
    title: "Get instant confirmation",
    description: "E-ticket delivered to your inbox in seconds.",
  },
  {
    num: "04",
    title: "Collect your BIB",
    description: "Pick up at the central expo 2 days before race day.",
  },
];

export default function RegistrationPage() {
  return (
    <>
      <PageHero
        eyebrow="Registration"
        title="Claim your spot at the start line."
        description="Registration is powered by India Running — India's most trusted race registration platform. Secure, quick and mobile-first."
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          <RegisterButton label="Register Now" source="registration-page" />
          <a
            href={eventInfo.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Open in India Running
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </PageHero>

      {/* Steps */}
      <section className="py-20">
        <div className="container-narrow">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div key={step.num} className="card-premium p-6">
                <div className="font-display text-5xl font-black text-brand-cyan-500/30">
                  {step.num}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-white/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing table */}
      <section className="py-20">
        <div className="container-narrow">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">Pricing</span>
            <h2 className="mt-5 font-display text-4xl font-black text-white sm:text-5xl">
              Early bird pricing is <span className="gradient-text">live.</span>
            </h2>
            <p className="mt-4 text-white/65">
              Register before 28 Feb 2026 to lock in the lowest price of the
              season.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-xs uppercase tracking-wider text-white/60">
                <tr>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Start Time</th>
                  <th className="px-6 py-4">Early Bird</th>
                  <th className="px-6 py-4">Regular</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 bg-white/[0.02]">
                {raceCategories.map((cat) => (
                  <tr key={cat.slug} className="transition-colors hover:bg-white/[0.04]">
                    <td className="px-6 py-5">
                      <div className="font-display text-lg font-bold text-white">
                        {cat.name}
                      </div>
                      <div className="text-xs text-white/50">{cat.distance}</div>
                    </td>
                    <td className="px-6 py-5 text-white/70">{cat.startTime}</td>
                    <td className="px-6 py-5">
                      <div className="font-display text-lg font-bold text-brand-eco-400">
                        {cat.earlyBird}
                      </div>
                      <div className="text-[10px] uppercase text-white/40">
                        till 28 Feb
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="font-display text-lg font-bold text-white">
                        {cat.fee}
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <RegisterButton
                        label="Join"
                        source={`pricing-${cat.slug}`}
                        category={cat.slug}
                        className="!px-5 !py-2.5 !text-[10px]"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center text-sm text-white/60">
            Registering a team of 10 or more?{" "}
            <Link
              href="/contact?subject=corporate"
              className="font-semibold text-brand-cyan-400 hover:underline"
            >
              Contact us for corporate slabs
              <ChevronRight className="inline h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust markers */}
      <section className="py-20">
        <div className="container-narrow grid gap-5 md:grid-cols-4">
          {[
            { icon: ShieldCheck, title: "SSL Secured" },
            { icon: Zap, title: "Instant Confirmation" },
            { icon: Gift, title: "Early Bird Saves" },
            { icon: Clock, title: "Easy Transfers" },
          ].map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <Icon className="h-6 w-6 text-brand-cyan-400" />
              <span className="font-display text-sm font-bold text-white">
                {title}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
