import styled from "@emotion/styled";

export const Footer = () => {
  return (
    <Foot>
      Copyright &copy; <HMSS href="https://github.com/hanminss">hanminsss</HMSS>
    </Foot>
  );
};

const Foot = styled.footer`
  text-align: center;
  margin-top: 3rem;
  padding: 3rem;
  border-top: 1px solid #bdbdbd;
  font-weight: 700;
`;

const HMSS = styled.a`
  text-decoration: red wavy underline;
  &:hover {
    color: blue;
  }
`;
