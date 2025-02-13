"use client";

import styles from "./LastCourses.module.scss";
import React from "react";
import { allCourses, Container } from "@ancyracademy/shared";
import { SectionTitle } from "../components/SectionTitle";
import { CourseResume } from "../components/CourseResume";

export const LastCourses: React.FC = () => {
  return (
    <Container>
      <div className={styles.view}>
        <SectionTitle>Derniers Cours</SectionTitle>
        <div className={styles.list}>
          {allCourses.map((course, index) => (
            <CourseResume
              imageUrl={course.imageUrl}
              isNew={course.isNew}
              isFree={course.isFree}
              isHot={course.isHot}
              key={index}
              resume={course.resume}
              title={course.title}
              url={course.url}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
