import { Intro } from "../sections/Intro";
import { LastCourses } from "../sections/LastCourses";
import { NoSsrPromotional } from "@ancyracademy/shared/src/components/NoSsrPromotional";

const Page = () => {
  return (
    <main>
      <Intro />
      <NoSsrPromotional />
      <LastCourses />
    </main>
  );
};

export default Page;
