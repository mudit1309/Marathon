import mongoose from "mongoose";

/**
 * A single-document collection holding the marathon's high-level data.
 * Use `EventInfo.findOne()` or upsert with a fixed key.
 */
const EventInfoSchema = new mongoose.Schema(
  {
    key: { type: String, default: "primary", unique: true, index: true },
    title: { type: String, required: true },
    tagline: { type: String },
    description: { type: String },
    edition: { type: String, default: "2nd Edition" },
    eventDate: { type: Date, required: true },
    registrationDeadline: { type: Date },
    earlyBirdDeadline: { type: Date },
    venue: {
      name: { type: String },
      city: { type: String, default: "Noida" },
      state: { type: String, default: "Uttar Pradesh" },
      country: { type: String, default: "India" },
      lat: { type: Number },
      lng: { type: Number },
      mapUrl: { type: String },
    },
    stats: {
      expectedParticipants: { type: Number, default: 5000 },
      totalReach: { type: Number, default: 20000 },
      prizePool: { type: String, default: "₹5,00,000+" },
      categories: { type: Number, default: 3 },
      sponsors: { type: Number, default: 25 },
    },
    registrationUrl: { type: String },
    socials: {
      instagram: { type: String },
      facebook: { type: String },
      twitter: { type: String },
      linkedin: { type: String },
      youtube: { type: String },
    },
    contactEmail: { type: String },
    contactPhone: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.EventInfo ||
  mongoose.model("EventInfo", EventInfoSchema);
