import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { resend } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Save to Supabase
    const { error: dbError } = await supabase.from("contact_submissions").insert({
      name: body.name,
      email: body.email,
      phone: body.phone || null,
      business: body.business || null,
      service: body.service || null,
      message: body.message,
    });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
    }

    // Send notification email to you
    await resend.emails.send({
      from: "MediaNest <onboarding@resend.dev>",
      to: "hello@medianest.io",
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${body.phone || "Not provided"}</p>
        <p><strong>Business:</strong> ${body.business || "Not provided"}</p>
        <p><strong>Service:</strong> ${body.service || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
