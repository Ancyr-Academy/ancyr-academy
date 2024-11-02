"use client";

import { styled } from "styled-components";
import React from "react";
import { Container } from "../../ui/Container";
import { PageIntro } from "../../ui/PageIntro";
import { mediaQuery, size } from "../../ui/media-query";
import { CourseResume } from "../../components/CourseResume";
import { allCourses } from "ui";

const Page = () => {
  return (
    <main>
      <PageIntro
        subtitle="Retrouvez mes cours disponibles en e-learning"
        title="Cours"
      />
      <Container>
        <List>
          {allCourses.map((course, index) => (
            <CourseResume
              imageUrl={course.imageUrl}
              isFree={course.isFree}
              isHot={course.isHot}
              key={index}
              resume={course.resume}
              title={course.title}
              type={course.type}
              url={course.url}
            />
          ))}
        </List>
      </Container>
    </main>
  );
};

const List = styled.div`
  margin-top: 40px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;

  ${mediaQuery(size.medium)} {
    grid-template-columns: repeat(1, 1fr);
    gap: 12px;
  }
`;

export default Page;
