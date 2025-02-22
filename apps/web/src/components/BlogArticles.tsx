import Link from "next/link";
import { Container } from "@ancyracademy/shared";
import React from "react";
import styles from "./BlogArticle.module.scss";

export type ArticleResume = {
  title: string;
  slug: string;
  excerpt: string;
};

export const BlogArticles = ({ posts }: { posts: Array<any> }) => {
  return (
    <Container>
      <div className={styles.blog_section}>
        {posts.map((post) => (
          <Link
            href={"/blog/" + post.slug}
            key={post.slug}
            className={styles.blog_post_link}
          >
            <div className={styles.blog_post}>
              <h2 className={styles.blog_title}>{post.title}</h2>
              <p
                className={styles.blog_excerpt}
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              />
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};
