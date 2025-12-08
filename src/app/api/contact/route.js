import { NextResponse } from "next/server";

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
    const data = await request.json();

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
    } = data;

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

    // Log the submission (in production, send email via nodemailer, Resend, etc.)
    console.log("=== NEW CONTACT FORM SUBMISSION ===");
    console.log(emailContent);
    console.log("===================================");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
