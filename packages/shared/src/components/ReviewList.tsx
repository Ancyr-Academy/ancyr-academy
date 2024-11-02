import styles from "./ReviewList.module.scss";
import React from "react";

export const ReviewList: React.FC<{ children: any }> = ({ children }) => {
  return <div className={styles.view}>{children}</div>;
};
