import { Barlow, Bebas_Neue } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { eventInfo } from "@/lib/data/eventData";

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mojomarathons.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Mojo Marathons 2026 | Noida's Eco-Cyber Half Marathon | 17 May 2026",
    template: "%s | Mojo Marathons 2026",
  },
  description:
    "Join Mojo Marathons 2026 — Noida's premier eco-cyber half marathon on 17 May 2026. 21K, 10K & 5K categories. 5,000+ runners, sustainable race-day, championship experience. Register now.",
  keywords: [
    "Mojo Marathons",
    "Noida Marathon 2026",
    "Half Marathon Noida",
    "21K Noida",
    "10K Noida",
    "Eco Marathon India",
    "Delhi NCR Marathon",
    "Noida Running Event",
    "Sustainable Marathon",
    "Corporate Running Event Noida",
    "Fitness events NCR",
    "India Running Noida",
  ],
  authors: [{ name: "Mojo Marathons" }],
  creator: "Mojo Marathons",
  publisher: "Mojo Marathons",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Mojo Marathons",
    title: "Mojo Marathons 2026 | Noida's Eco-Cyber Half Marathon",
    description:
      "Noida's premier half marathon on 17 May 2026. Built on performance, technology and sustainability. Register for 21K, 10K or 5K.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mojo Marathons 2026 — Noida's Eco-Cyber Half Marathon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mojo Marathons 2026 | Noida's Eco-Cyber Half Marathon",
    description:
      "Join 5,000+ runners on 17 May 2026 in Noida. 21K, 10K & 5K categories. Register now.",
    images: ["/og-image.jpg"],
    creator: "@mojomarathons",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
  },
  category: "sports",
};

export const viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "Mojo Marathons 2026",
    description:
      "Noida's premier eco-cyber half marathon — 21K, 10K and 5K categories with chip timing, sustainable race-day operations and 5,000+ participants.",
    startDate: eventInfo.eventDate,
    endDate: eventInfo.eventDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: eventInfo.venue.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: eventInfo.venue.city,
        addressRegion: eventInfo.venue.state,
        addressCountry: eventInfo.venue.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: eventInfo.venue.lat,
        longitude: eventInfo.venue.lng,
      },
    },
    image: [`${siteUrl}/og-image.jpg`],
    offers: {
      "@type": "Offer",
      url: eventInfo.registrationUrl,
      availability: "https://schema.org/InStock",
      price: "699",
      priceCurrency: "INR",
      validFrom: "2025-10-01T00:00:00+05:30",
    },
    organizer: {
      "@type": "Organization",
      name: "Mojo Marathons",
      url: siteUrl,
    },
    performer: {
      "@type": "PerformingGroup",
      name: "Mojo Marathons Participants",
    },
  };

  return (
    <html
      lang="en"
      className={`${barlow.variable} ${bebasNeue.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body className="min-h-screen antialiased">
        <Script
          id="event-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
