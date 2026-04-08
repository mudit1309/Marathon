import mongoose from "mongoose";

const ContactMessageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    organization: { type: String, trim: true },
    subject: {
      type: String,
      enum: [
        "sponsorship",
        "registration",
        "media",
        "volunteering",
        "partnership",
        "general",
      ],
      default: "general",
    },
    message: { type: String, required: true },
    handled: { type: Boolean, default: false },
    source: { type: String, default: "website" },
  },
  { timestamps: true }
);

export default mongoose.models.ContactMessage ||
  mongoose.model("ContactMessage", ContactMessageSchema);
