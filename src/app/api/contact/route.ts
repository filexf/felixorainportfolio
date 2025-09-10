// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// À importer plus tard pour un email de confirmation
// import { sendConfirmationEmail } from '@/lib/emailTemplates';
// await sendConfirmationEmail(resend, { name, email, portfolioUrl: "https://felixorain.com" });

// Ajoutez cette déclaration de type
declare const process: {
  env: {
    RESEND_API_KEY: string;
  };
};

// Vérifier que la clé API est définie
const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  console.error("RESEND_API_KEY is not defined in environment variables");
}

const resend = new Resend(apiKey);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validation des données
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 },
      );
    }

    // Fonction pour traduire le sujet
    const getSubjectLabel = (subjectKey: string) => {
      const subjects: Record<string, string> = {
        "web-project": "💻 Projet Web",
        "photo-project": "📸 Projet Photo",
        "pricing": "💰 Demande de Tarifs",
        "collaboration": "🤝 Collaboration",
        "other": "💬 Autre",
      };
      return subjects[subjectKey] || subjectKey;
    };

    const subjectLabel = getSubjectLabel(subject);

    // Envoyer l'email avec une présentation professionnelle
    const { data: emailToYou, error: errorToYou } = await resend.emails.send({
      from: "Portfolio Félix Orain <onboarding@resend.dev>",
      to: ["felix.orain@gmail.com"],
      replyTo: email, // Important : permet de répondre directement à la personne
      subject: `${subjectLabel} - Message de ${name}`,
      html: `
        <!-- Template mis à jour avec le sujet -->
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">📧 Nouveau message</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Depuis votre portfolio</p>
          </div>

          <div style="background: #ffffff; padding: 30px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0;">
              <div style="background: #f1f3f4; padding: 15px; border-radius: 6px;">
                <strong>👤 Contact :</strong><br>${name}
              </div>
              <div style="background: #f1f3f4; padding: 15px; border-radius: 6px;">
                <strong>📧 Email :</strong><br>${email}
              </div>
            </div>

            <div style="background: #e3f2fd; padding: 15px; border-radius: 6px; margin: 20px 0;">
              <strong>📋 Sujet :</strong> ${subjectLabel}
            </div>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #667eea;">💬 Message :</h3>
              <div style="white-space: pre-wrap;">${message}</div>
            </div>
          </div>

          <div style="background: #f8f9fa; padding: 20px; text-align: center; font-size: 14px; color: #666;">
            <p><strong>💡 Pour répondre :</strong> Cliquez simplement sur "Répondre"</p>
          </div>
        </div>
      `,
    });

    if (errorToYou) {
      console.error("Erreur envoi email à vous:", errorToYou);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        message: "Email envoyé avec succès",
        data: emailToYou,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Erreur serveur:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 },
    );
  }
}
