/**
 * Static fallback content for the marathon website.
 * These are the defaults used when MongoDB is not yet seeded or during build.
 * Admin edits in the DB will override these at runtime.
 */

export const eventInfo = {
  title: "Mojo Marathons",
  subtitle: "Noida's Eco-Cyber Half Marathon",
  tagline: "Run the Future. Protect the Planet.",
  intro:
    "Mojo Marathons is Noida's most forward-looking running event — where serious athletes, tech-native youth, corporate teams and families unite for a race built on performance, technology and sustainability.",
  edition: "2nd Edition",
  eventDate: "2026-05-17T05:00:00+05:30",
  eventDateDisplay: "Sunday, 17 May 2026",
  flagOff: "5:00 AM",
  registrationDeadline: "2026-05-10T23:59:59+05:30",
  earlyBirdDeadline: "2026-02-28T23:59:59+05:30",
  venue: {
    name: "Noida (Venue TBA)",
    city: "Noida",
    state: "Uttar Pradesh",
    country: "India",
    lat: 28.5355,
    lng: 77.391,
    mapUrl: "https://maps.google.com/?q=Noida,India",
  },
  stats: {
    expectedParticipants: 5000,
    totalReach: 20000,
    prizePool: "₹5,00,000+",
    categories: 3,
    editions: 2,
    corporatePartners: 100,
  },
  registrationUrl:
    "https://registrations.indiarunning.com/noida_warrior_run_2nd_edition_46449",
  socials: {
    instagram: "https://instagram.com/mojomarathons",
    facebook: "https://facebook.com/mojomarathons",
    twitter: "https://twitter.com/mojomarathons",
    linkedin: "https://linkedin.com/company/mojomarathons",
    youtube: "https://youtube.com/@mojomarathons",
  },
  contactEmail: "hello@mojomarathons.com",
  contactPhone: "+91 98100 00000",
};

export const raceCategories = [
  {
    slug: "half-marathon-21k",
    name: "Half Marathon",
    distance: "21 KM",
    distanceKm: 21.0975,
    tagline: "For the dedicated athlete",
    description:
      "A fully timed, championship-grade 21.0975 KM course through Noida's signature skyline — chip timing, official splits and a coveted finisher medal.",
    startTime: "5:00 AM",
    difficulty: "advanced",
    minAge: 18,
    timed: true,
    fee: "₹1,499",
    earlyBird: "₹1,199",
    benefits: [
      "Chip timing + official certificate",
      "Finisher medal & premium tee",
      "Hydration every 2.5 km",
      "Course photography",
      "Dedicated pacers",
      "Post-race recovery zone",
    ],
    color: "cyan",
    icon: "Trophy",
  },
  {
    slug: "10k-run",
    name: "10K Run",
    distance: "10 KM",
    distanceKm: 10,
    tagline: "For the ambitious challenger",
    description:
      "A timed 10K for runners chasing their next personal best. Challenging enough for intermediates, rewarding for all.",
    startTime: "5:30 AM",
    difficulty: "intermediate",
    minAge: 16,
    timed: true,
    fee: "₹999",
    earlyBird: "₹799",
    benefits: [
      "Chip timing + certificate",
      "Finisher medal",
      "Recycled-plastic event tee",
      "Hydration stations",
      "Pacers available",
      "Post-race breakfast",
    ],
    color: "eco",
    icon: "Zap",
  },
  {
    slug: "5k-fun-run",
    name: "5K Fun Run",
    distance: "5 KM",
    distanceKm: 5,
    tagline: "For families & first-timers",
    description:
      "A non-timed, celebratory 5K for first-time runners, families and corporate teams. The vibe is the reward.",
    startTime: "6:00 AM",
    difficulty: "beginner",
    minAge: 8,
    timed: false,
    fee: "₹699",
    earlyBird: "₹549",
    benefits: [
      "Participation medal",
      "Recycled event tee",
      "Family-friendly route",
      "Entertainment & music",
      "Photo zones",
      "Kids corner at venue",
    ],
    color: "gold",
    icon: "Heart",
  },
];

export const whyParticipate = [
  {
    icon: "Trophy",
    title: "Championship Experience",
    description:
      "Chip-timed certified courses, professional pacers and race-day logistics built to international standards.",
  },
  {
    icon: "Leaf",
    title: "Eco-Conscious DNA",
    description:
      "Recycled-plastic tees, biodegradable bibs and seeded plantable cards. Every finisher leaves the planet a little better.",
  },
  {
    icon: "Users",
    title: "Community Energy",
    description:
      "5,000+ runners from Delhi NCR, corporate teams, running clubs and families — a celebration of movement.",
  },
  {
    icon: "HeartPulse",
    title: "Health & Wellness",
    description:
      "On-course hydration, medical support and a post-race recovery zone with physio, nutrition and wellness partners.",
  },
  {
    icon: "Medal",
    title: "Recognition",
    description:
      "Finisher medals, category podiums, cash prizes and official timing certificates for every timed runner.",
  },
  {
    icon: "Sparkles",
    title: "Race-Day Festival",
    description:
      "Live music, food trucks, partner activations, kids zone and an electric finish-line atmosphere.",
  },
];

export const sponsorsData = {
  title: [
    {
      name: "Eco-Cyber Corporate",
      slug: "eco-cyber-corporate",
      logoUrl: "/sponsors/eco-cyber.svg",
      website: "https://example.com",
      tier: "title",
    },
  ],
  poweredBy: [
    {
      name: "NoidaTech",
      slug: "noida-tech",
      logoUrl: "/sponsors/noida-tech.svg",
      website: "https://example.com",
      tier: "powered-by",
    },
    {
      name: "GreenFuture",
      slug: "green-future",
      logoUrl: "/sponsors/green-future.svg",
      website: "https://example.com",
      tier: "powered-by",
    },
  ],
  associate: [
    { name: "RunHydra", slug: "runhydra", logoUrl: "/sponsors/runhydra.svg", tier: "associate" },
    { name: "PaceFuel", slug: "pacefuel", logoUrl: "/sponsors/pacefuel.svg", tier: "associate" },
    { name: "VoltWear", slug: "voltwear", logoUrl: "/sponsors/voltwear.svg", tier: "associate" },
    { name: "TerraGear", slug: "terragear", logoUrl: "/sponsors/terragear.svg", tier: "associate" },
  ],
  community: [
    { name: "NCR Runners", slug: "ncr-runners", logoUrl: "/sponsors/ncr-runners.svg", tier: "community" },
    { name: "Delhi Striders", slug: "delhi-striders", logoUrl: "/sponsors/delhi-striders.svg", tier: "community" },
    { name: "Yamuna Run Club", slug: "yamuna-run-club", logoUrl: "/sponsors/yamuna-run.svg", tier: "community" },
  ],
  media: [
    { name: "Runners Daily", slug: "runners-daily", logoUrl: "/sponsors/runners-daily.svg", tier: "media" },
    { name: "NCR Times", slug: "ncr-times", logoUrl: "/sponsors/ncr-times.svg", tier: "media" },
    { name: "FitCast", slug: "fitcast", logoUrl: "/sponsors/fitcast.svg", tier: "media" },
  ],
};

export const audienceSegments = [
  {
    icon: "Briefcase",
    title: "Corporate Professionals",
    description:
      "IT workforce, decision-makers and high-income earners. Build team morale, wellness culture and corporate brand presence.",
    cta: "Book a corporate slab",
    target: "corporate",
  },
  {
    icon: "GraduationCap",
    title: "Urban Youth & Students",
    description:
      "Tech-native, socially conscious, early adopters. The next generation showing up for sustainability and fitness.",
    cta: "Grab student pricing",
    target: "students",
  },
  {
    icon: "Dumbbell",
    title: "Fitness Community",
    description:
      "Dedicated, influential and brand-loyal running clubs. The backbone of every great race day.",
    cta: "Bring your running club",
    target: "community",
  },
  {
    icon: "Users",
    title: "Families & Spectators",
    description:
      "Community-oriented amateur runners and supporters. A 5K built for shared, celebratory moments.",
    cta: "Run together",
    target: "families",
  },
];

export const ecoHighlights = [
  {
    icon: "Shirt",
    title: "Recycled Performance Gear",
    description:
      "Event T-shirts made from recycled plastic. Performance fabric with a conscience.",
  },
  {
    icon: "Sprout",
    title: "Zero-Waste Initiatives",
    description:
      "Biodegradable race bibs and seeded, plantable 'Thank You' cards that grow into flowers.",
  },
  {
    icon: "Recycle",
    title: "Responsible Operations",
    description:
      "Minimal plastic across the race village with compost, recycling and landfill segregation at every touchpoint.",
  },
];

export const brandVisibilityPhases = [
  {
    phase: "Pre-Event",
    title: "Building Momentum",
    icon: "Megaphone",
    bullets: [
      "Targeted campaigns on Instagram, Facebook & Google Ads",
      "Influencer collaborations with NCR fitness creators",
      "Corporate outreach to 100+ companies",
    ],
  },
  {
    phase: "Event Day",
    title: "Maximum Exposure",
    icon: "Flag",
    bullets: [
      "On-ground branding across the race village",
      "Jersey and finish-arch logo placement",
      "Main-stage mentions and live MC shout-outs",
    ],
  },
  {
    phase: "Post-Event",
    title: "Lasting Value",
    icon: "Film",
    bullets: [
      "Media & PR coverage across local & digital outlets",
      "Official after-movie and reels package",
      "Digital impact report for every sponsor",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Mojo Marathons brought the cleanest race-day logistics I've seen in NCR. The eco-angle made me bring my whole family back for 2026.",
    name: "Arjun Mehta",
    role: "Half Marathon Finisher, 2025",
  },
  {
    quote:
      "As a sponsor, the post-event impact report was genuinely useful — real reach numbers, real ROI. Rare in this space.",
    name: "Priya Ranganathan",
    role: "Brand Head, Partner Brand",
  },
  {
    quote:
      "Our 40-person corporate team had the time of their lives. Team photos, finish-line hugs, and a wellness story that lasted all quarter.",
    name: "Rohan Verma",
    role: "HR Director, NoidaTech",
  },
];

export const faqs = [
  {
    category: "registration",
    question: "How do I register for Mojo Marathons 2026?",
    answer:
      "Click any 'Register Now' button on this site — you'll be taken to our official registration partner, India Running, where you can pick your category, fill out your details and pay securely.",
  },
  {
    category: "registration",
    question: "Is there an early bird discount?",
    answer:
      "Yes. Early bird pricing is live until 28 February 2026 and offers ₹200–₹300 off every category. Slots are capped — register early to lock it in.",
  },
  {
    category: "race-day",
    question: "What time does the race start?",
    answer:
      "The 21K Half Marathon flags off at 5:00 AM, the 10K at 5:30 AM and the 5K Fun Run at 6:00 AM. Please arrive at least 60 minutes before your start time.",
  },
  {
    category: "bib-collection",
    question: "When and where can I collect my bib?",
    answer:
      "Bib collection will happen 2 days before race day at a central Noida location (exact venue shared by email 10 days prior). Bring a valid photo ID and your e-ticket.",
  },
  {
    category: "refunds",
    question: "Can I get a refund if I can't run?",
    answer:
      "Registrations are non-refundable but transferable to another runner up to 10 days before race day. Contact our team for a transfer request.",
  },
  {
    category: "safety",
    question: "What safety and medical support will be on the course?",
    answer:
      "The course has medical aid stations every 2.5 km, ambulances on standby, trained paramedics and a dedicated finish-line medical tent with physiotherapists.",
  },
  {
    category: "venue",
    question: "Is there parking at the venue?",
    answer:
      "Yes, free parking is available near the race village. We strongly encourage carpooling and public transport — it's part of our eco-commitment.",
  },
  {
    category: "general",
    question: "Can kids participate?",
    answer:
      "Absolutely. The 5K Fun Run welcomes runners from age 8 (accompanied by a guardian). There's also a dedicated Kids Corner at the venue.",
  },
];
