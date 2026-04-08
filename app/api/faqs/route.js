import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import FAQ from "@/lib/models/FAQ";
import { faqs as fallbackFaqs } from "@/lib/data/eventData";

export const revalidate = 300;

export async function GET() {
  try {
    await connectToDatabase();
    const items = await FAQ.find({ active: true })
      .sort({ category: 1, order: 1 })
      .lean();
    if (items.length === 0) {
      return NextResponse.json({ faqs: fallbackFaqs, source: "fallback" });
    }
    return NextResponse.json({ faqs: items, source: "db" });
  } catch (err) {
    console.error("[api/faqs]", err);
    return NextResponse.json({ faqs: fallbackFaqs, source: "fallback" });
  }
}
