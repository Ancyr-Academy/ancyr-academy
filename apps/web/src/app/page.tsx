import { Intro } from "../modules/homepage/sections/Intro";
import { Header } from "../modules/ui/Header";
import { LastArticles } from "../modules/homepage/sections/LastArticles";
import { LastCourses } from "../modules/homepage/sections/LastCourses";
import { Promotional } from "../modules/promotion/Promotional";

const Page = () => {
  return (
    <main>
      <Intro />
      <Promotional />
      {/*<LastArticles />*/}
      <LastCourses />
    </main>
  );
};

export default Page;
