import type { NextPage } from "next";
import { Error } from "../components/Error";
import { useData } from "../hooks/useData";

const Inventory: NextPage = () => {
  const { data, error } = useData("error");
  if (error) return <Error />;
  return <p>Page to show error handling.</p>;
};

export default Inventory;
