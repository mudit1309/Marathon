import mongoose from "mongoose";

const SponsorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    logoUrl: { type: String, required: true },
    website: { type: String },
    tier: {
      type: String,
      enum: [
        "title",
        "powered-by",
        "associate",
        "community",
        "media",
        "supporting",
      ],
      required: true,
      index: true,
    },
    description: { type: String },
    order: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

SponsorSchema.index({ tier: 1, order: 1 });

export default mongoose.models.Sponsor ||
  mongoose.model("Sponsor", SponsorSchema);
