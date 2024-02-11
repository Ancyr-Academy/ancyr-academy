import { notFound } from "next/navigation";
import React from "react";
import { getPost } from "../../../modules/blog/get-posts";
import { PostBody } from "../../../modules/blog/PostBody";

const Page: React.FC<{
  params: {
    slug: string;
  };
}> = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  if (!post) {
    return notFound();
  }

  return (
    <div>
      <article>
        <h2>Super Article</h2>
        <PostBody>{post.body}</PostBody>
      </article>
    </div>
  );
};

export default Page;
