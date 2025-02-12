import { Intro } from "../sections/Intro";
import { LastCourses } from "../sections/LastCourses";
import { NoSsrPromotional } from "@ancyracademy/shared/src/components/NoSsrPromotional";
import { Container } from "@ancyracademy/shared";

const Page = async () => {
  return (
    <main>
      <Intro />
      <Container>
        <NoSsrPromotional />
      </Container>
      <LastCourses />
    </main>
  );
};

export default Page;
