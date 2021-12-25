import React from "react";
import { Navigation, Footer } from ".";
import styled from "@emotion/styled";

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navigation />
      <ChildrenWrap>{children}</ChildrenWrap>
      <Footer />
    </div>
  );
};

//styles
const ChildrenWrap = styled.section`
  padding: 1rem 10%;
`;
