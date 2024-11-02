import { Intro } from "../sections/Intro";
import { LastCourses } from "../sections/LastCourses";
import { Promotional } from "@ancyracademy/shared";

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
