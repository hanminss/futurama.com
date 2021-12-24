import { Error } from "../Error";
import { Loading } from "../Loading";
import { useData } from "../../hooks/useData";
import { InfoType } from "../../types/InfoType";
import { Synopsis } from "./Synopsis";
import styled from "@emotion/styled";

interface ContainerProps {
  topic: string;
}

export const InfoContainer = ({ topic }: ContainerProps) => {
  const { data, error } = useData(topic);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <main>
      {data.map((infoData: InfoType) => {
        return (
          <Synopsis key={`info-data-${infoData.id}`} infoData={infoData} />
        );
      })}
    </main>
  );
};
