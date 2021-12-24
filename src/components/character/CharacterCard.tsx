import { CharacterType } from "../../types/CharacterType";
import styled from "@emotion/styled";
import Link from "next/link";

interface CharacterTypeProps {
  characterData: CharacterType;
}

export const CharacterCard = ({ characterData }: CharacterTypeProps) => {
  const { id, images } = characterData;
  const path = "/characters/" + id;
  return (
    <Link href={path} passHref>
      <Card>
        <CharcterImg src={images.main} alt="" />
      </Card>
    </Link>
  );
};

const Card = styled.article`
  text-align: center;
  padding-bottom: 2em;
  transition: 0.3s;
  filter: brightness(0%);
  cursor: pointer;
  &:hover {
    filter: none;
  }
`;

const CharcterImg = styled.img`
  height: 100%;
  width: auto;
`;
