import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import RaceCategory from "@/lib/models/RaceCategory";
import { raceCategories as fallback } from "@/lib/data/eventData";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    await connectToDatabase();
    const items = await RaceCategory.find({ active: true })
      .sort({ order: 1 })
      .lean();
    if (items.length === 0) {
      return NextResponse.json({ categories: fallback, source: "fallback" });
    }
    return NextResponse.json({ categories: items, source: "db" });
  } catch (err) {
    console.error("[api/race-categories]", err);
    return NextResponse.json({ categories: fallback, source: "fallback" });
  }
}
