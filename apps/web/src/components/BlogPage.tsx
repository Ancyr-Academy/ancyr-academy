"use client";

import hljs from "highlight.js";

import { Container } from "@ancyracademy/shared";
import styles from "./BlogPage.module.scss";
import { useEffect } from "react";

import "./Highlight.scss";
import { BlogAside } from "./BlogAside";

hljs.registerLanguage(
  "typescript",
  require("highlight.js/lib/languages/typescript"),
);

export const BlogPage = ({
  content,
  title,
}: {
  content: string;
  title: string;
}) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <Container>
      <div className={styles.intro}>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.page}>
        <article className={styles.article}>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </article>
        <aside className={styles.aside}>
          <BlogAside />
        </aside>
      </div>
    </Container>
  );
};
