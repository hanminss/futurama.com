import type { NextPage } from "next";
import { EpisodesTable } from "../components/episode/episodesTable";

const Episodes: NextPage = () => {
  const topic = "episodes";

  return <EpisodesTable topic={topic} />;
};

export default Episodes;
