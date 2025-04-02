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
  IoLogoDiscord,
  IoMail,
  IoPeople,
  IoPerson,
  IoPricetag,
  IoReader,
  IoStar,
} from "react-icons/io5";
import { CompleteReviewList } from "./ReviewList";
import { CourseType } from "../content/course";
import { useCurrentDiscount } from "../discount-hooks";
import { NoSsrPromotional } from "./NoSsrPromotional";
import { CourseList } from "./CourseList";
import { Course } from "./Course";
import { IoIosClock, IoLogoLinkedin } from "react-icons/io";
import { InlineWidget } from "react-calendly";

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
            <IoPricetag />
            <span>{price.toFixed(2)}€ HT</span>
          </p>
        </section>

        <h4 className={styles.practical_title}>Participer</h4>
        <p className={styles.practical_subtitle}>
          Pour rejoindre le Workshop, n'hésitez pas à me joindre.
        </p>
        <section>
          <p className={styles.practical_point}>
            <IoLogoDiscord />
            <span>Discord : @ancyrweb</span>
          </p>
          <p className={styles.practical_point}>
            <IoMail />
            <span>
              <a href={"mailto:anthony@ancyracademy.fr"}>M'envoyer un e-mail</a>
            </span>
          </p>
          <p className={styles.practical_point}>
            <IoLogoLinkedin />
            <span>
              LinkedIn :{" "}
              <a href={"https://www.linkedin.com/in/anthony-cyrille/"}>
                Anthony Cyrille
              </a>
            </span>
          </p>
          <p className={styles.practical_point}>
            <IoCalendar />
            <span>
              Calendly :{" "}
              <a href={"https://calendly.com/ancyr-academy/ddd"}>
                Workshop DDD
              </a>
            </span>
          </p>
        </section>
      </div>
      <InlineWidget
        url="https://calendly.com/ancyr-academy/ddd"
        styles={{
          height: "1200px",
        }}
        pageSettings={{
          backgroundColor: "101818",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "5AE0CC",
          textColor: "FFFFFF",
        }}
      />
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
  practicalInfo: (content: any) =>
    ({
      id: "practical-info",
      icon: LuTable,
      menuTitle: "Infos pratiques",
      subtitle: "Comment participer",
      title: "Informations Pratiques",
      content,
    }) as const,
} as const;
