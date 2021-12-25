import styled from "@emotion/styled";
import Image from "next/image";
import errorImg from "../images/errorImg.png";
export const Error = () => {
  return (
    <Main>
      <Title>There is a problem loading data.</Title>

      <Img src={errorImg.src} alt="error-image" />
    </Main>
  );
};

const Main = styled.main`
  text-align: center;
`;
const Title = styled.p`
  font-size: 1.2rem;
`;
const Img = styled.img`
  width: 100%;
`;
