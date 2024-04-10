import React from "react";
import { GiShoppingBag } from "react-icons/gi";

const FeaturedProduct = () => {
  const featuredMenu = [
    {
      id: 1,
      image: "./ProductImg/Apple.png",
      name: "Apple",
      category: "fruit",
      description: "loremjncjnd",
      discount: "Sale 50%",
      price: "$14.99",
      stars: 4.4,
    },
    {
      id: 2,
      image: "./ProductImg/Mango.png",
      name: "Sarjapur Mango",
      category: "fruit",
      description: "loremjncjnd",
      discount: "Sale 50%",
      price: "$14.99",
      stars: 4.4,
    },
    {
      id: 3,
      image: "./ProductImg/Tomato.png",
      name: "Red Tomato",
      category: "vegetable",
      description: "loremjncjnd",
      price: "$14.99",
      stars: 4.4,
    },
    {
      id: 4,
      image: "./ProductImg/Cowliflower.png",
      name: "Cowliflower",
      category: "vegetable",
      description: "loremjncjnd",
      price: "$14.99",
      stars: 4.4,
    },
    {
      id: 5,
      image: "./ProductImg/Chilli.png",
      name: "Green Chilli",
      category: "vegetable",
      description: "loremjncjnd",
      discount: "Sale 50%",
      price: "$14.99",
      stars: 4.4,
    },
  ];

  return (
    <div className="w-full py-8 ">
      <div className="container mx-auto  ">
        <div className="flex justify-center items-center mt-20 text-2xl  font-semibold">
          <h2 className="pb-3">FEATURED PRODUCT</h2>
        </div>
        <div className=" grid grid-cols-5 gap-0 px-28 py-5 ">
          {featuredMenu.map((menu, index) => (
            <div
              key={index}
              className={`border   hover:border-green-600 shadow-md hover:shadow-green-300`}
            >
              {menu.discount ? (
                <div className="bg-red-600 rounded m-2 text-white h-5 w-20 text-xs px-1 text-center py-1 flex justify-center items-center">
                  {menu.discount}
                </div>
              ) : (
                <div className="rounded m-4 text-white h-1  w-16 text-sm "></div>
              )}
              <div className="   flex items-center justify-center">
                <div className="w-[150px]  ">
                  <img src={menu.image} alt={menu.name} />
                </div>
              </div>
              <div className="flex justify-between m-3 ">
                <div className="">
                  <p className="text-slate-500 text-xs">{menu.name}</p>
                  <p className="font-medium text-sm">{menu.price}</p>
                  <p className="text-xs">{menu.description}</p>
                </div>
                <div className="bg-white border border-slate-400 w-8 h-8 flex justify-center items-center rounded-full mt-2 mx-2 hover:bg-[#00B207] hover:text-white">
                  <GiShoppingBag className="text-xl " />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
