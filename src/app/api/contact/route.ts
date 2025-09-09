// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

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
    // Vérifier la clé API au début
    if (!apiKey) {
      return NextResponse.json(
        { error: "Configuration serveur manquante" },
        { status: 500 },
      );
    }

    const { name, email, message } = await request.json();

    // Validation des données
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 },
      );
    }

    // Validation email basique
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Format d'email invalide" },
        { status: 400 },
      );
    }

    // Envoyer l'email avec une présentation professionnelle
    const { data: emailToYou, error: errorToYou } = await resend.emails.send({
      from: "Portfolio Félix Orain <onboarding@resend.dev>",
      to: ["felix.orain@gmail.com"],
      replyTo: email, // Important : permet de répondre directement à la personne
      subject: `🚀 Nouveau message portfolio : ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; }
            .content { background: #ffffff; padding: 30px; }
            .message-box { background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; margin: 20px 0; }
            .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0; }
            .info-item { background: #f1f3f4; padding: 15px; border-radius: 6px; }
            .footer { background: #f8f9fa; padding: 20px; text-align: center; font-size: 14px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">📧 Nouveau message</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Depuis votre portfolio felixorain.com</p>
            </div>

            <div class="content">
              <div class="info-grid">
                <div class="info-item">
                  <strong>👤 Contact :</strong><br>${name}
                </div>
                <div class="info-item">
                  <strong>📧 Email :</strong><br>${email}
                </div>
              </div>

              <div class="message-box">
                <h3 style="margin-top: 0; color: #667eea;">💬 Message :</h3>
                <div style="white-space: pre-wrap;">${message}</div>
              </div>
            </div>

            <div class="footer">
              <p><strong>💡 Pour répondre :</strong> Cliquez simplement sur "Répondre" dans votre client email</p>
              <p style="margin-top: 15px; font-size: 12px; color: #999;">
                Email envoyé automatiquement depuis votre portfolio • ${new Date().toLocaleString("fr-FR")}
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (errorToYou) {
      console.error("Erreur envoi email à vous:", errorToYou);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email" },
        { status: 500 },
      );
    }

    // 2. Email de confirmation pour la personne (NOUVEAU)
    const { data: confirmationEmail, error: errorConfirmation } =
      await resend.emails.send({
        from: "Félix Orain <onboarding@resend.dev>",
        to: [email], // L'email de la personne qui vous contacte
        subject: "✅ Message reçu - Félix Orain Portfolio",
        html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; }
            .content { background: #ffffff; padding: 30px; }
            .highlight-box { background: #e8f5e8; padding: 20px; border-radius: 8px; border-left: 4px solid #4caf50; margin: 20px 0; }
            .footer { background: #f8f9fa; padding: 20px; text-align: center; font-size: 14px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">✅ Message bien reçu !</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Merci de m'avoir contacté</p>
            </div>

            <div class="content">
              <p>Bonjour <strong>${name}</strong>,</p>

              <div class="highlight-box">
                <p style="margin: 0;"><strong>📨 Votre message a bien été envoyé !</strong></p>
                <p style="margin: 10px 0 0 0;">Je vous répondrai dans les plus brefs délais, généralement sous 24h.</p>
              </div>

              <p>En attendant, n'hésitez pas à :</p>
              <ul>
                <li>🔍 Explorer mon <a href="https://felix-orain.com" style="color: #667eea;">portfolio complet</a></li>
                <li>📸 Découvrir mes <a href="https://felix-orain.com/photos" style="color: #667eea;">photographies</a></li>
                <li>💻 Voir mes <a href="https://felix-orain.com/applications" style="color: #667eea;">projets web</a></li>
              </ul>

              <p>À très bientôt,<br><strong>Félix Orain</strong><br>
              <span style="color: #666; font-size: 14px;">Développeur Web & Photographe</span></p>
            </div>

            <div class="footer">
              <p>📧 felix.orain@gmail.com • 📱 07 78 76 44 54</p>
              <p style="margin-top: 10px; font-size: 12px; color: #999;">
                Basé à Rennes, Bretagne
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      });

    // Log l'erreur de confirmation mais ne pas faire échouer la requête
    if (errorConfirmation) {
      console.error("Erreur envoi email de confirmation:", errorConfirmation);
      // Ne pas retourner d'erreur car l'email principal a été envoyé
    }

    return NextResponse.json(
      {
        message: "Email envoyé avec succès",
        data: emailToYou,
        confirmation: confirmationEmail
          ? "Email de confirmation envoyé"
          : "Email de confirmation non envoyé",
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
