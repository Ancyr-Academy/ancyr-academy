import React from "react";
import styles from "./CourseList.module.scss";

export const CourseList: React.FC<{ children: any }> = ({ children }) => {
  return <div className={styles.view}>{children}</div>;
};
