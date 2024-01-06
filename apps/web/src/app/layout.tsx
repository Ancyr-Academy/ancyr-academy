import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import "./globals.css";
import "normalize.css/normalize.css";
import { StyledComponentsRegistry } from "../modules/ui/StyledComponentRegistry";
import { Header } from "../modules/ui/Header";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ancyr Academy",
  description: "La Ancyr Academy",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={font.className}>
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
