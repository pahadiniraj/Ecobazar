import React, { useState } from "react";
import Products from "../AllProducts/Products";
import Stars from "../Stars/Stars";
import { GiShoppingBag } from "react-icons/gi";
import Cards from "../Cards/Cards";

const MainProducts = ({ productList }) => {
  return (
    <div className="py-4 pl-3">
      <div className=" grid grid-cols-3 gap-4  ">
        {productList.map((menu, index) => (
          <Cards
            className={`rounded-lg`}
            key={index}
            discount={menu.discount}
            image={menu.image}
            name={menu.name}
            price={menu.price}
            stars={menu.stars}
            reviews={menu.reviews}
          />
        ))}
      </div>
    </div>
  );
};

export default MainProducts;
