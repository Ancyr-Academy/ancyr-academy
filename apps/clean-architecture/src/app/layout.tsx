import "purecss/build/pure.css";
import { Source_Sans_Pro } from "next/font/google";
import { StyledComponentsRegistry } from "../../lib/registry";
import { GlobalStyles } from "../../lib/global-styles";

const sourceSansPro = Source_Sans_Pro({
  weight: ["300", "400", "600", "700", "900"],
  subsets: ["latin-ext"],
});

export const metadata = {
  metadataBase: new URL("https://clean-architecture.ancyr.fr"),
  title: "Formation à la Clean Architecture - Ancyr Academy",
  description:
    "Apprenez à développer des applications robustes et maintenables avec la Clean Architecture à travers une formation complète et accessible. Au programme : paradigmes de programmation, principes SOLID, théorie des composants, architecture logicielles et mise en pratique sur des applications full-stack.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={sourceSansPro.className}>
        <StyledComponentsRegistry>
          <div>
            <GlobalStyles />
            {children}
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
