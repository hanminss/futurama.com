import type { NextPage } from "next";
import React, { useState } from "react";
import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import { useData } from "../hooks/useData";

interface invType {
  title: string;
  category: string;
  description: string;
  slogan: string;
  price: string;
  stock: string;
  id: number;
}

const Inventory: NextPage = () => {
  const randomSeed = (() => {
    return Math.floor(Math.random() * 31) + 1;
  })();

  const [num, setNum] = useState(0);

  const handleChangeId = () => {
    setNum(randomSeed);
  };
  const { data, error } = useData("inventory");
  if (error) return <Error />;
  if (!data) return <Loading />;

  if (num == 0) return <button onClick={handleChangeId}>find</button>;
  const randomBox = data.find((datas: invType) => datas.id == num);
  const { title, category, description, slogan, price, stock, id } = randomBox;

  return (
    <main>
      <button onClick={handleChangeId}>find</button>
      <p>{title}</p>
      <p>{category}</p>
      <p>{description}</p>
      <p>{slogan}</p>
      <p>{price}</p>
      <p>{stock}</p>
    </main>
  );
};

export default Inventory;
