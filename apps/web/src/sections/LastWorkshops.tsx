"use client";

import styles from "./LastWorkshops.module.scss";
import React from "react";
import { allWorkshops, Container } from "@ancyracademy/shared";
import { SectionTitle } from "../components/SectionTitle";
import { WorkshopResume } from "../components/WorkshopResume";

export const LastWorkshops: React.FC = () => {
  return (
    <Container>
      <SectionTitle>Nos prochains workshops</SectionTitle>
      <div className={styles.view}>
        <div className={styles.list}>
          {allWorkshops.map((course, index) => (
            <WorkshopResume
              key={index}
              imageUrl={course.imageUrl}
              resume={course.resume}
              title={course.title}
              url={course.url}
              nextDates={course.nextDates}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
