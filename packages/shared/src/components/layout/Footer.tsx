"use client";

import React from "react";
import { FaDiscord, FaLinkedin, FaPodcast, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.scss";
import { Container } from "../Container";

export const Footer: React.FC = () => {
  return (
    <div className={styles.view}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.resume_section}>
            <h6 className={styles.title}>Ancyr Academy</h6>
            <p className={styles.subtitle}>Par Anthony Cyrille</p>
            <div className={styles.icons}>
              <a
                className={styles.icon}
                href="https://www.linkedin.com/in/anthony-cyrille/"
              >
                <FaLinkedin />
              </a>
              <a
                className={styles.icon}
                href="https://www.youtube.com/@ancyracademyfr"
              >
                <FaYoutube />
              </a>
              <a
                className={styles.icon}
                href="https://smartlink.ausha.co/ancyr-academy-podcast"
              >
                <FaPodcast />
              </a>
              <a className={styles.icon} href="https://discord.gg/TzaU5uFrjk">
                <FaDiscord />
              </a>
            </div>
            <p className={styles.copyright}>
              © 2023-présent Anthony Cyrille.
              <br />
              Tous droits réservés.
            </p>
          </div>
          <div className={styles.links_section}>
            <div className={styles.single_section}>
              <h6 className={styles.section_title}>Formations</h6>
              <div className={styles.section_links}>
                <a
                  className={styles.section_single_link}
                  href="https://ancyracademy.fr/clean-architecture"
                >
                  Clean Architecture
                </a>
                <a
                  className={styles.section_single_link}
                  href="https://ancyracademy.fr/test-driven-development"
                >
                  Test-Driven Development
                </a>
                <a
                  className={styles.section_single_link}
                  href="https://courses.ancyracademy.fr/p/essentials-principes-solid"
                >
                  Principes SOLID
                </a>
              </div>
            </div>
            <div className={styles.single_section}>
              <h6 className={styles.section_title}>Liens</h6>
              <div className={styles.section_links}>
                <a className={styles.section_single_link} href="#">
                  Politique de Confidentialité
                </a>
                <a className={styles.section_single_link} href="#">
                  Conditions d'Utilisations
                </a>
                <a className={styles.section_single_link} href="#">
                  Mentions Légales
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
