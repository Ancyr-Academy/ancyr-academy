import path from "node:path";
import fs from "node:fs/promises";
import matter from "gray-matter";
import { cache } from "react";

const folderPath = path.join(process.cwd(), "src", "blogposts");

export const getPosts = cache(async () => {
  const posts = await fs.readdir(folderPath);

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = path.join(folderPath, file);
        const postContent = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(postContent);
        const slug = file.split(".")[0];

        return { ...data, body: content, slug } as any;
      }),
  );
});

export const getPost = async (slug: string) => {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
};
