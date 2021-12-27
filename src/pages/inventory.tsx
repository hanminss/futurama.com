import type { NextPage } from "next";
import React, { useState } from "react";
import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import { useData } from "../hooks/useData";
import { ITEM_IMG, MEDIA_QUERY_END_POINT } from "../constants";

import styled from "@emotion/styled";

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
  const [num, setNum] = useState(1);

  function findImg(x: number) {
    const imgData = ITEM_IMG.find((datas: invImgType) => datas.id == num + x);
    if (!imgData) return undefined;
    return imgData.url;
  }

  const handlePreItem = () => {
    setNum(num - 1);
  };

  const handleNextItem = () => {
    setNum(num + 1);
  };

  const { data, error } = useData("inventory");
  if (error) return <Error />;
  if (!data) return <Loading />;

  const imgInfo = data.find((datas: invType) => datas.id == num);
  const { title, category, description, slogan, price, stock, id } = imgInfo;
  const preImgUrl = findImg(-1);
  const imgUrl = findImg(0);
  const nextImgUrl = findImg(1);

  return (
    <Main>
      <FlexWrap>
        {preImgUrl ? <PreBtn onClick={handlePreItem} /> : <PreBtn />}
        <ItemWrap>
          {preImgUrl ? <PreItem src={preImgUrl} alt="item-img" /> : ""}
          <Item src={imgUrl} alt="item-img" />
          {nextImgUrl ? <NextItem src={nextImgUrl} alt="item-img" /> : ""}
        </ItemWrap>
        {nextImgUrl ? <NextBtn onClick={handleNextItem} /> : <NextBtn />}
      </FlexWrap>
      <h1>{title}</h1>
      {slogan ? <Slogan>&quot;{slogan}&quot;</Slogan> : ""}
      <p>{description}</p>
      <Price>{price}</Price>
    </Main>
  );
};

export default Inventory;

//style
const Main = styled.main`
  text-align: center;
`;

const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10% 0;
  @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    margin: 5% 20%;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    margin: 5% 25%;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.DESKTOP}) {
    margin: 3% 30%;
  }
`;
const PreBtn = styled.div`
  width: 30px;
  height: 30px;
  border-left: 3px solid #bdbdbd;
  border-top: 3px solid #bdbdbd;
  transform: rotate(-45deg);
  cursor: pointer;
`;
const NextBtn = styled.div`
  width: 30px;
  height: 30px;
  border-left: 3px solid #bdbdbd;
  border-top: 3px solid #bdbdbd;
  transform: rotate(135deg);
  cursor: pointer;
`;
const ItemWrap = styled.div`
  position: relative;
  margin: 0 auto;
  display: block;
  width: 200px;
  height: 200px;
`;

const Item = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  border: 2px solid #fff;
  border-radius: 10px;
  box-shadow: 0px 10px 13px -7px #000000;
`;

const PreItem = styled.img`
  position: absolute;
  width: 90%;
  height: 90%;
  border-radius: 10px;
  top: -10%;
  left: -45%;
  filter: grayscale(1) brightness(20%);
  z-index: -1;
  box-shadow: 0px 10px 13px -7px #000000;
`;

const NextItem = styled.img`
  position: absolute;
  width: 90%;
  height: 90%;
  top: -10%;
  left: 55%;
  border-radius: 10px;
  filter: grayscale(1) brightness(20%);
  z-index: -1;
  box-shadow: 0px 10px 13px -7px #000000;
`;

const Slogan = styled.p`
  color: #bdbdbd;
  font-weight: 700;
`;

const Price = styled.p`
  &:before {
    content: "$";
  }
`;
