import { Intro } from "../sections/Intro";
import { LastCourses } from "../sections/LastCourses";
import { SubIntro } from "../sections/SubIntro";
import { Stats } from "../sections/Stats";
import { LastWorkshops } from "../sections/LastWorkshops";

const Page = async () => {
  return (
    <main>
      <Intro />
      <SubIntro />
      <LastWorkshops />
      <LastCourses />
      <Stats />
    </main>
  );
};

export default Page;
