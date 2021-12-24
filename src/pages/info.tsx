import type { NextPage } from "next";
import { InfoContainer } from "../components/info/InfoContainer";

const Info: NextPage = () => {
  const topic = "info";
  return <InfoContainer topic={topic} />;
};

export default Info;
