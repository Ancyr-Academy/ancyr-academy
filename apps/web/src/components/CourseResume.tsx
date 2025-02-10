import styles from "./CourseResume.module.scss";
import { styled } from "styled-components";
import React from "react";
import { Button } from "@ancyracademy/shared";

export const CourseResume: React.FC<{
  type: string;
  title: string;
  resume: string;
  imageUrl: string;
  url: string;
  isHot?: boolean;
  isFree?: boolean;
  isNew?: boolean;
}> = ({ type, title, resume, imageUrl, url, isNew, isHot, isFree }) => {
  return (
    <div className={styles.view}>
      {isNew ? (
        <div className={styles.hot_badge}>OFFRE DE LANCEMENT</div>
      ) : null}
      {isHot ? <div className={styles.hot_badge}>Hot</div> : null}
      {isFree ? <div className={styles.hot_badge}>GRATUIT</div> : null}
      <div className={styles.head}>
        <div className={styles.image_container}>
          <img src={imageUrl} />
        </div>
        <div className={styles.texts}>
          <h6 className={styles.title}>{title}</h6>
          <p className={styles.resume}>{resume}</p>
        </div>
      </div>
      <Button size="big" url={url} wide>
        Découvrir le cours
      </Button>
    </div>
  );
};
