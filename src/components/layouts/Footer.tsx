import styled from "@emotion/styled";
import { MEDIA_QUERY_END_POINT } from "../../constants";

export const Footer = () => {
  return (
    <Foot>
      Copyright &copy; <HMSS href="https://github.com/hanminss">hanminsss</HMSS>
    </Foot>
  );
};

const Foot = styled.footer`
  text-align: center;
  padding: 3rem;
  margin-top: 3rem;
  border-top: 1px solid #bdbdbd;
  font-weight: 700;
  left: 0;
  bottom: 0;
`;

const HMSS = styled.a`
  text-decoration: red wavy underline;
  &:hover {
    color: blue;
  }
`;
