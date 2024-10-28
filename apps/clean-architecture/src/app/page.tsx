import { Navbar } from "../sections/Navbar";
import { Header } from "../sections/Header";
import { Intro } from "../sections/Intro";
import { Curriculum } from "../sections/Curriculum";
import { Methodology } from "../sections/Methodology";
import { FormationResult } from "../sections/FormationResult";
import { Included } from "../sections/Included";
import { Reviews } from "../sections/Reviews";
import { FAQ } from "../sections/FAQ";
import { Footer } from "../sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Intro />
      <Curriculum />
      <Methodology />
      <FormationResult />
      <Included />
      <Reviews />
      <FAQ />
      <Footer />
    </>
  );
}
