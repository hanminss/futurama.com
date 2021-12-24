import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import ship from "../images/ship.png";
import Image from "next/image";
export const Loading = () => {
  return (
    <LoadingContainer>
      <Image src={ship} alt="ship" />
      <p>Loading ...</p>
    </LoadingContainer>
  );
};

const loadFade = keyframes`
from, 20%, 53%, 80%, to {
  transform: translate3d(0,0,0);
}

40%, 43% {
  transform: translate3d(0, -30px, 0);
}

70% {
  transform: translate3d(0, -15px, 0);
}

90% {
  transform: translate3d(0,-4px,0);
}
`;

const LoadingContainer = styled.div`
  width: 100vw;
  text-align: center;
  margin-top: 20vh;
  animation: ${loadFade} 0.5s ease infinite;
  font-size: 2rem;
`;
