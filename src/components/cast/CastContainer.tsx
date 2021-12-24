import { Error } from "../Error";
import { Loading } from "../Loading";
import { useData } from "../../hooks/useData";
import styled from "@emotion/styled";
import { MEDIA_QUERY_END_POINT } from "../../constants";
import { CastType } from "../../types/CastType";
import { CastCard } from "./CastCard";

interface ContainerProps {
  topic: string;
}

export const CastContainer = ({ topic }: ContainerProps) => {
  const { data, error } = useData(topic);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <CastMain>
      {data.map((castData: CastType) => {
        return (
          <CastCard key={`cast-data-${castData.id}`} castData={castData} />
        );
      })}
    </CastMain>
  );
};

const CastMain = styled.main`
  display: grid;
  gap: 2em;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
