"use client";

import { styled } from "styled-components";
import React from "react";
import { Container } from "../../modules/ui/Container";
import { PageIntro } from "../../modules/ui/PageIntro";
import { mediaQuery, size } from "../../modules/ui/media-query";
import { Course } from "../../modules/homepage/components/Course";
import { allCourses } from "../../modules/formations/data";

const Page = () => {
  return (
    <main>
      <PageIntro
        subtitle="Retrouvez mes formations & cours techniques"
        title="Formations"
      />
      <Container>
        <List>
          {allCourses.map((course, index) => (
            <Course
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
