"use client";

import styles from "./Header.module.scss";
import React from "react";

const MenuItem: React.FC<{
  url: string;
  children: string;
}> = ({ url, children }) => {
  return (
    <li>
      <a href={url}>{children}</a>
    </li>
  );
};

export const Header: React.FC<{ fullUrl?: boolean }> = ({ fullUrl }) => {
  const prefix = fullUrl ? "https://ancyracademy.fr" : "";
  return (
    <>
      <div className={styles.header}>
        <div className={styles.inner_view}>
          <div>
            <img
              className={styles.logo}
              alt="Ancyr Academy"
              src={
                "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/core/logo-full.png"
              }
            />
          </div>
          <ul className={styles.menu}>
            <MenuItem url={"https://blog.ancyracademy.fr"}>Blog</MenuItem>
            <MenuItem url={"https://youtube.com/@ancyracademyfr"}>
              Youtube
            </MenuItem>
            <MenuItem url={prefix + "/courses"}>E-learning</MenuItem>
            <MenuItem url={prefix + "/training"}>Training</MenuItem>
            <MenuItem url="https://www.youtube.com/@ancyracademy">
              Youtube
            </MenuItem>
          </ul>
        </div>
      </div>
    </>
  );
};
