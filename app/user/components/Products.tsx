"use client";
import React from "react";
import CustomSelect from "./CustomSelect";

const productList = [
  {
    id: "1",
    image: "/images/gallery/1.jpg",
  },
  {
    id: "2",
    image: "/images/gallery/2.jpg",
  },
  {
    id: "3",
    image: "/images/gallery/3.jpg",
  },
  {
    id: "4",
    image: "/images/gallery/4.jpg",
  },
  {
    id: "5",
    image: "/images/gallery/5.jpg",
  },
  {
    id: "6",
    image: "/images/gallery/6.jpg",
  },
  {
    id: "7",
    image: "/images/gallery/7.jpg",
  },
  {
    id: "8",
    image: "/images/gallery/8.jpg",
  },
];
const sortList = [
  {
    id: "1",
    value: "A to Z",
  },
  {
    id: "2",
    value: "Z to A",
  },
  {
    id: "3",
    value: "B to A",
  },
];
export default function Products() {
  return (
    <div className="product">
      <div className="auto__container">
        <div className="product__head">
          <h2 className="sm">Our Products</h2>
          <div className="productFilter">
            <h6>Store By :</h6>
            <CustomSelect
              list={sortList}
              selected={sortList[0]}
              onChange={() => {}}
            />
          </div>
        </div>
        <div className="product__inner">
          {productList.map((item, index) => {
            return <ProductItem {...item} key={index} />;
          })}
        </div>
      </div>
      <div className="product__inner">
        {productList.map((item, index) => {
          return <ProductItem {...item} key={index} />;
        })}
      </div>
    </div>
  );
}
const ProductItem = (props: { image: string }) => {
  return (
    <div className="productItem">
      <div className="productItem__image">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};
