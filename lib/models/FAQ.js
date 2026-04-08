import mongoose from "mongoose";

const FAQSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
    category: {
      type: String,
      enum: [
        "registration",
        "race-day",
        "bib-collection",
        "refunds",
        "safety",
        "venue",
        "general",
      ],
      default: "general",
      index: true,
    },
    order: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

FAQSchema.index({ category: 1, order: 1 });

export default mongoose.models.FAQ || mongoose.model("FAQ", FAQSchema);
