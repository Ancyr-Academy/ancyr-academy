import styles from "./SellingPage.module.scss";
import { Container } from "./Container";
import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

type Section = {
  id: string;
  icon: any;
  menuTitle: string;
  subtitle: string;
  title: string;
  content: any;
};
export const SellingPage = ({ sections }: { sections: Section[] }) => {
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
