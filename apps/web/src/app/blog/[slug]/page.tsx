import { notFound } from "next/navigation";
import React from "react";
import { getPost } from "../../../core/get-posts";
import { PostBody } from "../../../components/PostBody";

const Page = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
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
