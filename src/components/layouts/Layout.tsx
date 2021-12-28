import React from "react";
import { Navigation, Footer, HeadingTag } from ".";
import styled from "@emotion/styled";

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <HeadingTag />
      <MinWrap>
        <Navigation />
        <ChildrenWrap>{children}</ChildrenWrap>
      </MinWrap>
      <Footer />
    </div>
  );
};

//styles
const ChildrenWrap = styled.section`
  padding: 1rem 10%;
`;

const MinWrap = styled.section`
  min-height: calc(100vh - 115px);
`;
