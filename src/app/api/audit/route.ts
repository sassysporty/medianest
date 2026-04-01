import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { resend } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, url, service } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Save to Supabase
    const { error: dbError } = await supabase.from("audit_requests").insert({
      name,
      email,
      url: url || null,
      service: service || null,
    });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
    }

    // Notify you
    await resend.emails.send({
      from: "MediaNest <onboarding@resend.dev>",
      to: "hello@medianest.io",
      subject: `🔍 New Audit Request from ${name}`,
      html: `
        <h2>New Free Audit Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>URL:</strong> ${url || "Not provided"}</p>
        <p><strong>Service:</strong> ${service || "Not specified"}</p>
        <p>Respond within 48 hours!</p>
      `,
    });

    // Send confirmation to the lead
    await resend.emails.send({
      from: "MediaNest <onboarding@resend.dev>",
      to: email,
      subject: "Your Free Audit is on the Way! 🚀",
      html: `
        <h2>Hey ${name}! 👋</h2>
        <p>Thanks for requesting a free audit from <strong>MediaNest</strong>.</p>
        <p>Our team is already working on your personalized audit. You'll receive it within <strong>48 hours</strong>.</p>
        <p>In the meantime, here's what we'll analyze:</p>
        <ul>
          <li>✅ Your current online presence and performance</li>
          <li>✅ Competitor benchmarking in your market</li>
          <li>✅ 3-5 quick wins you can implement immediately</li>
          <li>✅ A custom 90-day growth roadmap</li>
        </ul>
        <p>Have questions? Reply to this email or book a call at <a href="https://cal.com/medianest">cal.com/medianest</a>.</p>
        <br/>
        <p>— The MediaNest Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Audit API error:", err);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
