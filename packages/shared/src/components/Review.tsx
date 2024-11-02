import React from "react";
import { FaStar } from "react-icons/fa";
import styles from "./Review.module.scss";

export const Review: React.FC<{
  authorImage?: string;
  authorName: string;
  children: string;
}> = ({ authorImage, authorName, children }) => {
  return (
    <a className={styles.view}>
      <a className={styles.head}>
        <img
          className={styles.profile_picture}
          src={
            authorImage ??
            "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/core/user.png"
          }
        />
        <h6 className={styles.author}>{authorName}</h6>
      </a>
      <p className={styles.content}>{children}</p>
      <div className={styles.stars}>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
    </a>
  );
};
