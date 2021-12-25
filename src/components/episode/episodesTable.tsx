import { MEDIA_QUERY_END_POINT } from "../../constants";
import { useData } from "../../hooks/useData";
import { EpisodeType } from "../../types/EpisodeType";
import { Error } from "../Error";
import { Loading } from "../Loading";
import { EpisodeTd } from "./episodeTd";
import styled from "@emotion/styled";
interface ContainerProps {
  topic: string;
}
export const EpisodesTable = ({ topic }: ContainerProps) => {
  const { data, error } = useData(topic);
  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <Table>
      <thead>
        <tr>
          <TH>No.</TH>
          <TH colSpan={2}>Title</TH>
          <TH colSpan={2}>Writers</TH>
          <TH colSpan={2}>Date</TH>
        </tr>
      </thead>
      <tbody>
        {data.map((episodeData: EpisodeType) => {
          return (
            <EpisodeTd
              key={`episode-data-${episodeData.id}`}
              episodeData={episodeData}
            />
          );
        })}
      </tbody>
    </Table>
  );
};

//styles
const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  font-size: 0.3em;
  text-align: center;
  border: 1px solid #bdbdbd;
  border-collapse: collapse;
  box-shadow: 5px 6px 16px -1px rgba(0, 0, 0, 0.31);
  border-radius: 10px;
  overflow: hidden;
  @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    font-size: 1em;
  }
`;

const TH = styled.th`
  background-color: #ffffbf;
  padding: 1em;
  border: 1px solid #bdbdbd;
  font-size: 1.2em;
`;
