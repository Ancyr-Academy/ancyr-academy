import styles from "./Container.module.scss";

export const Container = ({
  children,
  size,
}: {
  children: any;
  size?: "normal" | "small";
}) => {
  return (
    <div className={size === "small" ? styles.small : styles.normal}>
      {children}
    </div>
  );
};
