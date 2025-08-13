import "../styles/globals.css";
import Providers from "../components/Providers";

export const metadata = {
  title: "Félix Orain - Portfolio",
  description: "Portfolio de Félix Orain - Développeur web et photographe",
  icons: {
    icon: '/favicon.ico'
  }
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
