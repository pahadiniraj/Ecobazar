import React, { useState } from "react";
import Products from "../AllProducts/Products";
import Stars from "../Stars/Stars";
import { GiShoppingBag } from "react-icons/gi";
import Cards from "../Cards/Cards";
import PopupCard from "../PopupCard/PopupCard";

const MainProducts = ({ productList }) => {
  const [showCard, setShowCard] = useState(false);
  return (
    <div className="py-4 pl-3">
      <div className=" grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4  ">
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
            Stock={menu.Stock}
          />
        ))}
      </div>
    </div>
  );
};

export default MainProducts;
