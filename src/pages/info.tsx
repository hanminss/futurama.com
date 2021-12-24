import type { NextPage } from "next";
import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import { useData } from "../hooks/useData";
import { InfoType } from "../types/InfoType";

const Info: NextPage = () => {
  const { data, error } = useData("info");

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      {data.map((data: InfoType) => {
        return <p key={`info-id`}>{data.synopsis}</p>;
      })}
    </div>
  );
};

export default Info;
