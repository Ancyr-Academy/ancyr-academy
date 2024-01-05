import { api } from "../../../modules/ghost";

interface Props {
  params: {
    slug: string;
  };
}

const Page = async ({ params }: Props) => {
  return (
    <div>
      <article>
        <h2>Super Article</h2>
        <div dangerouslySetInnerHTML={{ __html: "" }} />
      </article>
    </div>
  );
};

export default Page;
