import mongoose from "mongoose";

const RaceCategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // e.g. "Half Marathon"
    slug: { type: String, required: true, unique: true, index: true },
    distance: { type: String, required: true }, // "21 KM"
    distanceKm: { type: Number, required: true },
    tagline: { type: String },
    description: { type: String },
    startTime: { type: String },
    difficulty: {
      type: String,
      enum: ["beginner", "intermediate", "advanced", "expert"],
      default: "intermediate",
    },
    minAge: { type: Number, default: 18 },
    timed: { type: Boolean, default: true },
    fee: { type: Number },
    benefits: [{ type: String }],
    color: { type: String }, // css color name for styling
    icon: { type: String },
    order: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.RaceCategory ||
  mongoose.model("RaceCategory", RaceCategorySchema);
