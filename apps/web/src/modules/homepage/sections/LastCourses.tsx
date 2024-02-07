"use client";

import { styled } from "styled-components";
import React from "react";
import { Article } from "../components/Article";
import { Container } from "../../ui/Container";
import { pxToRem } from "../../ui/font-utils";
import { SectionTitle } from "../components/SectionTitle";
import { Course } from "../components/Course";
import { allCourses } from "../../formations/data";

export const LastCourses: React.FC = () => {
  return (
    <Container>
      <View>
        <SectionTitle>Dernières Formations</SectionTitle>
        <List>
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
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
`;
