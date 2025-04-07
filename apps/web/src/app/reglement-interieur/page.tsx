import { RegularPage } from "@ancyracademy/shared";

const Page = async () => {
  return (
    <RegularPage
      title="Règlement intérieur"
      content={
        <p>
          Vous pouvez consulter le règlement intérieur de mes Workshops{" "}
          <a
            href="https://docs.google.com/document/d/1RRjsTiMehN8EU2Rn8d-lzB0xlFw7MMTl3pNXcLomcrY/edit?usp=sharing"
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
