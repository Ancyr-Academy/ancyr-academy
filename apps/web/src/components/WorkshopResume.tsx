import styles from "./WorkshopResume.module.scss";
import React from "react";
import { Button } from "@ancyracademy/shared";

export const WorkshopResume: React.FC<{
  title: string;
  resume: string;
  imageUrl: string;
  url: string;
  nextDates: string;
}> = ({ title, resume, imageUrl, url, nextDates }) => {
  return (
    <div className={styles.view}>
      <div className={styles.head}>
        <div className={styles.image_container}>
          <img src={imageUrl} />
        </div>
        <div className={styles.texts}>
          <h6 className={styles.title}>{title}</h6>
          <p className={styles.resume}>{resume}</p>
          <p className={styles.next_dates}>
            Prochaine dates : <b>{nextDates}</b>
          </p>
        </div>
      </div>
      <Button size="big" url={url} wide>
        Découvrir le Workshop
      </Button>
    </div>
  );
};
