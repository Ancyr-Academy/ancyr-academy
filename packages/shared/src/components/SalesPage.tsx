import styles from "./SalesPage.module.scss";
import { Container } from "./Container";
import React from "react";
import {
  IoBook,
  IoCash,
  IoCheckmarkCircleOutline,
  IoFolderOpen,
  IoPeople,
  IoPerson,
  IoReader,
  IoStar,
} from "react-icons/io5";
import { CompleteReviewList } from "./ReviewList";
import { LuTable } from "react-icons/lu";

type Section = {
  id: string;
  icon: any;
  menuTitle: string;
  subtitle: string;
  title: string;
  content: any;
};
export const SalesPage = ({ sections }: { sections: Section[] }) => {
  return (
    <Container>
      <div className={styles.view}>
        <div className={styles.menu_container}>
          <div className={styles.menu}>
            {sections.map((section, i) => {
              return (
                <MenuItem
                  key={i}
                  title={section.menuTitle}
                  href={`#${section.id}`}
                  Icon={section.icon}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.content}>
          {sections.map((section, i) => (
            <section className={styles.section} key={i} id={section.id}>
              <h3 className={styles.content_subtitle}>{section.subtitle}</h3>
              <h2 className={styles.content_title}>{section.title}</h2>
              <div className={styles.content}>{section.content}</div>
            </section>
          ))}
        </div>
      </div>
    </Container>
  );
};

const MenuItem = ({
  title,
  href,
  Icon,
}: {
  title: string;
  href: string;
  Icon: any;
}) => {
  return (
    <a className={styles.menu_link} href={href}>
      <Icon />
      <span>{title}</span>
    </a>
  );
};

export const SellingList = ({ elements }: { elements: string[] }) => {
  return (
    <ul className={styles.selling_list}>
      {elements.map((element, index) => (
        <li key={index}>
          <IoCheckmarkCircleOutline color={"#5AE0CC"} />
          <span>{element}</span>
        </li>
      ))}
    </ul>
  );
};

export const Professor = () => {
  return (
    <div className={styles.professor_row}>
      <img
        className={styles.professor_avatar}
        src={
          "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/core/ancyr.jpg"
        }
      />
      <p className={styles.professor_text}>
        Je suis Anthony Cyrille. Après plus de 15 ans d’expérience dans le
        développement logiciel, j’ai décidé d’enseigner tout ce que l’industrie
        m’a appris :{" "}
        <b>
          les compétences les plus indispensables du métier, celles qui font la
          différence, celles qui durent.
        </b>
      </p>
    </div>
  );
};

export const MoneyBack = () => {
  return (
    <SellingParagraph>
      Des milliers de développeurs ont adoptés nos formations sans retour en
      arrière. Mais si c'est pas votre cas, pas de problèmes !{" "}
      <b>
        Vous avez 30 jours pour obtenir un remboursement, aucune justification
        requise.
      </b>
      <img
        className={styles.moneyback_image}
        src={
          "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/core/moneyback.png"
        }
      />
    </SellingParagraph>
  );
};

export const SellingParagraph = ({ children }: { children: any }) => {
  return <p className={styles.selling_paragraph}>{children}</p>;
};

export const buildingBlocks = {
  professor: {
    id: "professor",
    icon: IoPerson,
    menuTitle: "Instructeur",
    subtitle: "Instructeur",
    title: "Qui enseigne ce cours ?",
    content: <Professor />,
  } as const,
  reviews: {
    id: "reviews",
    icon: IoStar,
    menuTitle: "Avis",
    subtitle: "Ils en parlent mieux que nous",
    title: "Qu'en disent les élèves ?",
    content: <CompleteReviewList />,
  } as const,
  moneyback: {
    id: "moneyback",
    icon: IoCash,
    menuTitle: "Garanties",
    subtitle: "Et si c'est pas pour moi ?",
    title: "30 jours pour l'adopter",
    content: <MoneyBack />,
  } as const,
  bundles: (content: any) =>
    ({
      id: "bundles",
      icon: IoFolderOpen,
      menuTitle: "Bundles",
      subtitle: "Ils sont souvent achetés ensemble",
      title: "Bundles",
      content,
    }) as const,
  courses: (content: any) =>
    ({
      id: "courses",
      icon: LuTable,
      menuTitle: "Cours",
      subtitle: "Conçus sur mesure",
      title: "Cours",
      content,
    }) as const,
  about: (content: any) =>
    ({
      id: "about",
      icon: IoBook,
      menuTitle: "A propos",
      subtitle: "Conçu avec grand soin",
      title: "A propos du cours",
      content,
    }) as const,
  content: (items: string[]) => ({
    id: "content",
    icon: IoReader,
    menuTitle: "Contenu",
    subtitle: "La théorie et la pratique",
    title: "Ce que vous allez apprendre",
    content: <SellingList elements={items} />,
  }),
  target: (items: string[]) => ({
    id: "target",
    icon: IoPeople,
    menuTitle: "Cible",
    subtitle: "Cible visée",
    title: "A qui s'adresse ce cours ?",
    content: <SellingList elements={items} />,
  }),
} as const;
