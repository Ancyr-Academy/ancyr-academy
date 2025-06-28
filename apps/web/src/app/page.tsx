import { Intro } from "../sections/Intro";
import { LastCourses } from "../sections/LastCourses";
import { SubIntro } from "../sections/SubIntro";
import { Stats } from "../sections/Stats";

const Page = async () => {
  return (
    <main>
      <Intro />
      <SubIntro />

      <LastCourses />
      <Stats />
    </main>
  );
};

export default Page;
