"use client";

import Image from "next/image";
import { styled } from "styled-components";
import LogoFull from "../../assets/logo-full.png";
import { Container } from "./Container";
import { pxToRem } from "./font-utils";

const MenuItem: React.FC<{
  url: string;
  children: string;
}> = ({ url, children }) => {
  return (
    <li>
      <a href={url}>{children}</a>
    </li>
  );
};

export const Header = () => {
  return (
    <>
      <View>
        <InnerView>
          <div>
            <Logo alt="Ancyr Academy" src={LogoFull} />
          </div>
          <Menu>
            <MenuItem url="/">Accueil</MenuItem>
            <MenuItem url="/books">Livres</MenuItem>
            <MenuItem url="/courses">Formations</MenuItem>
            <MenuItem url="https://www.youtube.com/@ancyracademy">
              Youtube
            </MenuItem>
          </Menu>
        </InnerView>
      </View>
      <Padder />
    </>
  );
};

const View = styled.div`
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;

  background-color: white;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
`;

const Padder = styled.div`
  height: var(--navbar-height);
  background-color: var(--color-secondary);
`;

const InnerView = styled.div`
  max-width: var(--container-size);
  margin-inline: auto;
  padding-inline: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: var(--navbar-height);
`;

const Logo = styled(Image)``;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  list-style: none;
  gap: 28px;

  li {
    display: block;
  }

  a {
    font-size: ${pxToRem(20)};
    color: #444;
    text-decoration: none;

    &:hover {
      color: black;
    }
  }
`;
