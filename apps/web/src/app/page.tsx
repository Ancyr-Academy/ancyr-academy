// import LogoAlone from "../assets/logo-alone.png";
import { Intro } from "../modules/homepage/sections/Intro";
import { Header } from "../modules/ui/Header";
import { LastArticles } from "../modules/homepage/sections/LastArticles";

const Page = () => {
  return (
    <main>
      <Header />
      <Intro />
      <LastArticles />
    </main>
  );
};

export default Page;
