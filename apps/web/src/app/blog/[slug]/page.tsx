import path from "node:path";
import * as fs from "node:fs";
import matter from "gray-matter";
import { Metadata } from "next";

import { BlogPage } from "../../../components/BlogPage";
import { markdownToHtml } from "../../../markdown";

const parse = (slug: string) => {
  const fullPath = path.resolve("src", "posts", slug + ".md");
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return matter(fileContents, {
    excerpt: true,
  });
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

export const generateMetadata = async ({
  params,
}: {
  params: any;
}): Promise<Metadata> => {
  const { slug } = await params;

  const parsed = parse(slug);
  const title = parsed.data.title;
  const description = parsed.excerpt
    ?.trim()
    .replace(/\n/g, " ")
    .replace(/\*/g, "");
  const images = [`/posts/${slug}/thumbnail.png`];

  return {
    metadataBase: new URL("https://ancyracademy.fr"),
    title,
    openGraph: {
      title,
      description,
      images,
    },
    twitter: {
      title,
      description,
      images,
    },
  };
};

const Page = async ({ params }: { params: any }) => {
  const { slug } = await params;
  const parsed = parse(slug);
  const content = await markdownToHtml(parsed.content);

  return <BlogPage title={parsed.data.title} content={content} />;
};

export default Page;
