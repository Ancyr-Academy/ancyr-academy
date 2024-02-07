"use client";

import { styled } from "styled-components";
import React from "react";
import { Book } from "../../modules/books/components/Book";
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
          {" "}
          {allCourses.map((course, index) => (
            <Course
              imageUrl={course.imageUrl}
              isFree={course.isFree}
              isHot={course.isHot}
              key={index}
              keyPoints={course.keyPoints}
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
  display: flex;
  flex-direction: column;
  gap: 40px;

  margin-inline: auto;
  margin-top: 80px;

  ${mediaQuery(size.small)} {
    gap: 80px;
  }
`;

export default Page;
