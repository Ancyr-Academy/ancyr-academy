"use client";

import styles from "./Header.module.scss";
import React from "react";
import { Button } from "../Button";

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
      <div className={styles.view}>
        <div className={styles.inner_view}>
          <a href={"https://ancyracademy.fr"}>
            <img
              className={styles.logo}
              alt="Ancyr Academy"
              src={
                "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/core/logo-white.png"
              }
            />
          </a>
          <ul className={styles.menu}>
            <MenuItem url={"https://blog.ancyracademy.fr"}>Blog</MenuItem>
            <MenuItem url={"https://youtube.com/@ancyracademyfr"}>
              Youtube
            </MenuItem>
            <MenuItem url={prefix + "/courses"}>Cours</MenuItem>
            <MenuItem url={prefix + "/workshops"}>Workshops</MenuItem>
          </ul>
          <div className={styles.separator}></div>
          <Button url={"https://courses.ancyracademy.fr"}>
            Espace Etudiants
          </Button>
        </div>
      </div>
    </>
  );
};
