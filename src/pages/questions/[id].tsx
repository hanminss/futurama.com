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
      <h3>
        {id}. {question}
      </h3>
      {possibleAnswers.map((data: string) => {
        if (data === correctAnswer) {
          return (
            <p key="O" onClick={correct}>
              {++loopCounter}. {data}
            </p>
          );
        } else {
          return (
            <p key="X" onClick={wrong}>
              {++loopCounter}. {data}
            </p>
          );
        }
      })}
    </main>
  );
};

export default Quiz;
