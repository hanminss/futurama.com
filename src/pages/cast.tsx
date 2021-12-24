import type { NextPage } from "next";
import { CastContainer } from "../components/cast/CastContainer";

const Cast: NextPage = () => {
  const topic = "cast";
  return (
    <div>
      <CastContainer topic={topic} />
    </div>
  );
};

export default Cast;
