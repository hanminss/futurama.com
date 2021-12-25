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

  const randomSayings = (() => {
    return sayings[Math.floor(Math.random() * (sayings.length - 1))];
  })();

  return (
    <Main>
      <SpeechBubble>{randomSayings}</SpeechBubble>
      <img src={images.main} alt="img" />
      <h3>
        {fullName} {gender == "Male" ? <Male>♂</Male> : <Female>♀</Female>}
      </h3>
      <InfoWrap>
        <p>
          <Bold>Age</Bold>: {age}
        </p>
        <p>
          <Bold>Species</Bold>: {species}
        </p>
        <p>
          <Bold>Home</Bold>: {homePlanet}
        </p>
        <p>
          <Bold>Occupation</Bold>: {occupation}
        </p>
      </InfoWrap>
    </Main>
  );
};

export default CharacterDetail;

const Main = styled.div`
  width: 100%;
  text-align: center;
`;

const SpeechBubble = styled.div`
  position: relative;
  background: #ff7070;
  border-radius: 10px;
  width: 90%;
  left: 50%;
  transform: translateX(-50%);
  padding: 1em;
  margin-bottom: 2em;
  color: white;
  font-weight: 700;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color: #ff7070;
    border-bottom: 0;
    margin-left: -20px;
    margin-bottom: -20px;
  }
`;

const Male = styled.span`
  color: blue;
  font-size: 1.2em;
`;

const Female = styled.span`
  color: pink;
  font-size: 1.2em;
`;

const InfoWrap = styled.div`
  text-align: left;
  margin: 0 10%;
  padding: 0 3%;
  border-left: 2px solid #bdbdbd;
`;

const Bold = styled.span`
  font-weight: bold;
`;