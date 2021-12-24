import type { NextPage } from "next";
import { CharacterContainer } from "../../components/character/CharacterConatiner";

const Character: NextPage = () => {
  const topic = "characters";
  return <CharacterContainer topic={topic} />;
};

export default Character;
