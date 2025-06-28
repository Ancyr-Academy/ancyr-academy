"use client";

import styles from "./Stats.module.scss";
import { Container } from "@ancyracademy/shared";

export const Stats = () => {
  return (
    <Container>
      <div className={styles.view}>
        <h3 className={styles.title}>Vous êtes au bon endroit</h3>
        <p className={styles.subtitle}>Nos cours ont fait leur preuves.</p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.stat_outer}>
              <div className={styles.stat_inner}>
                <h6 className={styles.stat_value}>+1700</h6>
              </div>
            </div>
            <p className={styles.stat_text}>
              Plus de 1700 élèves ont suivi nos cours en lignes et nos
              formations
            </p>
          </div>
          <div className={styles.stat}>
            <div className={styles.stat_outer}>
              <div className={styles.stat_inner}>
                <h6 className={styles.stat_value}>+50k</h6>
              </div>
            </div>
            <p className={styles.stat_text}>
              Plus de 50.000 heures de vidéos ont été visionnées par nos élèves
            </p>
          </div>
          <div className={styles.stat}>
            <div className={styles.stat_outer}>
              <div className={styles.stat_inner}>
                <h6 className={styles.stat_value}>99%</h6>
              </div>
            </div>
            <p className={styles.stat_text}>
              Nos étudiants sont hautement satisfaits de nos formations
              d'excellence
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
