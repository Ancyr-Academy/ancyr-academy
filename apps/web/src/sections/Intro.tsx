"use client";

import styles from "./Intro.module.scss";
import { Button, Container } from "@ancyracademy/shared";

export const Intro = () => {
  return (
    <div className={styles.view}>
      <Container>
        <div className={styles.content}>
          <div className={styles.image_container}>
            <img
              alt="Ancyr Academy"
              src={
                "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/core/logo-alone.png"
              }
            />
          </div>
          <div className={styles.texts}>
            <h6 className={styles.intro_title}>
              Software Engineering
              <br />{" "}
              <span className={styles.intro_title_effect}>for tomorrow</span>
            </h6>
            <p className={styles.intro_text}>
              Développez des compétences qui sont faites pour durer, créez des
              applications à l’épreuve du temps, devenez de véritables seniors.
            </p>
            <Button url="/courses">Voir les cours</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
