import { Error } from "../Error";
import { Loading } from "../Loading";
import { useData } from "../../hooks/useData";
import { CharacterType } from "../../types/CharacterType";
import styled from "@emotion/styled";
import { CharacterCard } from "./CharacterCard";
import { MEDIA_QUERY_END_POINT } from "../../constants";

interface ContainerProps {
  topic: string;
}

export const CharacterContainer = ({ topic }: ContainerProps) => {
  const { data, error } = useData(topic);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <CharacterMain>
      {data.map((characterData: CharacterType) => {
        return (
          <CharacterCard
            key={`character-data-${characterData.id}`}
            characterData={characterData}
          ></CharacterCard>
        );
      })}
    </CharacterMain>
  );
};

const CharacterMain = styled.main`
  display: grid;
  grid-template-columns: 100%;
  @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: 200px;
  }
`;
