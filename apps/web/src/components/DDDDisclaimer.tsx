"use client";

import styles from "./DDDDisclaimer.module.scss";

export const DDDDisclaimer = ({ tags }: { tags: string[] }) => {
  return (
    <div className={styles.view}>
      <h6 className={styles.title}>
        Pour maitriser le Domain-Driven Design et le design orienté objet
      </h6>
      <p className={styles.text}>
        J'ouvre un <b>Workshop DDD</b> de 6 sessions étalées sur 6 semaines, du{" "}
        <b>26 Juin au 31 Juillet</b>.
        <br />
        <a href={"/workshop-ddd"}>Pour plus d'informations, cliquez ici.</a>
      </p>
    </div>
  );
};
