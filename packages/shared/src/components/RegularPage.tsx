import React from "react";
import styles from "./RegularPage.module.scss";
import { Container } from "./Container";

export const RegularPage = ({
  title,
  content,
}: {
  title: string;
  content: any;
}) => {
  return (
    <Container>
      <main className={styles.page}>
        <h1 className={styles.title}>{title}</h1>
        <section className={styles.content}>{content}</section>
      </main>
    </Container>
  );
};
