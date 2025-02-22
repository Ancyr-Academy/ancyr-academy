"use client";

import hljs from "highlight.js";

import { Container } from "@ancyracademy/shared";
import styles from "./BlogPage.module.scss";
import { useEffect } from "react";

import "./Highlight.scss";

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
    <Container size={"small"}>
      <div className={styles.page}>
        <h1 className={styles.title}>{title}</h1>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </Container>
  );
};
