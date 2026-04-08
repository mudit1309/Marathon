import mongoose from "mongoose";

/**
 * Lightweight lead capture — the actual registration happens on the
 * external India Running platform. We only record interest + which
 * category the visitor clicked from, so marketing can retarget.
 */
const RegistrationLeadSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    email: { type: String, trim: true, lowercase: true, index: true },
    phone: { type: String, trim: true },
    categorySlug: { type: String },
    utmSource: { type: String },
    utmMedium: { type: String },
    utmCampaign: { type: String },
    referrer: { type: String },
    convertedAt: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.models.RegistrationLead ||
  mongoose.model("RegistrationLead", RegistrationLeadSchema);
