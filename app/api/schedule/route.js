import { google } from "googleapis";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function getOAuth2Client() {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );
  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });
  return oauth2Client;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time } = body;

    // Validation
    if (!name || !email || !phone || !date || !time) {
      return NextResponse.json(
        { error: "All fields are required." },
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

    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length !== 10) {
      return NextResponse.json(
        { error: "Phone number must be exactly 10 digits." },
        { status: 400 }
      );
    }

    // Parse date and time to create start/end times
    // date format: "YYYY-MM-DD", time format: "HH:MM"
    const startDateTime = new Date(`${date}T${time}:00+05:30`);
    const endDateTime = new Date(startDateTime.getTime() + 15 * 60 * 1000); // 15 min meeting

    // Validate not in the past
    if (startDateTime <= new Date()) {
      return NextResponse.json(
        { error: "Cannot schedule a meeting in the past." },
        { status: 400 }
      );
    }

    // Create Google Calendar event with Google Meet
    const auth = getOAuth2Client();
    const calendar = google.calendar({ version: "v3", auth });

    const event = {
      summary: `Syncity Events — Meeting with ${name}`,
      description: `Consultation meeting scheduled via syncityevents.com\n\nClient: ${name}\nEmail: ${email}\nPhone: ${phone}`,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: "Asia/Kolkata",
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: "Asia/Kolkata",
      },
      attendees: [
        { email: "connect@syncityevents.com" },
        { email: email },
      ],
      conferenceData: {
        createRequest: {
          requestId: `syncity-${Date.now()}`,
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 60 },
          { method: "popup", minutes: 15 },
        ],
      },
    };

    const calendarEvent = await calendar.events.insert({
      calendarId: "primary",
      resource: event,
      conferenceDataVersion: 1,
      sendUpdates: "all",
    });

    const meetLink = calendarEvent.data.hangoutLink || calendarEvent.data.conferenceData?.entryPoints?.[0]?.uri || "";
    const eventLink = calendarEvent.data.htmlLink || "";

    // Format date/time for display
    const displayDate = startDateTime.toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Kolkata",
    });
    const displayTime = startDateTime.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    });

    // Send notification email to owner
    const ownerEmailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!--[if mso]><style>table,td,div,p,span{font-family:Arial,sans-serif!important;}</style><![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#f5f0eb;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f5f0eb;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:520px;margin:0 auto;">

          <tr>
            <td align="center" style="padding:24px 0 20px;">
              <p style="margin:0;font-size:22px;font-weight:700;color:#800000;letter-spacing:3px;font-family:Georgia,'Times New Roman',serif;">SYNCITY</p>
              <p style="margin:4px 0 0;font-size:10px;color:#D4AF37;letter-spacing:3px;text-transform:uppercase;">Events & Celebrations</p>
            </td>
          </tr>

          <tr>
            <td>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;">
                <tr><td style="height:4px;background-color:#D4AF37;"></td></tr>

                <tr>
                  <td style="padding:28px 28px 0;">
                    <p style="margin:0 0 4px;font-size:11px;color:#D4AF37;letter-spacing:2px;text-transform:uppercase;font-weight:600;">Meeting Scheduled</p>
                    <p style="margin:0;font-size:20px;color:#800000;font-weight:700;font-family:Georgia,'Times New Roman',serif;">${name}</p>
                  </td>
                </tr>

                <tr><td style="padding:20px 28px 0;"><div style="height:1px;background-color:#f0ebe4;"></div></td></tr>

                <tr>
                  <td style="padding:20px 28px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td width="50%" style="padding-right:8px;vertical-align:top;">
                          <p style="margin:0;font-size:10px;color:#999;text-transform:uppercase;letter-spacing:1.5px;">Date</p>
                          <p style="margin:4px 0 0;font-size:14px;color:#333;font-weight:600;">${displayDate}</p>
                        </td>
                        <td width="50%" style="padding-left:8px;vertical-align:top;">
                          <p style="margin:0;font-size:10px;color:#999;text-transform:uppercase;letter-spacing:1.5px;">Time</p>
                          <p style="margin:4px 0 0;font-size:14px;color:#333;font-weight:600;">${displayTime}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr><td style="padding:0 28px;"><div style="height:1px;background-color:#f0ebe4;"></div></td></tr>

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
                          <p style="margin:4px 0 0;font-size:14px;color:#333;">${phone}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                ${meetLink ? `
                <tr><td style="padding:20px 28px 0;"><div style="height:1px;background-color:#f0ebe4;"></div></td></tr>
                <tr>
                  <td style="padding:20px 28px;">
                    <p style="margin:0 0 8px;font-size:10px;color:#999;text-transform:uppercase;letter-spacing:1.5px;">Google Meet</p>
                    <a href="${meetLink}" style="color:#800000;font-size:14px;text-decoration:underline;">${meetLink}</a>
                  </td>
                </tr>
                ` : ''}

                <tr>
                  <td style="padding:20px 28px 28px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="border-radius:6px;background-color:#800000;">
                          <a href="${meetLink || eventLink}" style="display:inline-block;padding:10px 24px;color:#FDF5E6;text-decoration:none;font-size:13px;font-weight:600;">Join Meeting</a>
                        </td>
                        <td style="padding-left:10px;">
                          <a href="${eventLink}" style="display:inline-block;padding:10px 24px;color:#800000;text-decoration:none;font-size:13px;font-weight:600;border:1px solid #e0d5c8;border-radius:6px;">View in Calendar</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding:24px 0 8px;">
              <p style="margin:0;font-size:11px;color:#999;">Syncity Events · Haridwar, Uttarakhand</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Send email to owner
    await resend.emails.send({
      from: "Syncity Events <noreply@syncityevents.com>",
      to: ["connect@syncityevents.com"],
      subject: `Meeting Scheduled — ${name} · ${displayDate} at ${displayTime}`,
      replyTo: email,
      html: ownerEmailHtml,
    });

    // Send confirmation email to client
    const clientEmailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!--[if mso]><style>table,td,div,p,span{font-family:Arial,sans-serif!important;}</style><![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#f5f0eb;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f5f0eb;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:520px;margin:0 auto;">

          <tr>
            <td align="center" style="padding:24px 0 20px;">
              <p style="margin:0;font-size:22px;font-weight:700;color:#800000;letter-spacing:3px;font-family:Georgia,'Times New Roman',serif;">SYNCITY</p>
              <p style="margin:4px 0 0;font-size:10px;color:#D4AF37;letter-spacing:3px;text-transform:uppercase;">Events & Celebrations</p>
            </td>
          </tr>

          <tr>
            <td>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;">
                <tr><td style="height:4px;background-color:#D4AF37;"></td></tr>

                <tr>
                  <td style="padding:28px 28px 0;">
                    <p style="margin:0 0 4px;font-size:11px;color:#D4AF37;letter-spacing:2px;text-transform:uppercase;font-weight:600;">Meeting Confirmed</p>
                    <p style="margin:0;font-size:20px;color:#800000;font-weight:700;font-family:Georgia,'Times New Roman',serif;">Hi ${name},</p>
                    <p style="margin:10px 0 0;font-size:14px;color:#666;line-height:1.6;">Your consultation with Syncity Events has been confirmed. We look forward to bringing your vision to life.</p>
                  </td>
                </tr>

                <tr><td style="padding:20px 28px 0;"><div style="height:1px;background-color:#f0ebe4;"></div></td></tr>

                <tr>
                  <td style="padding:20px 28px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td width="50%" style="padding-right:8px;vertical-align:top;">
                          <p style="margin:0;font-size:10px;color:#999;text-transform:uppercase;letter-spacing:1.5px;">Date</p>
                          <p style="margin:4px 0 0;font-size:14px;color:#333;font-weight:600;">${displayDate}</p>
                        </td>
                        <td width="50%" style="padding-left:8px;vertical-align:top;">
                          <p style="margin:0;font-size:10px;color:#999;text-transform:uppercase;letter-spacing:1.5px;">Time</p>
                          <p style="margin:4px 0 0;font-size:14px;color:#333;font-weight:600;">${displayTime}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr><td style="padding:0 28px;"><div style="height:1px;background-color:#f0ebe4;"></div></td></tr>

                <tr>
                  <td style="padding:20px 28px;">
                    <p style="margin:0 0 4px;font-size:10px;color:#999;text-transform:uppercase;letter-spacing:1.5px;">Duration</p>
                    <p style="margin:0;font-size:14px;color:#333;">15 minutes · Google Meet</p>
                  </td>
                </tr>

                ${meetLink ? `
                <tr>
                  <td style="padding:4px 28px 28px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="border-radius:6px;background-color:#800000;">
                          <a href="${meetLink}" style="display:inline-block;padding:12px 28px;color:#FDF5E6;text-decoration:none;font-size:13px;font-weight:600;letter-spacing:0.5px;">Join Google Meet</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                ` : ''}
              </table>
            </td>
          </tr>

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

    await resend.emails.send({
      from: "Syncity Events <noreply@syncityevents.com>",
      to: [email],
      subject: `Meeting Confirmed — ${displayDate} at ${displayTime} · Syncity Events`,
      html: clientEmailHtml,
    });

    return NextResponse.json({
      success: true,
      message: "Meeting scheduled successfully!",
      meetLink,
      eventLink,
    });
  } catch (error) {
    console.error("Schedule error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to schedule meeting. Please try again." },
      { status: 500 }
    );
  }
}
