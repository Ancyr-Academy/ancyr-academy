"use client";
import { Container } from "../../../ui/Container";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
