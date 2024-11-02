import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import "./globals.css";
import "normalize.css/normalize.css";
import { StyledComponentsRegistry } from "../ui/StyledComponentRegistry";
import { Footer, Header } from "@ancyracademy/shared";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://clean-architecture.ancyracademy.fr"),
  title: "Formation à la Clean Architecture - Ancyr Academy",
  description:
    "Apprenez à développer des applications robustes et maintenables avec la Clean Architecture à travers une formation complète et accessible. Au programme : paradigmes de programmation, principes SOLID, théorie des composants, architecture logicielles et mise en pratique sur des applications full-stack.",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="fr">
      <body className={font.className}>
        <StyledComponentsRegistry>
          <Header fullUrl />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
