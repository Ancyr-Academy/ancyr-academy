import React from "react";
import {
  IoBook,
  IoCash,
  IoFolderOpen,
  IoInfinite,
  IoPeople,
  IoPlayCircle,
  IoPodium,
  IoTime,
} from "react-icons/io5";
import { Container } from "./Container";
import styles from "./Overview.module.scss";

export const Overview: React.FC = () => {
  return (
    <div className={styles.view}>
      <Container>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.title}>
              Les formations Clean Architecture en TDD
            </h1>
            <p className={styles.subtitle}>
              Développez des applications de
              <br /> <b>très hautes qualité.</b>
              <br />
              Devenez un véritable <b>développeur Senior.</b>
            </p>
          </div>
          <div className={styles.right}>
            <h6 className={styles.course_overview}>Contenu dans le cours</h6>
            <ul className={styles.overview_list}>
              <li>
                <IoPodium /> Débutants à Experts
              </li>
              <li>
                <IoBook /> Théorie & Pratique
              </li>
              <li>
                <IoFolderOpen /> 4 Formations
              </li>
              <li>
                <IoPlayCircle /> 30 heures de vidéo HD
              </li>
              <li>
                <IoPeople /> Aide de la communauté
              </li>
              <li>
                <IoInfinite /> Accès à vie
              </li>
              <li>
                <IoTime /> Apprenez à votre rythme
              </li>
              <li>
                <IoCash /> Satisfait ou Remboursé
                <br />
                (30 jours)
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};
