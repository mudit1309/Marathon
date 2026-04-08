/* eslint-disable no-console */
/**
 * Seeds MongoDB with initial event data. Run with: npm run seed
 */
import "dotenv/config";
import mongoose from "mongoose";
import {
  eventInfo,
  raceCategories,
  faqs,
  sponsorsData,
} from "../lib/data/eventData.js";
import EventInfo from "../lib/models/EventInfo.js";
import RaceCategory from "../lib/models/RaceCategory.js";
import FAQ from "../lib/models/FAQ.js";
import Sponsor from "../lib/models/Sponsor.js";

async function run() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("MONGODB_URI is not set in your environment.");
    process.exit(1);
  }

  await mongoose.connect(uri, {
    dbName: process.env.MONGODB_DB || "mojo-marathons",
  });
  console.log("Connected to MongoDB");

  // Event info
  await EventInfo.findOneAndUpdate(
    { key: "primary" },
    {
      key: "primary",
      title: eventInfo.title,
      tagline: eventInfo.tagline,
      description: eventInfo.intro,
      edition: eventInfo.edition,
      eventDate: new Date(eventInfo.eventDate),
      venue: eventInfo.venue,
      stats: eventInfo.stats,
      registrationUrl: eventInfo.registrationUrl,
      socials: eventInfo.socials,
      contactEmail: eventInfo.contactEmail,
      contactPhone: eventInfo.contactPhone,
    },
    { upsert: true, new: true }
  );
  console.log("✓ Event info seeded");

  // Race categories
  for (const [idx, cat] of raceCategories.entries()) {
    await RaceCategory.findOneAndUpdate(
      { slug: cat.slug },
      {
        ...cat,
        fee: Number(String(cat.fee).replace(/[^0-9]/g, "")) || 0,
        order: idx,
        active: true,
      },
      { upsert: true, new: true }
    );
  }
  console.log(`✓ Seeded ${raceCategories.length} race categories`);

  // FAQs
  for (const [idx, faq] of faqs.entries()) {
    await FAQ.findOneAndUpdate(
      { question: faq.question },
      { ...faq, order: idx, active: true },
      { upsert: true, new: true }
    );
  }
  console.log(`✓ Seeded ${faqs.length} FAQs`);

  // Sponsors
  const allSponsors = [
    ...sponsorsData.title,
    ...sponsorsData.poweredBy,
    ...sponsorsData.associate,
    ...sponsorsData.community,
    ...sponsorsData.media,
  ];
  for (const [idx, sponsor] of allSponsors.entries()) {
    await Sponsor.findOneAndUpdate(
      { slug: sponsor.slug },
      { ...sponsor, order: idx, active: true },
      { upsert: true, new: true }
    );
  }
  console.log(`✓ Seeded ${allSponsors.length} sponsors`);

  await mongoose.disconnect();
  console.log("Done.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
