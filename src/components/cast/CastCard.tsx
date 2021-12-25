import styled from "@emotion/styled";
import { CastType } from "../../types/CastType";
import { CAST_IMG } from "../../constants";

interface CastTypeProps {
  castData: CastType;
}

export const CastCard = ({ castData }: CastTypeProps) => {
  const { name, bio, id } = castData;
  let { born } = castData;
  const bornArray = born.split("/");
  born = bornArray[2] + "." + bornArray[0] + "." + bornArray[1];
  return (
    <Card>
      <ProfileImg src={CAST_IMG[id - 1].url} alt="" />
      <NameH1>{name}</NameH1>
      <BornP>{born}</BornP>
      <MoreLink href={bio.url}>more</MoreLink>
    </Card>
  );
};

//styles
const Card = styled.article`
  border: 1px solid #bdbdbd;
  border-radius: 20px;
  height: 350px;
  padding: 1em;
  text-align: center;
  box-shadow: 5px 6px 16px -1px rgba(0, 0, 0, 0.31);
  transition: all 0.5s;

  &:hover {
    transform: translate(-3px, -3px);
  }
`;
const NameH1 = styled.h1`
  margin-bottom: 0.3em;
`;

const BornP = styled.p`
  color: gray;
  font-size: 0.9em;
`;
const ProfileImg = styled.img`
  height: 60%;
  border-radius: 10px;
`;

const MoreLink = styled.a`
  display: inline-block;
  padding: 0.3em;
  border-radius: 5px;
  color: white;
  background-color: black;
  &:hover {
    background-color: red;
  }
`;
