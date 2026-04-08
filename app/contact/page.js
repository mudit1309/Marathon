import PageHero from "@/components/ui/PageHero";
import ContactSection from "@/components/home/ContactSection";

export const metadata = {
  title: "Contact — Mojo Marathons",
  description:
    "Get in touch with the Mojo Marathons team for registration help, sponsorship enquiries, media requests or volunteering opportunities.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the Mojo team."
        description="Race-day help, sponsorship packages, media enquiries and community partnerships — we're here for all of it."
      />
      <ContactSection />
    </>
  );
}
