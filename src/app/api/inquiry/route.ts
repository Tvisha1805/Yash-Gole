import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "inquiries.json");

function ensureFile() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, "[]", "utf-8");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, eventType, eventDate, details } = body;

    if (!name || !email || !eventType) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    ensureFile();

    const existing = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
    const entry = {
      id: Date.now(),
      submittedAt: new Date().toISOString(),
      name,
      email,
      phone: phone || "",
      eventType,
      eventDate: eventDate || "",
      details: details || "",
    };
    existing.push(entry);
    fs.writeFileSync(DATA_FILE, JSON.stringify(existing, null, 2), "utf-8");

    return NextResponse.json({ success: true, message: "Inquiry received!" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}

export async function GET() {
  try {
    ensureFile();
    const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
    return NextResponse.json(data);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
