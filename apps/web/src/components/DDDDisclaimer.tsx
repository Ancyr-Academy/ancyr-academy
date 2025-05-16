"use client";

import styles from "./DDDDisclaimer.module.scss";

export const DDDDisclaimer = ({ tags }: { tags: string[] }) => {
  return (
    <div className={styles.view}>
      <h6 className={styles.title}>
        Je comprends rien au Domain-Driven Design !
      </h6>
      <p className={styles.text}>
        Pas de soucis, c'est le cas pour énormément de développeurs.
        <br />
        <a href={"/workshop-ddd"}>
          Jette un oeil à ça, ça risque de te plaire.
        </a>
      </p>
    </div>
  );
};
