import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import type { NextPage } from "next";

import ShipImg from "../images/ship.png";

const Home: NextPage = () => {
  const url =
    "https://w.namu.la/s/c30d9b068104918e6beb1cb3454b655659ac7fc28c959939f9d008f7d460821797714195fb71dfd3e3c378b14fc0a0c3f8fb89bfe48c77ca0f0d7d181245d1dd977b0da570f3f846cfd435b8972bff158e6ff18e7d03353e1912be7f893c3673943dca2c3a24ac3bbd545ffb8100b26d";
  return (
    <Container>
      <Poster src={url} alt="poster" />
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
  width: 30vw;
  animation: ${flying} 5s ease infinite;
`;

const Poster = styled.img`
  border-radius: 10px;
  height: 80vh;
`;
