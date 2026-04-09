"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { eventInfo } from "@/lib/data/eventData";

const SUBJECTS = [
  { value: "general", label: "General Query" },
  { value: "registration", label: "Registration Help" },
  { value: "sponsorship", label: "Sponsorship / Brand" },
  { value: "media", label: "Media / Press" },
  { value: "volunteering", label: "Volunteering" },
  { value: "partnership", label: "Community Partner" },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    subject: "general",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function update(key) {
    return (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Submission failed");
      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        organization: "",
        subject: "general",
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Get In Touch"
          title={
            <>
              Let's build something{" "}
              <span className="gradient-text">memorable together.</span>
            </>
          }
          description="Whether you're a runner, a brand, a community or the press — we'd love to hear from you."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Contact info */}
          <aside className="space-y-4 lg:col-span-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden border-2 border-brand-cyan-500/60 shadow-glow skew-cut bg-brand-navy-800">
              <img
                src="/get-in-touch.jpg"
                alt="Get in touch with Mojo Marathons"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy-900/90 via-brand-navy-900/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="font-display text-xs font-bold uppercase tracking-widest text-brand-cyan-400">
                  Get In Touch
                </div>
                <div className="mt-1 font-display text-2xl font-black uppercase leading-tight text-white">
                  Let's talk race day.
                </div>
              </div>
            </div>
            <div className="border-2 border-white/15 bg-brand-navy-900/70 p-6 transition-colors hover:border-brand-cyan-500/60">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center border-2 border-brand-cyan-500/50 bg-brand-cyan-500/15 text-brand-cyan-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white/50">
                    Email
                  </div>
                  <a
                    href={`mailto:${eventInfo.contactEmail}`}
                    className="font-display text-base font-semibold text-white hover:text-brand-cyan-400"
                  >
                    {eventInfo.contactEmail}
                  </a>
                </div>
              </div>
            </div>
            <div className="border-2 border-white/15 bg-brand-navy-900/70 p-6 transition-colors hover:border-brand-cyan-500/60">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center border-2 border-brand-eco-500/50 bg-brand-eco-500/15 text-brand-eco-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white/50">
                    Race-day Helpline
                  </div>
                  <a
                    href={`tel:${eventInfo.contactPhone.replace(/\s/g, "")}`}
                    className="font-display text-base font-semibold text-white hover:text-brand-eco-400"
                  >
                    {eventInfo.contactPhone}
                  </a>
                </div>
              </div>
            </div>
            <div className="border-2 border-white/15 bg-brand-navy-900/70 p-6 transition-colors hover:border-brand-cyan-500/60">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold-500/15 text-brand-gold-400 ring-1 ring-brand-gold-500/30">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white/50">
                    Venue
                  </div>
                  <div className="font-display text-base font-semibold text-white">
                    Noida, Uttar Pradesh
                  </div>
                </div>
              </div>
            </div>
            <div className="border-2 border-brand-cyan-500/40 bg-brand-cyan-500/10 p-5 text-xs text-white/75">
              <strong className="font-display uppercase tracking-wider text-brand-cyan-400">
                Sponsorship enquiries
              </strong>{" "}
              get a dedicated response within 24 hours — just select
              "Sponsorship / Brand" in the form.
            </div>
          </aside>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="relative overflow-hidden border-2 border-brand-cyan-500/50 bg-brand-navy-900/80 p-7 lg:col-span-8 sm:p-10"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" required>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  className="form-input"
                  placeholder="Your name"
                />
              </Field>
              <Field label="Email" required>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  className="form-input"
                  placeholder="you@example.com"
                />
              </Field>
              <Field label="Phone">
                <input
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  className="form-input"
                  placeholder="+91"
                />
              </Field>
              <Field label="Organization">
                <input
                  type="text"
                  value={form.organization}
                  onChange={update("organization")}
                  className="form-input"
                  placeholder="Company / club"
                />
              </Field>
              <Field label="Subject" required className="sm:col-span-2">
                <select
                  value={form.subject}
                  onChange={update("subject")}
                  className="form-input"
                >
                  {SUBJECTS.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Message" required className="sm:col-span-2">
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  className="form-input resize-none"
                  placeholder="Tell us how we can help..."
                />
              </Field>
            </div>

            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-white/50">
                By submitting you agree to our{" "}
                <a href="/privacy" className="underline hover:text-white">
                  privacy policy
                </a>
                .
              </p>
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Message Sent
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>

            {status === "success" && (
              <div className="mt-5 flex items-start gap-2 border-2 border-brand-eco-500/50 bg-brand-eco-500/15 p-4 text-sm font-semibold text-brand-eco-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                Thanks! We'll get back to you within 24 hours.
              </div>
            )}
            {status === "error" && (
              <div className="mt-5 flex items-start gap-2 border-2 border-red-500/50 bg-red-500/15 p-4 text-sm font-semibold text-red-300">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                {error}
              </div>
            )}
          </form>
        </div>
      </div>

      <style jsx>{`
        .form-input {
          width: 100%;
          border: 2px solid rgba(255, 255, 255, 0.15);
          background-color: rgba(5, 5, 5, 0.6);
          padding: 0.95rem 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: white;
          outline: none;
          transition: all 0.2s;
        }
        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.35);
        }
        .form-input:focus {
          border-color: #e11d2e;
          background-color: rgba(5, 5, 5, 0.85);
          box-shadow: 0 0 0 4px rgba(225, 29, 46, 0.25);
        }
        select.form-input {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23E11D2E' stroke-width='3'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          padding-right: 2.5rem;
        }
      `}</style>
    </section>
  );
}

function Field({ label, required, className = "", children }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 inline-block font-display text-xs font-bold uppercase tracking-widest text-brand-cyan-400">
        {label}
        {required && <span className="ml-1 text-brand-eco-400">*</span>}
      </span>
      {children}
    </label>
  );
}
