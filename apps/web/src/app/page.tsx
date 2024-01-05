import { Intro } from "../modules/homepage/sections/Intro";
import { Header } from "../modules/ui/Header";
import { LastArticles } from "../modules/homepage/sections/LastArticles";
import { LastCourses } from "../modules/homepage/sections/LastCourses";

const Page = () => {
  return (
    <main>
      <Header />
      <Intro />
      <LastArticles />
      <LastCourses />
    </main>
  );
};

export default Page;
