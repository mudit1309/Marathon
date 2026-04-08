import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Sponsor from "@/lib/models/Sponsor";
import { sponsorsData } from "@/lib/data/eventData";

export const revalidate = 300;

export async function GET() {
  try {
    await connectToDatabase();
    const sponsors = await Sponsor.find({ active: true })
      .sort({ tier: 1, order: 1 })
      .lean();
    if (sponsors.length === 0) {
      return NextResponse.json({ sponsors: sponsorsData, source: "fallback" });
    }
    // Group by tier for the frontend
    const grouped = sponsors.reduce((acc, s) => {
      (acc[s.tier] = acc[s.tier] || []).push(s);
      return acc;
    }, {});
    return NextResponse.json({ sponsors: grouped, source: "db" });
  } catch (err) {
    console.error("[api/sponsors]", err);
    return NextResponse.json({ sponsors: sponsorsData, source: "fallback" });
  }
}
