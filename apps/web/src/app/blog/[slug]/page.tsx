import path from "node:path";
import * as fs from "node:fs";
import matter from "gray-matter";

import { BlogPage } from "../../../components/BlogPage";
import { markdownToHtml } from "../../../markdown";

const Page = async ({ params }: { params: any }) => {
  const { slug } = await params;

  const fullPath = path.resolve("src", "posts", slug + ".md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const parsed = matter(fileContents, {
    excerpt: true,
  });

  const content = await markdownToHtml(
    parsed.content.slice(parsed.excerpt.length + 3),
  );

  return <BlogPage title={parsed.data.title} content={content} />;
};

export const generateStaticParams = () => {
  const postsPath = path.resolve("src", "posts");

  const posts = fs.readdirSync(postsPath);

  return posts.map((post) => ({
    params: {
      slug: post,
    },
  }));
};

export default Page;
