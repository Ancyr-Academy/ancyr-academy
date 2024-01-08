import React from "react";
import { styled } from "styled-components";
import CourseBackground from "../../assets/course-background.jpg";
import { pxToRem } from "../ui/font-utils";
import { Container } from "../ui/Container";

export const Intro: React.FC<{ title: string }> = ({ title }) => {
  return (
    <View>
      <ImageContainer>
        <Container>
          <Title>{title}</Title>
        </Container>
      </ImageContainer>
    </View>
  );
};

const View = styled.div`
  background-image: url("${CourseBackground.src}");
  background-position: center;
  background-size: cover;
  padding-block: 120px;
  position: relative;

  height: 240px;
`;

const ImageContainer = styled.div`
  background-color: rgba(27, 128, 113, 0.9);

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin-block: 0;
  max-width: 700px;

  color: white;
  font-size: ${pxToRem(54)};
  font-weight: 700;
  text-align: center;
  line-height: 1.3;

  z-index: 2;
`;
