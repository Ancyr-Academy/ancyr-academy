import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import "normalize.css/normalize.css";
import { StyledComponentsRegistry } from "../modules/ui/StyledComponentRegistry";
import { Header } from "../modules/ui/Header";
import { Footer } from "../modules/ui/Footer";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ancyr Academy",
  description:
    "Formations, Cours, Articles & Vidéos sur l'Ingénierie Logicielle, le Software Craftsmanship et le Développement d'application robustes et maintenables.",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={font.className}>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>

        <Script
          async
          id="gtag-1"
          src="https://www.googletagmanager.com/gtag/js?id=G-SNNPPR1VGQ"
        />

        <Script id="gtag-2">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-SNNPPR1VGQ');`}
        </Script>
      </body>
    </html>
  );
};

export default RootLayout;
