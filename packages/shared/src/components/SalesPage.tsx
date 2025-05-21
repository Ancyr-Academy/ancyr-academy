import React from "react";
import { LuTable } from "react-icons/lu";

import styles from "./SalesPage.module.scss";
import { Container } from "./Container";
import {
  IoBook,
  IoCalendar,
  IoCash,
  IoCheckmark,
  IoCheckmarkCircleOutline,
  IoDocument,
  IoFolderOpen,
  IoMap,
  IoPeople,
  IoPerson,
  IoReader,
  IoStar,
} from "react-icons/io5";
import { CompleteReviewList } from "./ReviewList";
import { CourseType } from "../content/course";
import { useCurrentDiscount } from "../discount-hooks";
import { NoSsrPromotional } from "./NoSsrPromotional";
import { CourseList } from "./CourseList";
import { Course } from "./Course";
import { IoIosClock } from "react-icons/io";

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
      <SellingParagraph>
        Je suis Anthony Cyrille. Après plus de 15 ans d’expérience dans le
        développement logiciel, j’ai décidé d’enseigner tout ce que l’industrie
        m’a appris :{" "}
        <b className={styles.glow}>
          les compétences les plus indispensables du métier, celles qui font la
          différence, celles qui durent.
        </b>
      </SellingParagraph>
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

export const WorkshopMoneyBack = ({ days }: { days?: number }) => {
  return (
    <SellingParagraph>
      Des milliers de développeurs ont adoptés nos formations sans retour en
      arrière. Mais si c'est pas votre cas, pas de problèmes !{" "}
      <b>
        Vous pouvez bénéficier des 2 premières sessions de ce Workshop et
        demander un remboursement sans justification.
      </b>
      <br />
      <br />
      Mais nous sommes convaincus que vous allez l'adorer.
    </SellingParagraph>
  );
};

export const SellingParagraph = ({ children }: { children: any }) => {
  return <p className={styles.selling_paragraph}>{children}</p>;
};

export const Courses = ({
  courses,
  showDiscount,
}: {
  courses: CourseType[];
  showDiscount?: boolean;
}) => {
  const discount = useCurrentDiscount();

  return (
    <>
      {showDiscount !== false && <NoSsrPromotional />}
      <CourseList>
        {courses.map((course) => (
          <Course
            key={course.id}
            imageUrl={course.imageUrl}
            isHot={course.isHot}
            price={course.price}
            status={course.status}
            title={course.title}
            discount={showDiscount !== false ? discount : undefined}
            previewUrl={course.previewUrl}
          >
            {course.resume}
          </Course>
        ))}
      </CourseList>
    </>
  );
};

export const PracticalInformations = ({
  dates,
  hours,
  requirements,
  location,
  price,
}: {
  dates: string;
  hours: string;
  requirements: string[];
  location: string;
  price: number;
}) => {
  return (
    <div className={styles.practical}>
      <div className={styles.practical_view}>
        <h4 className={styles.practical_title}>Prérequis</h4>
        <section className={styles.practical_section}>
          {requirements.map((r) => (
            <p key={r} className={styles.practical_point}>
              <IoCheckmark />
              <span>{r}</span>
            </p>
          ))}
        </section>

        <h4 className={styles.practical_title}>Informations</h4>
        <section className={styles.practical_section}>
          <p className={styles.practical_point}>
            <IoCalendar />
            <span>{dates}</span>
          </p>
          <p className={styles.practical_point}>
            <IoIosClock />
            <span>{hours}</span>
          </p>
          <p className={styles.practical_point}>
            <IoDocument />
            <span>
              <a
                href={
                  "https://docs.google.com/document/d/1emoZ7Ur8uP6VewZX30zoTO6Dznk013vkrimzjF0-QfM/edit?usp=sharing"
                }
              >
                Conditions Générales de Vente
              </a>
            </span>
          </p>
          <p className={styles.practical_point}>
            <IoDocument />
            <span>
              <a
                href={
                  "https://docs.google.com/document/d/1RRjsTiMehN8EU2Rn8d-lzB0xlFw7MMTl3pNXcLomcrY/edit?usp=sharing"
                }
              >
                Règlement Intérieur
              </a>
            </span>
          </p>
          <p className={styles.practical_point}>
            <IoPeople />
            <span>Groupe de 6 à 8 personnes</span>
          </p>
          <p className={styles.practical_point}>
            <IoPeople />
            <span>
              <a href={"https://calendly.com/ancyr-academy/ddd"}>
                Tarification & Autres questions
              </a>
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export const WorkshopProgram = ({
  elements,
}: {
  elements: Array<{
    title: string;
    points: string[];
  }>;
}) => {
  return (
    <div className={styles.workshop_program}>
      {elements.map((e, i) => (
        <section key={i}>
          <h5 className={styles.workshop_program_title}>{e.title}</h5>
          <ul className={styles.selling_list}>
            {e.points.map((point, i) => (
              <li key={i}>
                <IoCheckmarkCircleOutline color={"#5AE0CC"} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
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
  workshopMoneyback: {
    id: "moneyback",
    icon: IoCash,
    menuTitle: "Garanties",
    subtitle: "Et si c'est pas pour moi ?",
    title: "2 sessions d'essai",
    content: <WorkshopMoneyBack />,
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
      subtitle: "De quoi ça s'agit ?",
      title: "Dans ce cours",
      content,
    }) as const,
  plan: (content: any) =>
    ({
      id: "about",
      icon: IoMap,
      menuTitle: "Programme",
      subtitle: "Plan de cours",
      title: "Programme",
      content,
    }) as const,
  outcomes: (items: string[]) => ({
    id: "results",
    icon: IoReader,
    menuTitle: "Résultats",
    subtitle: "Ce que vous saurez faire",
    title: "Après ce cours, vous saurez...",
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
  reserve: (content: any) =>
    ({
      id: "reserve",
      icon: LuTable,
      menuTitle: "Réserver",
      subtitle: "Comment participer",
      title: "Réserver",
      content,
    }) as const,
} as const;
