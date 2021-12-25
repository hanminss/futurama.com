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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 10% 0 10%;
  font-size: 3vw;
  letter-spacing: 0.01em;
  font-weight: 600;
  color: #444444;

  @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    font-size: 17px;
    padding: 15px 10%;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    font-size: 25px;
    padding: 20px 10%;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.DESKTOP}) {
    font-size: 30px;
    padding: 20px 10%;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0.8rem 0 0 0;
  gap: 0.5em;
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
