import type { NextPage } from "next";
import React, { useState } from "react";
import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import { useData } from "../hooks/useData";
import { ITEM_IMG } from "../constants";
import Image from "next/image";
interface invType {
  title: string;
  category: string;
  description: string;
  slogan: string;
  price: string;
  stock: string;
  id: number;
}

interface invImgType {
  id: number;
  url: string;
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

  const randomBoxImg = ITEM_IMG.find((datas: invImgType) => datas.id == num);
  if (!randomBoxImg) return <Loading />;
  const { title, category, description, slogan, price, stock, id } = randomBox;
  const url = randomBoxImg.url;
  return (
    <main>
      <button onClick={handleChangeId}>find</button>
      <img src={url} alt="ats" />
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
