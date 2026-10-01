import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  subjects?: string;
  message?: string;
};

function smtpConfigured() {
  return Boolean(
    process.env.CONTACT_SMTP_HOST &&
      process.env.CONTACT_SMTP_USER &&
      process.env.CONTACT_SMTP_PASS
  );
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const name = (payload.name || "").trim();
  const email = (payload.email || "").trim();
  const subject = (payload.subjects || "").trim();
  const message = (payload.message || "").trim();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ ok: false, error: "All fields are required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email address." }, { status: 400 });
  }

  const recipient = process.env.CONTACT_TO || "lukaskris12@gmail.com";

  if (!smtpConfigured()) {
    // Not configured on this deployment — tell the visitor instead of failing silently.
    return NextResponse.json(
      {
        ok: false,
        error: "Contact form is not configured yet. Please email lukaskris12@gmail.com directly.",
      },
      { status: 503 }
    );
  }

  try {
    const transport = nodemailer.createTransport({
      host: process.env.CONTACT_SMTP_HOST,
      port: Number(process.env.CONTACT_SMTP_PORT || 587),
      secure: Number(process.env.CONTACT_SMTP_PORT || 587) === 465,
      auth: { user: process.env.CONTACT_SMTP_USER, pass: process.env.CONTACT_SMTP_PASS },
    });

    await transport.sendMail({
      from: process.env.CONTACT_SMTP_USER,
      replyTo: email,
      to: recipient,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Failed to send the message. Please email lukaskris12@gmail.com directly." },
      { status: 502 }
    );
  }
}
