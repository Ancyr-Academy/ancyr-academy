import React from "react";
import { FaStar, FaUser } from "react-icons/fa";
import styles from "./Review.module.scss";

export const Review: React.FC<{
  authorImage?: string;
  authorName: string;
  children: string;
}> = ({ authorImage, authorName, children }) => {
  return (
    <div className={styles.view}>
      <div className={styles.head}>
        {authorImage ? (
          <img className={styles.profile_picture} src={authorImage} />
        ) : (
          <FaUser size={40} />
        )}

        <h6 className={styles.author}>{authorName}</h6>
      </div>
      <p className={styles.content}>{children}</p>
      <div className={styles.stars}>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
    </div>
  );
};
