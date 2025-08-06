"use client";

import styles from "./LastCourses.module.scss";
import React from "react";
import { allCourses, Container } from "@ancyracademy/shared";
import { CourseResume } from "../components/CourseResume";
import { SectionTitle } from "../components/SectionTitle";

export const LastCourses: React.FC = () => {
  return (
    <Container>
      <SectionTitle>Nos cours en e-learning</SectionTitle>
      <div className={styles.view}>
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
