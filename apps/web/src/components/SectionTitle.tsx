import styles from "./SectionTitle.module.scss";

export const SectionTitle = ({ children }: { children: any }) => {
  return (
    <>
      <h6 className={styles.view}>{children}</h6>
      <hr className={styles.separator} />
    </>
  );
};
