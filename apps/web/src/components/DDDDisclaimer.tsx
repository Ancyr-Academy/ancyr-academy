"use client";

import styles from "./DDDDisclaimer.module.scss";

export const DDDDisclaimer = ({ tags }: { tags: string[] }) => {
  return (
    <div className={styles.view}>
      <h6 className={styles.title}>
        Maitriser le Domain-Driven Design en <b>6 semaines intensives</b> ?
      </h6>
      <p className={styles.text}>
        Le prochain <b>Workshop DDD</b> est prévu du
        <b> 26 Juin au 31 Juillet</b>.
        <br />
        <br />
        Rejoins <b>7 autres participants</b> pour une formation de haut niveau
        sur le <b>Domain-Driven Design</b> avec un projet qui va challenger tes
        compétences de développeur.
        <a href={"/workshop-ddd"}>Pour plus d'informations, cliquez ici.</a>
      </p>
    </div>
  );
};
