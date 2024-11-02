import styles from "./Container.module.scss";

export const Container = ({ children }: { children: any }) => {
  return <div className={styles.view}>{children}</div>;
};
