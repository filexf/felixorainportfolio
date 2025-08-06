import "../styles/globals.css";
import "../styles/landing-page.css";
import "../styles/lightbox.css";
import "../styles/style.css";

import Providers from "../components/Providers";

export const metadata = {
  title: "Félix Orain - Portfolio",
  description: "Portfolio de Félix Orain - Développeur web et photographe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="text-base">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
