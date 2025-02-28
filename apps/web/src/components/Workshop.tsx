import { styled } from "styled-components";
import React from "react";
import { pxToRem } from "../ui/font-utils";
import { Button, WorkshopType } from "@ancyracademy/shared";
import { mediaQuery, size } from "../ui/media-query";

export const Workshop: React.FC<{ workshop: WorkshopType }> = ({
  workshop,
}) => {
  return (
    <View>
      <Head>
        {!!workshop.imageUrl && (
          <ImageContainer>
            <img src={workshop.imageUrl} />
          </ImageContainer>
        )}

        <Texts>
          <Title>{workshop.title}</Title>
          <Resume>{workshop.resume}</Resume>
          <KeyPoints>
            <KeyPoint>
              Dates : <b>{workshop.dates}</b>
            </KeyPoint>
            <KeyPoint>
              Durée : <b>{workshop.duration}</b>
            </KeyPoint>
            <KeyPoint>
              Niveau : <b>{workshop.level}</b>
            </KeyPoint>
            <KeyPoint>
              Environnement : <b>{workshop.environment}</b>
            </KeyPoint>
            <KeyPoint>Places : 6 participants</KeyPoint>

            <KeyPoint>
              Programme :{" "}
              <a href={workshop.programUrl}>Consulter le Programme</a>
            </KeyPoint>
            <KeyPoint>
              <h3>Tarif</h3>
              <b>Entreprise / Société / EI / Micro</b> : 1,500.00€ HT
              <br />
              <b>Salarié / Etudiant</b> : 400.00€ TTC
              <br />
              <br />
            </KeyPoint>
          </KeyPoints>
        </Texts>
      </Head>
      <Button size="big" url={workshop.url} wide>
        Participer
      </Button>
    </View>
  );
};

const View = styled.div`
  position: relative;

  padding-inline: 32px;
  padding-top: 32px;
  padding-bottom: 20px;

  border: 1px solid #dfe8e8;
  border-radius: 5px;

  ${mediaQuery(size.medium)} {
    padding-inline: 16px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQuery(size.medium)} {
    flex-direction: column;
    gap: 0;
  }
`;

const ImageContainer = styled.div`
  margin-bottom: 32px;

  position: relative;
  z-index: -1;

  img {
    width: 100%;
    max-height: 350px;

    ${mediaQuery(size.medium)} {
      height: initial;
      object-fit: contain;
    }
  }
`;

const Texts = styled.div`
  padding-bottom: 32px;
`;

const Title = styled.h4`
  font-size: ${pxToRem(32)};
  margin-top: 0;
  margin-bottom: 14px;
  text-transform: uppercase;
`;

const Resume = styled.p`
  font-size: ${pxToRem(20)};
  line-height: 1.3;
  margin: 0;
  color: #3e3e3e;
`;

const KeyPoints = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const KeyPoint = styled.p`
  font-size: ${pxToRem(20)};
  line-height: 1.3;
  margin: 0;
  color: #3e3e3e;
`;
