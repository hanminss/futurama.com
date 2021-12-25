import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import type { NextPage } from "next";

import ShipImg from "../images/ship.png";
import { MEDIA_QUERY_END_POINT, POSTER_URL } from "../constants";

const Home: NextPage = () => {
  return (
    <Container>
      <Poster src={POSTER_URL} alt="poster" />
      <Ship src={ShipImg.src} alt="ship" />
    </Container>
  );
};

export default Home;

const flying = keyframes`
0% {
  transform: translate(0, 0) 
}
50% {
  transform: translate(150vw, 20vh);
}
75% {
  transform: translate(150vw, 20vh) rotateY(180deg);
}
100%{
  transform: translate(0, 40vh) rotateY(180deg);
}
`;

const Container = styled.main`
  text-align: center;
  margin-top: 1rem;
`;

const Ship = styled.img`
  position: absolute;
  left: -40vw;
  top: 20%;
  z-index: -1;
  animation: ${flying} 5s ease infinite;
  width: 30vw;
  @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    width: 25vw;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    width: 20vw;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.DESKTOP}) {
    width: 10vw;
  }
`;

const Poster = styled.img`
  width: 100%;
  border-radius: 10px;
  @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    width: 60%;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    width: 40%;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.DESKTOP}) {
    width: 30%;
  }
`;
