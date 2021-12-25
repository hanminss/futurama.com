import { InfoType } from "../../types/InfoType";
import { MEDIA_QUERY_END_POINT } from "../../constants";
import styled from "@emotion/styled";
import Image from "next/image";
import infoImg from "../../images/info-img.png";

interface InfoTypeProps {
  infoData: InfoType;
}

export const Synopsis = ({ infoData }: InfoTypeProps) => {
  const { synopsis, yearsAired } = infoData;
  return (
    <SynopsisSection>
      <SynopsisTitle>
        Futurama <YearsAired>{yearsAired}</YearsAired>
      </SynopsisTitle>
      <p>{synopsis}</p>
      <ImageWrap>
        <Image src={infoImg} alt="info-img" />
      </ImageWrap>
    </SynopsisSection>
  );
};

//styles
const SynopsisSection = styled.section`
  text-align: justify;
`;

const SynopsisTitle = styled.h1`
  border-bottom: 1px solid #bdbdbd;
  margin: 0;
  
  @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    font-size: 32px;
`;

const YearsAired = styled.span`
  font-size: 0.5em;
  color: gray;
  font-weight: normal;
`;

const ImageWrap = styled.div`
  text-align: center;
  @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    margin: 5% 0;
  }
`;
