import { useState } from "react";
import { NavLink } from "react-router-dom";
import ProductMenu from "../ProductMenu/ProductMenu";
import { GiShoppingBag } from "react-icons/gi";

function ProductIntro() {
  const [items, setItems] = useState(ProductMenu);

  const [activeCatagory, setActiveCatagory] = useState("all");

  const filterItem = (cate) => {
    const updatedItem = ProductMenu.filter((curr) => {
      return curr.category === cate;
    });
    setItems(updatedItem);
  };
  return (
    <>
      <div className=" bg-[#EDF2EE]  gap-0 py-20 ">
        <div className="w-[1400px] mx-auto  ">
          <div className="flex-col flex justify-center items-center  gap-4 pt-28 p-10 ">
            <h3 className="text-4xl font-semibold">Introducing Our Product</h3>
            <div className="flex justify-center gap-6 ">
              <button
                onClick={() => {
                  setItems(ProductMenu);
                  setActiveCatagory("all");
                }}
                className={
                  activeCatagory === "all"
                    ? "text-green-600 border-b-2 border-green-500 pb-2"
                    : ""
                }
              >
                All
              </button>
              <button
                onClick={() => {
                  filterItem("vegetable");
                  setActiveCatagory("vegetable");
                }}
                className={
                  activeCatagory === "vegetable"
                    ? "text-green-600 border-b-2 border-green-500 pb-2"
                    : ""
                }
              >
                Vegetable
              </button>
              <button
                onClick={() => {
                  filterItem("fruit");
                  setActiveCatagory("fruit");
                }}
                className={
                  activeCatagory === "fruit"
                    ? "text-green-600 border-b-2 border-green-500 pb-2"
                    : ""
                }
              >
                Fruit
              </button>
              <button
                onClick={() => {
                  filterItem("meatandfish");
                  setActiveCatagory("meatandfish");
                }}
                className={
                  activeCatagory === "meatandfish"
                    ? "text-green-600 border-b-2 border-green-500 pb-2"
                    : ""
                }
              >
                Meat & Fish
              </button>
              <NavLink to="product" className="pt-1">
                View All
              </NavLink>
            </div>
          </div>
          <div className=" grid grid-cols-4 gap-0 ">
            {items.map((menu, index) => (
              <div
                key={index}
                className="bg-white border h-4/4 w-4/4 hover:border-green-600 shadow-md hover:shadow-green-300"
              >
                {menu.discount ? (
                  <div className="bg-red-600 rounded m-4 text-white h-5 w-16 text-sm px-1">
                    {menu.discount}
                  </div>
                ) : (
                  <div className="rounded m-4 text-white h-5 w-16 text-sm px-1"></div>
                )}

                <img
                  src={menu.image}
                  alt=""
                  className="bg-white h-4/4 w-4/4 ml-4 "
                />
                <div className="flex justify-between m-4 ">
                  <div className="">
                    <p className="text-slate-500 text-lg">{menu.name}</p>
                    <p className="font-medium text-xl">{menu.price}</p>
                    <p>{menu.description}</p>
                  </div>
                  <div className="bg-white border border-slate-400 w-12 h-12 flex justify-center items-center rounded-full mt-4 hover:bg-[#00B207] hover:text-white">
                    <GiShoppingBag className="text-2xl " />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductIntro;
