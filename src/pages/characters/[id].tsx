import { Error } from "../../components/Error";
import { Loading } from "../../components/Loading";
import { useQueryData } from "../../hooks/useData";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { NextPage } from "next";

const CharacterDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useQueryData({ main: "characters", subs: id });
  if (error) return <Error />;
  if (!data) return <Loading />;
  const {
    name,
    images,
    gender,
    species,
    homePlanet,
    occupation,
    sayings,
    age,
  } = data;

  const fullName = (() => {
    if (name.middle == "") {
      return name.first + " " + name.last;
    }
    return name.first + " " + name.middle + " " + name.last;
  })();

  const randomSayins = (() => {
    return sayings[Math.floor(Math.random() * (sayings.length - 1))];
  })();

  return (
    <main>
      <img src={images.main} alt="img" />
      <p>{fullName}</p>
      <p>{gender}</p>
      <p>{species}</p>
      <p>{homePlanet}</p>
      <p>{occupation}</p>
      <p>{randomSayins}</p>
      <p>{age}</p>
    </main>
  );
};

export default CharacterDetail;
