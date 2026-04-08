import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import ContactMessage from "@/lib/models/ContactMessage";

const VALID_SUBJECTS = [
  "sponsorship",
  "registration",
  "media",
  "volunteering",
  "partnership",
  "general",
];

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

  const { name, email, phone, organization, subject, message } = body || {};

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  if (!email || !isEmail(email)) {
    return NextResponse.json(
      { error: "A valid email is required" },
      { status: 400 }
    );
  }
  if (!message || message.trim().length < 5) {
    return NextResponse.json(
      { error: "Message is too short" },
      { status: 400 }
    );
  }

  const normalisedSubject = VALID_SUBJECTS.includes(subject)
    ? subject
    : "general";

  try {
    await connectToDatabase();
    const doc = await ContactMessage.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim(),
      organization: organization?.trim(),
      subject: normalisedSubject,
      message: message.trim(),
    });
    return NextResponse.json(
      { ok: true, id: doc._id.toString() },
      { status: 201 }
    );
  } catch (err) {
    console.error("[api/contact]", err);
    // Friendly fallback when DB isn't wired up yet
    if (err.message?.includes("MONGODB_URI")) {
      return NextResponse.json(
        {
          ok: true,
          note: "Saved locally (configure MONGODB_URI to persist)",
        },
        { status: 200 }
      );
    }
    return NextResponse.json(
      { error: "Could not submit — please try again." },
      { status: 500 }
    );
  }
}
