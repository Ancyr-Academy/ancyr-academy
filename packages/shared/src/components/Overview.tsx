import React from "react";
import { Container } from "./Container";
import styles from "./Overview.module.scss";

export const Overview: React.FC<{
  title: string;
  subtitle: any;
  points: Array<{
    Icon: any;
    text: string;
  }>;
}> = ({ title, subtitle, points }) => {
  return (
    <div className={styles.view}>
      <Container>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
          <div className={styles.right}>
            <h6 className={styles.course_overview}>Contenu dans le cours</h6>
            <ul className={styles.overview_list}>
              {points.map((point, index) => (
                <li key={index}>
                  <point.Icon />
                  {point.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};
