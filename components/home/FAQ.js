"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs as defaultFaqs } from "@/lib/data/eventData";
import { cn } from "@/lib/utils";

export default function FAQ({ items = defaultFaqs }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faqs" className="relative py-24">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Got Questions?"
          title="Everything you need to know."
          description="Can't find what you're looking for? Drop us a note and we'll get back within 24 hours."
        />
        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {items.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={item.question}
                className={cn(
                  "overflow-hidden rounded-2xl border transition-all duration-300",
                  isOpen
                    ? "border-brand-cyan-500/40 bg-brand-cyan-500/5"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-bold text-white sm:text-lg">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all",
                      isOpen
                        ? "border-brand-cyan-500 bg-brand-cyan-500/20 text-brand-cyan-400"
                        : "border-white/10 text-white/60"
                    )}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-500",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-white/70">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
          <HelpCircle className="mx-auto h-6 w-6 text-brand-cyan-400" />
          <p className="mt-3 text-sm text-white/70">
            Still have questions?{" "}
            <Link
              href="/contact"
              className="font-semibold text-brand-cyan-400 hover:underline"
            >
              Contact our race team
            </Link>{" "}
            — we're here to help.
          </p>
        </div>
      </div>
    </section>
  );
}
