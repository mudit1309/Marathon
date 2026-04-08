import PageHero from "@/components/ui/PageHero";
import GalleryPreview from "@/components/home/GalleryPreview";

export const metadata = {
  title: "Gallery — Race Day Moments",
  description:
    "Experience Mojo Marathons race day through photos and videos — the start line, crowd energy, finish line moments and medal ceremonies.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments that made Mojo."
        description="From the first flag-off to the last finisher medal — the photos that make race day unforgettable."
      />
      <GalleryPreview />
      <section className="pb-24">
        <div className="container-narrow">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
            <p className="text-white/60">
              More 2025 photos and the 2026 race-day album will be uploaded
              after the event. Follow us on Instagram for live updates.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
