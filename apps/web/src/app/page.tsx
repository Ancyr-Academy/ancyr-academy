import { Intro } from "../sections/Intro";
import { LastCourses } from "../sections/LastCourses";
import { SubIntro } from "../sections/SubIntro";

const Page = async () => {
  return (
    <main>
      <Intro />
      <SubIntro />

      <LastCourses />
    </main>
  );
};

export default Page;
