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
      };
    }),
  );

  return <BlogArticles posts={data} />;
};

export default Page;
