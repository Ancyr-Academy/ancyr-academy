"use client";

import styles from "./DDDDisclaimer.module.scss";

export const DDDDisclaimer = ({ tags }: { tags: string[] }) => {
  return (
    <div className={styles.view}>
      <h6 className={styles.title}>
        Tu veux skill-up tes compétences d'architectre logicielle ?
      </h6>
      <p className={styles.text}>
        Je donne un Workshop introductif et complet sur le Domain-Driven Design
        du 10 Mars au 21 Avril 2026.
        <br />
        <a href={"/workshop-ddd"}>
          Il reste encore quelques places, alors inscris-toi vite !
        </a>
      </p>
    </div>
  );
};
