import { Error } from "../../components/Error";
import { Loading } from "../../components/Loading";
import { useData } from "../../hooks/useData";
import { CharacterType } from "../../types/CharacterType";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { NextPage } from "next";

const CharacterDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  return <div className="a">{id}</div>;
};

export default CharacterDetail;
