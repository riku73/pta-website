import { NextResponse } from "next/server";
import { Resend } from "resend";

// Lazy initialization to avoid build-time errors
let resend = null;
const getResend = () => {
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
};
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "info@pta-training.lu";

const goalLabels = {
  muskelaufbau: "Muskelaufbau",
  abnehmen: "Abnehmen",
  fitter: "Fitter werden",
  energie: "Mehr Energie",
  rehabilitation: "Rehabilitation",
  teamtraining: "Teamtraining",
};

const serviceLabels = {
  "personal-training": "Personal Training",
  "gruppentraining": "Gruppentraining",
  "fitness-bootcamp": "Fitness Bootcamp",
  "ernaehrungsberatung": "Ernährungsberatung",
  "rehabilitation": "Rehabilitation",
  "sportmannschaften": "Sportmannschaften",
};

const fitnessLabels = {
  anfaenger: "Anfänger",
  fortgeschritten: "Fortgeschritten",
  profi: "Profi",
};

const availabilityLabels = {
  morgens: "Morgens (6-12 Uhr)",
  mittags: "Mittags (12-14 Uhr)",
  nachmittags: "Nachmittags (14-18 Uhr)",
  abends: "Abends (18-22 Uhr)",
  wochenende: "Wochenende",
};

export async function POST(request) {
  try {
    const formData = await request.json();

    const {
      goals,
      service,
      fitnessLevel,
      availability,
      healthIssues,
      healthDetails,
      name,
      email,
      phone,
      message,
    } = formData;

    // Validate required fields
    if (!name || !email || !goals?.length || !service || !fitnessLevel) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Format the email content
    const emailContent = `
Neue Kontaktanfrage von der PTA Website

=== KONTAKTDATEN ===
Name: ${name}
E-Mail: ${email}
Telefon: ${phone || "Nicht angegeben"}

=== ZIELE ===
${goals.map((g) => `- ${goalLabels[g] || g}`).join("\n")}

=== GEWÜNSCHTES ANGEBOT ===
${serviceLabels[service] || service}

=== FITNESS-LEVEL ===
${fitnessLabels[fitnessLevel] || fitnessLevel}

=== VERFÜGBARKEIT ===
${availability.length > 0 ? availability.map((a) => `- ${availabilityLabels[a] || a}`).join("\n") : "Nicht angegeben"}

=== GESUNDHEITLICHE EINSCHRÄNKUNGEN ===
${healthIssues === "yes" ? `Ja: ${healthDetails || "Keine Details angegeben"}` : "Keine"}

=== NACHRICHT ===
${message || "Keine zusätzliche Nachricht"}
    `.trim();

    // Create HTML email template
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
    .header { background: #c9f31d; padding: 20px; text-align: center; }
    .header h1 { color: #141410; margin: 0; font-size: 24px; }
    .content { padding: 20px; background: #f9f9f9; }
    .section { background: white; padding: 15px; margin-bottom: 15px; border-radius: 8px; border-left: 4px solid #c9f31d; }
    .section h3 { color: #141410; margin: 0 0 10px 0; font-size: 16px; }
    .section p { margin: 5px 0; }
    .label { color: #666; font-weight: bold; }
    .footer { padding: 15px; text-align: center; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Neue Kontaktanfrage - PTA Training</h1>
  </div>
  <div class="content">
    <div class="section">
      <h3>Kontaktdaten</h3>
      <p><span class="label">Name:</span> ${name}</p>
      <p><span class="label">E-Mail:</span> ${email}</p>
      <p><span class="label">Telefon:</span> ${phone || "Nicht angegeben"}</p>
    </div>
    <div class="section">
      <h3>Ziele</h3>
      <p>${goals.map((g) => goalLabels[g] || g).join(", ")}</p>
    </div>
    <div class="section">
      <h3>Gewünschtes Angebot</h3>
      <p>${serviceLabels[service] || service}</p>
    </div>
    <div class="section">
      <h3>Fitness-Level</h3>
      <p>${fitnessLabels[fitnessLevel] || fitnessLevel}</p>
    </div>
    <div class="section">
      <h3>Verfügbarkeit</h3>
      <p>${availability.length > 0 ? availability.map((a) => availabilityLabels[a] || a).join(", ") : "Nicht angegeben"}</p>
    </div>
    <div class="section">
      <h3>Gesundheitliche Einschränkungen</h3>
      <p>${healthIssues === "yes" ? healthDetails || "Ja (keine Details)" : "Keine"}</p>
    </div>
    ${message ? `
    <div class="section">
      <h3>Nachricht</h3>
      <p>${message}</p>
    </div>
    ` : ""}
  </div>
  <div class="footer">
    <p>Diese Nachricht wurde über das Kontaktformular auf pta-training.lu gesendet.</p>
  </div>
</body>
</html>
    `.trim();

    // Send email via Resend
    const { error } = await getResend().emails.send({
      from: "PTA Website <onboarding@resend.dev>",
      to: [CONTACT_EMAIL],
      subject: `Neue Anfrage: ${serviceLabels[service] || service} - ${name}`,
      html: htmlContent,
      text: emailContent,
      replyTo: email,
    });

    if (error) {
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
