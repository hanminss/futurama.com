import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import logo from "../../images/logo.png";
import { MEDIA_QUERY_END_POINT } from "../../constants";

export const Navigation = () => {
  return (
    <HeaderContainer>
      <Link href="/" passHref>
        <a>
          <Image src={logo} alt="Picture of the author" />
        </a>
      </Link>
      <NavContainer>
        {/* passHref를 사용하는 이유 :  Link는 사용자 지정 요소를 래핑하는 구성요소에는 사용하지 않아 href를 자식요소로 전달해야 한다.*/}
        <Link href="/info" passHref>
          <NavItem>INFO</NavItem>
        </Link>
        <Link href="/characters" passHref>
          <NavItem>CHARACTER</NavItem>
        </Link>
        <Link href="/cast" passHref>
          <NavItem>CAST</NavItem>
        </Link>
        <Link href="/episodes" passHref>
          <NavItem>EPISODE</NavItem>
        </Link>
        <Link href="/questions" passHref>
          <NavItem>QUESTION</NavItem>
        </Link>
        <Link href="/inventory" passHref>
          <NavItem>INVENTORY</NavItem>
        </Link>
      </NavContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  // mobile
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 10%;
  font-size: 0.6rem;
  letter-spacing: 0.01em;
  font-weight: 600;

  @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    font-size: 1.5rem;
    letter-spacing: normal;
    font-weight: 700;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 0.3rem;
  margin: 0.8rem 0 0 0;

  @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    width: 100%;
    padding: 0 1%;
  }
`;

const NavItem = styled.a`
  &:hover {
    color: red;
  }
`;
