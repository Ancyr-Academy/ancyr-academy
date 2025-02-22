import path from "node:path";
import * as fs from "node:fs";
import matter from "gray-matter";
import { visit } from "unist-util-visit";
import { h } from "hastscript";

import { BlogPage } from "../../../components/BlogPage";
import { markdownToHtml } from "../../../markdown";

const Page = async ({ params }: { params: Awaited<{ slug: string }> }) => {
  const { slug } = await params;

  const fullPath = path.resolve("src", "posts", slug + ".md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const parsed = matter(fileContents);

  const content = await markdownToHtml(parsed.content);

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

function customElementsPlugin() {
  return function (tree: any) {
    visit(tree, function (node) {
      if (
        node.type === "containerDirective" ||
        node.type === "leafDirective" ||
        node.type === "textDirective"
      ) {
        if (node.name !== "notice") return;

        const data = node.data || (node.data = {});
        const tagName = node.type === "textDirective" ? "span" : "div";

        data.hName = tagName;
        data.hProperties = h(tagName, {
          ...node.attributes,
          class: `notice ${node.attributes.class}`,
        }).properties;
      }
    });
  };
}
