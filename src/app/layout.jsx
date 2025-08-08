import "../styles/globals.css";
import "../styles/landing-page.css";
import "../styles/lightbox.css";
import "../styles/style.css";

import Providers from "../components/Providers";

export const metadata = {
  title: "Félix Orain - Portfolio",
  description: "Portfolio de Félix Orain - Développeur web et photographe",
  colorScheme: "light",
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="light scroll-smooth"
      data-scroll-behavior="smooth"
    >
      <body className="text-sm sm:text-base md:text-xl">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
