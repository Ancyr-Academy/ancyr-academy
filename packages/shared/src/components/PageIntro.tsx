"use client";

import React from "react";
import styles from "./PageIntro.module.scss";
import { Container } from "./Container";
import { NoSsrPromotional } from "./NoSsrPromotional";

export const PageIntro: React.FC<{
  title: string;
  subtitle: string;
  showPromotional?: boolean;
}> = ({ title, subtitle, showPromotional }) => {
  return (
    <>
      <div className={styles.view}>
        <Container>
          <div className={styles.content}>
            <h6 className={styles.intro_title}>{title}</h6>
            <div className={styles.intro_text}>{subtitle}</div>
          </div>
        </Container>
      </div>
      {showPromotional !== false && <NoSsrPromotional />}
    </>
  );
};
