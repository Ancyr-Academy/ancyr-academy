import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { pxToRem } from "../ui/font-utils";
import { Button } from "../ui/Button";
import User from "../../assets/user.png";

export const Review: React.FC<{
  authorImage?: string;
  authorName: string;
  children: string;
}> = ({ authorImage, authorName, children }) => {
  return (
    <View>
      <Head>
        <ProfilePicture src={authorImage ?? User.src} />
        <Author>{authorName}</Author>
      </Head>
      <Content>{children}</Content>
      <Stars>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </Stars>
    </View>
  );
};

const View = styled.a``;

const Head = styled.div`
  display: flex;
  align-items: center;
`;

const ProfilePicture = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const Author = styled.h6`
  margin-inline-start: 20px;
  margin-block: 0;

  font-size: ${pxToRem(24)};
  font-weight: 700;
`;

const Content = styled.p`
  margin-block: 0;
  margin-top: 20px;

  font-size: ${pxToRem(24)};
  line-height: 1.3;
  font-weight: 300;
  color: #3e3e3e;
`;

const Stars = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
  font-size: ${pxToRem(32)};
  gap: 8px;
  color: var(--color-primary);
`;
