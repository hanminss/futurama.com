import styled from "@emotion/styled";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Error } from "../../components/Error";
import { Loading } from "../../components/Loading";
import { useQueryData } from "../../hooks/useData";

const Quiz: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useQueryData({ main: "questions", subs: id });
  let loopCounter = 0;
  const nextPage = `/questions/${parseInt(id) + 1}`;
  if (error) return <Error />;
  if (!data) return <Loading />;
  const { question, possibleAnswers, correctAnswer } = data;

  const correct = function () {
    if (id == "28") {
      alert(`정답! 모든 문제를 완료하셨습니다. \n정답: ${correctAnswer}`);
      router.push("/");
    } else {
      alert(`정답! \n정답:${correctAnswer}`);
      router.push(nextPage);
    }
  };
  const wrong = function () {
    alert("오답입니다!");
  };

  return (
    <main>
      <Title>
        {id}. {question}
      </Title>
      <Qwrap>
        {possibleAnswers.map((data: string) => {
          if (data == correctAnswer) {
            return (
              <>
                <Question key="O" onClick={correct}>
                  {++loopCounter}. {data}
                </Question>
                <br />
              </>
            );
          } else {
            return (
              <>
                <Question key={`X-${loopCounter}`} onClick={wrong}>
                  {++loopCounter}. {data}
                </Question>
                <br />
              </>
            );
          }
        })}
      </Qwrap>
    </main>
  );
};

export default Quiz;

const Title = styled.h3`
  margin: 0;
  text-align: justify;
`;

const Qwrap = styled.section`
  margin: 0.5em 0 0 0.3em;
  font-weight: 500;
`;
const Question = styled.span`
  display: inline-block;
  cursor: pointer;
  margin-bottom: 0.5em;
  &:hover {
    transform: translate(1px, -1px);
    color: blue;
  }
`;