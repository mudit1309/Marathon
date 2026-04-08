import Link from "next/link";
import { Home, ChevronLeft } from "lucide-react";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 -z-10 bg-hero-radial" />
      <div className="text-center">
        <div
          className="font-display text-[10rem] font-black leading-none tracking-tighter text-transparent"
          style={{ WebkitTextStroke: "2px rgba(0, 194, 235, 0.4)" }}
        >
          404
        </div>
        <h1 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
          You've run off the course.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-white/60">
          The page you're looking for doesn't exist or has been moved. Let's
          get you back to the start line.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn-primary">
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link href="/race-categories" className="btn-secondary">
            <ChevronLeft className="h-4 w-4" />
            Browse Race Categories
          </Link>
        </div>
      </div>
    </section>
  );
}
