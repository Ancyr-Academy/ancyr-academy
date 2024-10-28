"use client";

import React from "react";
import { styled } from "styled-components";
import {
  FaLinkedin,
  FaYoutube,
  FaSpotify,
  FaQuora,
  FaPodcast,
} from "react-icons/fa";
import { pxToRem } from "./font-utils";
import { Container } from "./Container";
import { mediaQuery, size } from "./media-query";

export const Footer: React.FC = () => {
  return (
    <View>
      <Container>
        <Inner>
          <ResumeSection>
            <Title>Ancyr Academy</Title>
            <SubTitle>Par Anthony Cyrille</SubTitle>
            <Icons>
              <Icon href="https://www.linkedin.com/in/anthony-cyrille/">
                <FaLinkedin />
              </Icon>
              <Icon href="https://www.youtube.com/channel/UCeWmlEby64lJUiDJDQ3Y8Dw">
                <FaYoutube />
              </Icon>
              <Icon href="https://smartlink.ausha.co/ancyr-academy-podcast">
                <FaPodcast />
              </Icon>
            </Icons>
            <Copyright>
              © 2023-présent Anthony Cyrille.
              <br />
              Tous droits réservés.
            </Copyright>
          </ResumeSection>
          <LinksSection>
            <SingleSection>
              <SectionTitle>Formations</SectionTitle>
              <SectionLinks>
                <SectionSingleLink href="/clean-architecture">
                  Clean Architecture
                </SectionSingleLink>
                <SectionSingleLink href="https://courses.ancyracademy.fr/p/essentials-tests-unitaires">
                  Tests Unitaires
                </SectionSingleLink>
                <SectionSingleLink href="https://courses.ancyracademy.fr/p/essentials-principes-solid">
                  Principes SOLID
                </SectionSingleLink>
              </SectionLinks>
            </SingleSection>
            <SingleSection>
              <SectionTitle>Liens</SectionTitle>
              <SectionLinks>
                <SectionSingleLink href="#">
                  Politique de Confidentialité
                </SectionSingleLink>
                <SectionSingleLink href="#">
                  Conditions d'Utilisations
                </SectionSingleLink>
                <SectionSingleLink href="#">Mentions Légales</SectionSingleLink>
              </SectionLinks>
            </SingleSection>
          </LinksSection>
        </Inner>
      </Container>
    </View>
  );
};

const View = styled.div`
  border-top: 1px solid #c0c0c0;
  padding-block: 80px;
  margin-top: 80px;

  ${mediaQuery(size.medium)} {
    padding-block: 60px;
  }
`;
const Inner = styled.div`
  display: flex;
  justify-content: space-between;

  ${mediaQuery(size.medium)} {
    flex-direction: column;
    justify-content: initial;
    gap: 60px;
  }

  ${mediaQuery(size.small)} {
    gap: 30px;
  }
`;

const ResumeSection = styled.div``;

const Title = styled.h6`
  margin-block: 0;

  text-transform: uppercase;
  font-size: ${pxToRem(21)};
  font-weight: 700;
  color: var(--color-primary);
`;

const SubTitle = styled.p`
  margin-block: 0;
  margin-bottom: 10px;

  font-size: ${pxToRem(20)};
  font-weight: 300;
  color: #3e3e3e;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;

  margin-top: 24px;
  gap: 20px;
`;

const Icon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #333;
  font-size: ${pxToRem(28)};
`;

const Copyright = styled.p`
  margin-block: 0;
  margin-top: 24px;

  font-size: ${pxToRem(20)};
  font-weight: 300;
  color: #999;
`;

const LinksSection = styled.div`
  display: flex;
  gap: 80px;

  ${mediaQuery(size.medium)} {
    flex-direction: column;
    justify-content: initial;
    gap: 60px;
  }

  ${mediaQuery(size.small)} {
    gap: 30px;
  }
`;

const SingleSection = styled.div``;
const SectionTitle = styled.h6`
  margin-block: 0;

  text-transform: uppercase;
  font-size: ${pxToRem(21)};
  font-weight: 700;
  color: var(--color-primary);
`;

const SectionLinks = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  ${mediaQuery(size.small)} {
    gap: 8px;
  }
`;

const SectionSingleLink = styled.a`
  font-size: ${pxToRem(20)};
  font-weight: 300;
  color: #3e3e3e;
  text-decoration: none;

  &:hover {
    color: #000;
  }
`;
