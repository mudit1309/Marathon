import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/home/FAQ";
import ContactSection from "@/components/home/ContactSection";
import { faqs } from "@/lib/data/eventData";

export const metadata = {
  title: "FAQs — Everything about Mojo Marathons",
  description:
    "Answers to the most common questions about Mojo Marathons registration, race day, BIB collection, refunds and safety.",
  alternates: { canonical: "/faqs" },
};

export default function FAQsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow="FAQs"
        title="Frequently asked questions."
        description="Everything you need to know about registration, race day, bib collection and more."
      />
      <FAQ items={faqs} />
      <ContactSection />
    </>
  );
}
