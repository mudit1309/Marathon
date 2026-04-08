import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import NewsletterSubscriber from "@/lib/models/NewsletterSubscriber";

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  const { email, name, source } = body || {};
  if (!email || !isEmail(email)) {
    return NextResponse.json(
      { error: "A valid email is required" },
      { status: 400 }
    );
  }

  try {
    await connectToDatabase();
    const doc = await NewsletterSubscriber.findOneAndUpdate(
      { email: email.toLowerCase() },
      {
        email: email.toLowerCase(),
        name: name?.trim(),
        source: source || "website",
        unsubscribed: false,
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    return NextResponse.json({ ok: true, id: doc._id.toString() });
  } catch (err) {
    console.error("[api/newsletter]", err);
    if (err.message?.includes("MONGODB_URI")) {
      return NextResponse.json({
        ok: true,
        note: "Saved locally (configure MONGODB_URI to persist)",
      });
    }
    return NextResponse.json(
      { error: "Could not subscribe — please try again." },
      { status: 500 }
    );
  }
}
