import React from "react";
import { styled } from "styled-components";
import {
  IoBook,
  IoCash,
  IoFolderOpen,
  IoInfinite,
  IoPeople,
  IoPlayCircle,
  IoPodium,
  IoTime,
} from "react-icons/io5";
import { pxToRem } from "../ui/font-utils";
import CourseBackground from "../../assets/course-background-colored.png";
import { Container } from "../ui/Container";
import { mediaQuery, size } from "../ui/media-query";

export const Overview: React.FC = () => {
  return (
    <View>
      <Container>
        <Content>
          <Left>
            <Title>Les formations Clean Architecture en TDD</Title>
            <Subtitle>
              Développez des applications de
              <br /> <b>très hautes qualité.</b>
              <br />
              Devenez un véritable <b>développeur Senior.</b>
            </Subtitle>
          </Left>
          <Right>
            <CourseOverview>Contenu dans le cours</CourseOverview>
            <OverviewList>
              <li>
                <IoPodium /> Débutants à Experts
              </li>
              <li>
                <IoBook /> Théorie & Pratique
              </li>
              <li>
                <IoFolderOpen /> 4 Formations
              </li>
              <li>
                <IoPlayCircle /> 30 heures de vidéo HD
              </li>
              <li>
                <IoPeople /> Aide de la communauté
              </li>
              <li>
                <IoInfinite /> Accès à vie
              </li>
              <li>
                <IoTime /> Apprenez à votre rythme
              </li>
              <li>
                <IoCash /> Satisfait ou Remboursé
                <br />
                (30 jours)
              </li>
            </OverviewList>
          </Right>
        </Content>
      </Container>
    </View>
  );
};

const View = styled.div`
  background-image: url("${CourseBackground.src}");
  background-position: center;
  background-size: cover;

  position: relative;
  padding-block: 60px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  gap: 60px;

  ${mediaQuery(size.medium)} {
    flex-direction: column;
    justify-content: initial;
    align-items: initial;

    gap: 40px;
  }
`;
const Left = styled.div`
  flex: 1;
  color: white;
`;
const Title = styled.h1`
  margin-block: 0;
  font-size: ${pxToRem(48)};
`;

const Subtitle = styled.p`
  margin-block: 0;
  margin-top: 40px;

  font-size: ${pxToRem(32)};
  font-weight: 300;

  line-height: 1.3;

  b {
    font-weight: 600;
  }
`;

const Right = styled.div`
  border-radius: 5px;
  background-color: #036372;
  color: white;

  padding-inline: 48px;
  padding-block: 52px;
`;

const CourseOverview = styled.h6`
  font-size: ${pxToRem(24)};
  text-transform: uppercase;

  margin-block: 0;
  margin-bottom: 28px;
`;

const OverviewList = styled.ul`
  list-style: none;
  margin-block: 0;
  padding-inline-start: 0;

  li {
    svg {
      margin-right: 16px;
    }

    display: flex;
    align-items: center;

    font-size: ${pxToRem(24)};
    line-height: 1;
    font-weight: 300;

    padding-block: 12px;
  }
`;
