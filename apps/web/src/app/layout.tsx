import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
import "normalize.css/normalize.css";
import { StyledComponentsRegistry } from "../ui/StyledComponentRegistry";
import { Footer, Header } from "@ancyracademy/shared";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ancyr Academy",
  description:
    "Formations, Cours, Articles & Vidéos sur l'Ingénierie Logicielle, le Software Craftsmanship et le Développement d'application robustes et maintenables.",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="fr">
      <body className={font.className}>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
      <GoogleAnalytics gaId="G-SNNPPR1VGQ" />
    </html>
  );
};

export default RootLayout;
