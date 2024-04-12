import { useState } from "react";
import { NavLink } from "react-router-dom";
import ProductMenu from "../ProductMenu/ProductMenu";
import { GiShoppingBag } from "react-icons/gi";
import Stars from "../Stars/Stars";
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
      <div className=" bg-[#EDF2EE]   py-20 w-full  px-4">
        <div className="container mx-auto   ">
          <div className="flex-col flex justify-center items-center  gap-4 pt-28 p-10 ">
            <h3 className="text-3xl font-semibold">Introducing Our Product</h3>
            <div className="flex justify-center gap-4 text-xs ">
              <button
                onClick={() => {
                  setItems(ProductMenu);
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
              <div
                key={index}
                className="bg-white border group  hover:border-green-600 shadow-md hover:shadow-green-300"
              >
                {menu.discount ? (
                  <div className="bg-red-600 rounded m-2 text-white h-5 w-20 text-sm px-1 text-center py-2 flex justify-center items-center">
                    {menu.discount}
                  </div>
                ) : (
                  <div className="rounded m-4 text-white h-1 w-16 text-sm px-1"></div>
                )}
                <div className="   flex items-center justify-center">
                  <div className="w-[330px]">
                    <img src={menu.image} alt={menu.name} />
                  </div>
                </div>
                <div className="flex justify-between mx-4 my-2  ">
                  <div className="">
                    <p className="text-slate-500 text-xs group-hover:text-[#2C742F]">
                      {menu.name}
                    </p>
                    <p className="font-medium text-sm">{menu.price}</p>

                    <Stars stars={menu.stars} reviews={menu.reviews} />
                  </div>
                  <div className="bg-white border border-slate-400 w-8 h-8 flex justify-center items-center rounded-full mt-2 mx-2 group-hover:bg-[#00B207] group-hover:text-white">
                    <GiShoppingBag className="text-xl " />
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
