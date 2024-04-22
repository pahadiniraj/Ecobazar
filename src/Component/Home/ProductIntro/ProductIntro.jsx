import { useState } from "react";
import { NavLink } from "react-router-dom";
import Products from "../../AllProducts/Products";
import Stars from "../../Stars/Stars";
import Cards from "../../Cards/Cards";

function ProductIntro() {
  const [items, setItems] = useState(Products);

  const [activeCatagory, setActiveCatagory] = useState("all");

  const filterItem = (cate) => {
    const updatedItem = Products.filter((curr) => {
      return curr.category === cate;
    });
    setItems(updatedItem);
  };
  return (
    <>
      <div className=" bg-[#EDF2EE]   py-20 w-full  px-4">
        <div className="container mx-auto   ">
          <div className="flex-col flex justify-center items-center  gap-4 pt-28 p-10 ">
            <h3 className="text-3xl font-semibold">Introducing Our Product</h3>
            <div className="flex justify-center gap-4 text-xs ">
              <button
                onClick={() => {
                  setItems(Products);
                  setActiveCatagory("all");
                }}
                className={`
                  ${
                    activeCatagory === "all"
                      ? "text-green-600 border-b-2 border-green-500 pb-2 "
                      : "text-[#808080]"
                  }
                `}
              >
                All
              </button>
              <div className=" relative top-1 text-[#808080]">|</div>
              <button
                onClick={() => {
                  filterItem("vegetable");
                  setActiveCatagory("vegetable");
                }}
                className={
                  activeCatagory === "vegetable"
                    ? "text-green-600 border-b-2 border-green-500 pb-2"
                    : "text-[#808080]"
                }
              >
                Vegetable
              </button>
              <div className=" relative top-1 text-[#808080]">|</div>
              <button
                onClick={() => {
                  filterItem("fruit");
                  setActiveCatagory("fruit");
                }}
                className={
                  activeCatagory === "fruit"
                    ? "text-green-600 border-b-2 border-green-500 pb-2"
                    : "text-[#808080]"
                }
              >
                Fruit
              </button>
              <div className=" relative top-1 text-[#808080]">|</div>
              <button
                onClick={() => {
                  filterItem("meatandfish");
                  setActiveCatagory("meatandfish");
                }}
                className={
                  activeCatagory === "meatandfish"
                    ? "text-green-600 border-b-2 border-green-500 pb-2"
                    : "text-[#808080]"
                }
              >
                Meat & Fish
              </button>
              <div className=" relative top-1 text-[#808080]">|</div>
              <NavLink to="product" className="pt-1 text-[#808080]">
                View All
              </NavLink>
            </div>
          </div>
          <div className=" grid grid-cols-4  px-28">
            {items.map((menu, index) => (
              <Cards
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
      </div>
    </>
  );
}
export default ProductIntro;
