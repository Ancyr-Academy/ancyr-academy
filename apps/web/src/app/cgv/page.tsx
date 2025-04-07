import { RegularPage } from "@ancyracademy/shared";

const Page = async () => {
  return (
    <RegularPage
      title="CGV"
      content={
        <p>
          Vous pouvez consulter mes CGV{" "}
          <a
            href="https://docs.google.com/document/d/1emoZ7Ur8uP6VewZX30zoTO6Dznk013vkrimzjF0-QfM/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            à cette adresse
          </a>
          .
        </p>
      }
    />
  );
};

export default Page;
