import Link from "next/link";
import { Container } from "@ancyracademy/shared";
import React from "react";
import styles from "./BlogArticles.module.scss";

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
          <div className={styles.blog_post}>
            <Link href={"/blog/" + post.slug} className={styles.blog_thumbnail}>
              <img src={"/posts/" + post.slug + "/thumbnail.png"} />
            </Link>
            <div className={styles.blog_content_section}>
              <h2 className={styles.blog_title}>{post.title}</h2>
              <p
                className={styles.blog_excerpt}
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              />
              <Link href={"/blog/" + post.slug} className={styles.read_more}>
                Lire la suite
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
