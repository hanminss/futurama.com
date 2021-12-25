import styled from "@emotion/styled";
import Image from "next/image";
import { MEDIA_QUERY_END_POINT } from "../constants";
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
  font-weight: 700;
  margin-bottom: 5rem;
  @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    font-size: 1.5rem;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    font-size: 1.8rem;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.DESKTOP}) {
    font-size: 2rem;
  }
`;
const Img = styled.img`
  width: 80%;
  @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    width: 60%;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    width: 50%;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.DESKTOP}) {
    width: 40%;
  }
`;
