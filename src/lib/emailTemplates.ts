// src/lib/emailTemplates.ts
// Composant pour l'email de confirmation - à utiliser plus tard

export interface ConfirmationEmailData {
  name: string;
  email: string;
  portfolioUrl?: string;
}

/**
 * Template d'email de confirmation pour les visiteurs
 * À utiliser plus tard quand un domaine sera configuré sur Resend
 */
export const generateConfirmationEmail = ({
  name,
  portfolioUrl = "https://felixorain.com",
}: ConfirmationEmailData): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
        }
        .container { max-width: 600px; margin: 0 auto; }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px;
          text-align: center;
        }
        .content { background: #ffffff; padding: 30px; }
        .highlight-box {
          background: #e8f5e8;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #4caf50;
          margin: 20px 0;
        }
        .footer {
          background: #f8f9fa;
          padding: 20px;
          text-align: center;
          font-size: 14px;
          color: #666;
        }
        .btn {
          display: inline-block;
          padding: 12px 24px;
          background: #667eea;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          margin: 10px 5px;
        }
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
          <div style="text-align: center; margin: 30px 0;">
            <a href="${portfolioUrl}" class="btn">🔍 Explorer mon portfolio</a>
            <a href="${portfolioUrl}/photos" class="btn">📸 Voir mes photos</a>
            <a href="${portfolioUrl}/applications" class="btn">💻 Mes projets web</a>
          </div>

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
  `;
};

/**
 * Fonction pour envoyer l'email de confirmation
 * À utiliser plus tard quand un domaine sera configuré
 */
export const sendConfirmationEmail = async (
  resend: any, // Resend instance
  { name, email, portfolioUrl }: ConfirmationEmailData,
) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Félix Orain <contact@felixorain.com>", // Nécessite un domaine vérifié
      to: [email],
      subject: "✅ Message reçu - Félix Orain Portfolio",
      html: generateConfirmationEmail({ name, email, portfolioUrl }),
    });

    if (error) {
      console.error("Erreur envoi email de confirmation:", error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Erreur lors de l'envoi de confirmation:", error);
    return { success: false, error };
  }
};
