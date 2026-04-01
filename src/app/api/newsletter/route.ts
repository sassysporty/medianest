import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { resend } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Save to Supabase
    const { error: dbError } = await supabase
      .from("newsletter_subscribers")
      .insert({ email })
      .select();

    if (dbError) {
      if (dbError.code === "23505") {
        return NextResponse.json({ success: true, message: "Already subscribed" });
      }
      console.error("Supabase insert error:", dbError);
    }

    // Send welcome email
    await resend.emails.send({
      from: "MediaNest <onboarding@resend.dev>",
      to: email,
      subject: "Welcome to MediaNest! 🎉",
      html: `
        <h2>You're In! 🚀</h2>
        <p>Thanks for subscribing to the <strong>MediaNest</strong> newsletter.</p>
        <p>You'll get:</p>
        <ul>
          <li>📈 Digital marketing tips for local businesses</li>
          <li>🎬 YouTube growth strategies</li>
          <li>🛍️ Etsy optimization secrets</li>
          <li>🔍 SEO insights you can actually use</li>
        </ul>
        <p>No spam, ever. Just actionable growth advice.</p>
        <br/>
        <p>— The MediaNest Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter API error:", err);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
