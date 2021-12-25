import styled from "@emotion/styled";
import { EpisodeType } from "../../types/EpisodeType";

interface EpisodeTypeProps {
  episodeData: EpisodeType;
}

export const EpisodeTd = ({ episodeData }: EpisodeTypeProps) => {
  let { number, title, writers, originalAirDate, desc, id } = episodeData;
  number = number.replace(/ /g, "");
  return (
    <>
      <tr>
        <TD>{number}</TD>
        <TD colSpan={2}>{title}</TD>
        <TD colSpan={2}>{writers}</TD>
        <TD colSpan={2}>{originalAirDate}</TD>
      </tr>
      <tr>
        <Dsec colSpan={7}>{desc}</Dsec>
      </tr>
    </>
  );
};

const TD = styled.td`
  border: 0.5px solid #bdbdbd;
`;
const Dsec = styled.td`
  text-align: justify;
  padding: 1em;
  border: 0.5px solid #bdbdbd;
  border-bottom: 2px solid #bdbdbd;
`;
