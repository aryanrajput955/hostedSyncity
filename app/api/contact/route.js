import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, eventType, message } = body;

    // Validation
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Phone must be exactly 10 digits
    const phoneDigits = (phone || "").replace(/\D/g, "");
    if (!phone || phoneDigits.length !== 10) {
      return NextResponse.json(
        { error: "Phone number must be exactly 10 digits." },
        { status: 400 }
      );
    }

    // Message must be at least 10 words
    const wordCount = message.trim().split(/\s+/).filter(Boolean).length;
    if (wordCount < 10) {
      return NextResponse.json(
        { error: "Please write at least 10 words about your vision." },
        { status: 400 }
      );
    }

    // Build the professional HTML email template
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Inquiry - Syncity Events</title>
  <!--[if mso]>
  <style>table,td,div,p,span{font-family:Arial,sans-serif!important;}</style>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#f5f0eb;font-family:'Helvetica Neue',Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f5f0eb;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:520px;margin:0 auto;">

          <!-- Logo & Brand -->
          <tr>
            <td align="center" style="padding:24px 0 20px;">
              <p style="margin:0;font-size:22px;font-weight:700;color:#800000;letter-spacing:3px;font-family:Georgia,'Times New Roman',serif;">SYNCITY</p>
              <p style="margin:4px 0 0;font-size:10px;color:#D4AF37;letter-spacing:3px;text-transform:uppercase;">Events & Celebrations</p>
            </td>
          </tr>

          <!-- Main Card -->
          <tr>
            <td>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;">
                
                <!-- Maroon Top Bar -->
                <tr>
                  <td style="height:4px;background-color:#800000;"></td>
                </tr>

                <!-- Greeting -->
                <tr>
                  <td style="padding:28px 28px 0;">
                    <p style="margin:0 0 4px;font-size:11px;color:#D4AF37;letter-spacing:2px;text-transform:uppercase;font-weight:600;">New Inquiry</p>
                    <p style="margin:0;font-size:20px;color:#800000;font-weight:700;font-family:Georgia,'Times New Roman',serif;">${firstName}${lastName ? ' ' + lastName : ''}</p>
                    <p style="margin:6px 0 0;font-size:13px;color:#999;">${eventType}</p>
                  </td>
                </tr>

                <!-- Divider -->
                <tr>
                  <td style="padding:20px 28px 0;">
                    <div style="height:1px;background-color:#f0ebe4;"></div>
                  </td>
                </tr>

                <!-- Contact Info -->
                <tr>
                  <td style="padding:20px 28px 0;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td width="50%" style="padding-right:8px;vertical-align:top;">
                          <p style="margin:0;font-size:10px;color:#999;text-transform:uppercase;letter-spacing:1.5px;">Email</p>
                          <p style="margin:4px 0 0;font-size:14px;"><a href="mailto:${email}" style="color:#800000;text-decoration:none;">${email}</a></p>
                        </td>
                        <td width="50%" style="padding-left:8px;vertical-align:top;">
                          <p style="margin:0;font-size:10px;color:#999;text-transform:uppercase;letter-spacing:1.5px;">Phone</p>
                          <p style="margin:4px 0 0;font-size:14px;color:#333;"><a href="tel:${phone}" style="color:#333;text-decoration:none;">${phone || 'Not provided'}</a></p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Divider -->
                <tr>
                  <td style="padding:20px 28px 0;">
                    <div style="height:1px;background-color:#f0ebe4;"></div>
                  </td>
                </tr>

                <!-- Message -->
                <tr>
                  <td style="padding:20px 28px;">
                    <p style="margin:0 0 8px;font-size:10px;color:#999;text-transform:uppercase;letter-spacing:1.5px;">Message</p>
                    <p style="margin:0;font-size:14px;color:#444;line-height:1.7;">${message}</p>
                  </td>
                </tr>

                <!-- Action Button -->
                <tr>
                  <td style="padding:4px 28px 28px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="border-radius:6px;background-color:#800000;">
                          <a href="mailto:${email}?subject=Re: Your Inquiry — Syncity Events&body=Dear ${firstName},%0D%0A%0D%0AThank you for reaching out to Syncity Events.%0D%0A%0D%0A" style="display:inline-block;padding:10px 24px;color:#FDF5E6;text-decoration:none;font-size:13px;font-weight:600;letter-spacing:0.5px;">Reply to ${firstName}</a>
                        </td>
                        <td style="padding-left:10px;">
                          <a href="tel:${phone || ''}" style="display:inline-block;padding:10px 24px;color:#800000;text-decoration:none;font-size:13px;font-weight:600;letter-spacing:0.5px;border:1px solid #e0d5c8;border-radius:6px;">Call</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding:24px 0 8px;">
              <p style="margin:0;font-size:11px;color:#999;">Syncity Events · Haridwar, Uttarakhand</p>
              <p style="margin:4px 0 0;font-size:11px;color:#ccc;">+91 63977 23250 · +91 84330 23265</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    const { data, error } = await resend.emails.send({
      from: "Syncity Events <noreply@syncityevents.com>",
      to: ["connect@syncityevents.com"],
      subject: `New Inquiry from ${firstName} ${lastName} — ${eventType}`,
      replyTo: email,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send your message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Your message has been sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
