"use client";

import styles from "./SubIntro.module.scss";
import { Container } from "@ancyracademy/shared";

export const SubIntro = () => {
  return (
    <div className={styles.view}>
      <Container>
        <div className={styles.content}>
          <div className={styles.texts}>
            <h6 className={styles.title}>
              Maitriser des compétences rares en haute demande
            </h6>
            <hr className={styles.separator} />
            <p className={styles.text}>
              Les frameworks vont et viennent,{" "}
              <b>mais les fondamentaux restent</b>. Apprenez des principes
              important et difficile à acquérir comme{" "}
              <b>
                les Tests Unitaires, le CQRS, la Clean Architecture ou le
                Domain-Driven Design
              </b>{" "}
              et cultivez des compétences qui{" "}
              <b>vous seront utiles toute votre vie.</b>
            </p>
            <p className={styles.text}>
              A <b>AncyrAcademy</b>, on ne vous enseigne pas seulement des
              concepts. On vous montre{" "}
              <b>comment les appliquer dans des projets complexes</b> de la vie
              réelle en évitant <b>les pièges les plus douloureux.</b>
            </p>
          </div>
          <div className={styles.image_container}>
            <img
              alt="Ancyr Academy"
              src={
                "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/core/subintro-cqrs-code.png"
              }
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
