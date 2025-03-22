import path from "node:path";
import * as fs from "node:fs";
import matter from "gray-matter";
import { markdownToHtml } from "../../markdown";
import { ArticleResume, BlogArticles } from "../../components/BlogArticles";

const Page = async () => {
  const postsPath = path.resolve("src", "posts");

  const posts = fs.readdirSync(postsPath);

  const data: ArticleResume[] = await Promise.all(
    posts.map(async (filename): Promise<ArticleResume> => {
      const fullPath = path.resolve("src", "posts", filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const parsed = matter(fileContents, {
        excerpt: true,
      });

      return {
        title: parsed.data.title,
        slug: filename.replace(".md", ""),
        excerpt: await markdownToHtml(parsed.excerpt!),
        date: parsed.data.date,
        categories: parsed.data.categories,
        tags: parsed.data.tags,
      };
    }),
  );

  const sorted = data.sort((a, b) => b.date.getTime() - a.date.getTime());

  return <BlogArticles posts={sorted} />;
};

export default Page;
