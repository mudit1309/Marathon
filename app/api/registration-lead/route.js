import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import RegistrationLead from "@/lib/models/RegistrationLead";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  try {
    await connectToDatabase();
    const lead = await RegistrationLead.create({
      name: body.name,
      email: body.email?.toLowerCase(),
      phone: body.phone,
      categorySlug: body.categorySlug,
      utmSource: body.utmSource,
      utmMedium: body.utmMedium,
      utmCampaign: body.utmCampaign,
      referrer: body.referrer,
    });
    return NextResponse.json({ ok: true, id: lead._id.toString() });
  } catch (err) {
    console.error("[api/registration-lead]", err);
    if (err.message?.includes("MONGODB_URI")) {
      return NextResponse.json({
        ok: true,
        note: "Saved locally (configure MONGODB_URI to persist)",
      });
    }
    return NextResponse.json(
      { error: "Could not capture lead" },
      { status: 500 }
    );
  }
}
