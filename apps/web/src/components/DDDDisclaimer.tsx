"use client";

import styles from "./DDDDisclaimer.module.scss";

export const DDDDisclaimer = ({ tags }: { tags: string[] }) => {
  if (tags.includes("domain-driven design") === false) {
    return null;
  }

  return (
    <div className={styles.view}>
      <h6 className={styles.title}>
        Vous voulez approfondir vos compétences en DDD ?
      </h6>
      <p className={styles.text}>
        J'ouvre un <b>Workshop DDD</b> de 7 sessions étalées sur 7 semaines, du{" "}
        <b>29 Avril au 10 Juin</b>.
        <br />
        <a href={"/workshop-ddd"}>Pour plus d'informations, cliquez ici.</a>
      </p>
    </div>
  );
};
