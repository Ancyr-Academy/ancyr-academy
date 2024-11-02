import styles from "./PageContent.module.scss";
import React from "react";

export const PageContent: React.FC<{ children: any }> = ({ children }) => {
  return <div className={styles.view}>{children}</div>;
};
