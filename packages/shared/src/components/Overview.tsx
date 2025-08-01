import React from "react";
import { Container } from "./Container";
import styles from "./Overview.module.scss";
import {
  IoBook,
  IoCalendar,
  IoCash,
  IoCode,
  IoInfinite,
  IoPeople,
  IoPlayCircle,
  IoPodium,
  IoTime,
} from "react-icons/io5";
import { Button } from "./Button";

type Point = {
  Icon: any;
  text: string;
};
export const Overview: React.FC<{
  title: string;
  pretitle?: string;
  subtitle: any;
  points: Point[];
  button?: {
    title: string;
    href: string;
  };
}> = ({ title, pretitle, subtitle, points, button }) => {
  return (
    <div className={styles.view}>
      <Container>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.pre_title}>
              {pretitle ?? "Formation en e-learning"}
            </h1>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            {!!button && (
              <Button url={button.href} size={"big"}>
                {button.title}
              </Button>
            )}
          </div>
          <div className={styles.right}>
            <h6 className={styles.course_overview}>Contenu dans le cours</h6>
            <ul className={styles.overview_list}>
              {points.map((point, index) => (
                <li key={index}>
                  <point.Icon />
                  {point.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export const coursePoints = ({ hours }: { hours: number }) => [
  {
    Icon: IoPodium,
    text: "Débutants à Experts",
  },
  {
    Icon: IoBook,
    text: "Théorie & Pratique",
  },
  {
    Icon: IoPlayCircle,
    text: hours + " heures de vidéo HD",
  },
  {
    Icon: IoPeople,
    text: "Aide de la communauté",
  },
  {
    Icon: IoInfinite,
    text: "Accès à vie",
  },
  {
    Icon: IoTime,
    text: "Apprenez à votre rythme",
  },
  {
    Icon: IoCash,
    text: "Satisfait ou Remboursé",
  },
];

export const workshopPoints = ({ hours }: { hours: number }) => [
  {
    Icon: IoPodium,
    text: "Débutants à Experts",
  },
  {
    Icon: IoBook,
    text: "Théorie & Pratique",
  },
  {
    Icon: IoCode,
    text: "Exercices exigeants",
  },
  {
    Icon: IoPlayCircle,
    text: hours + " heures de Workshop",
  },
  {
    Icon: IoCalendar,
    text: "1 session par semaine",
  },
  {
    Icon: IoCalendar,
    text: "7 sessions au total",
  },
  {
    Icon: IoCash,
    text: "Satisfait ou Remboursé",
  },
];
