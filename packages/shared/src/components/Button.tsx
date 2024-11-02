import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

type Size = "normal" | "big";
type Tint = "primary" | "secondary" | "tertiary";

export const Button: React.FC<{
  disabled?: boolean;
  url?: string;
  children: string;
  wide?: boolean;
  tint?: Tint;
  size?: Size;
}> = ({ url, children, wide, size, disabled, tint }) => {
  const className = classNames(
    styles.view,
    styles.primary,
    {
      [styles.big as any]: size === "big",
    },
    {
      [styles.disabled as any]: disabled,
    },
    {
      [styles.secondary as any]: tint === "secondary",
      [styles.tertiary as any]: tint === "tertiary",
    },
    {
      [styles.wide as any]: wide,
    },
  );
  
  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <a className={className} href={url}>
      {children}
    </a>
  );
};
