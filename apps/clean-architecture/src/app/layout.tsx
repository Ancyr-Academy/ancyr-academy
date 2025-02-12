import { Outfit } from "next/font/google";

import "./globals.css";
import "normalize.css/normalize.css";
import { Footer, Header } from "@ancyracademy/shared";

const font = Outfit({ subsets: ["latin"] });

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="fr">
      <body className={font.className}>
        <Header fullUrl />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
