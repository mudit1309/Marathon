import mongoose from "mongoose";

const GalleryItemSchema = new mongoose.Schema(
  {
    title: { type: String },
    caption: { type: String },
    imageUrl: { type: String, required: true },
    thumbnailUrl: { type: String },
    type: {
      type: String,
      enum: ["photo", "video"],
      default: "photo",
    },
    tags: [{ type: String }],
    edition: { type: String }, // e.g. "2025"
    order: { type: Number, default: 0 },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.GalleryItem ||
  mongoose.model("GalleryItem", GalleryItemSchema);
