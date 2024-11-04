"use client";

import { styled } from "styled-components";
import React from "react";
import { allCourses, Container } from "@ancyracademy/shared";
import { SectionTitle } from "../components/SectionTitle";
import { CourseResume } from "../components/CourseResume";
import { mediaQuery, size } from "../ui/media-query";

export const LastCourses: React.FC = () => {
  return (
    <Container>
      <View>
        <SectionTitle>Derniers Cours</SectionTitle>
        <List>
          {allCourses.map((course, index) => (
            <CourseResume
              imageUrl={course.imageUrl}
              isNew={course.isNew}
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
      </View>
    </Container>
  );
};

const View = styled.div`
  margin-block: 80px;
`;

const List = styled.div`
  margin-top: 40px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  ${mediaQuery(size.medium)} {
    grid-template-columns: repeat(1, 1fr);
    gap: 12px;
  }
`;
