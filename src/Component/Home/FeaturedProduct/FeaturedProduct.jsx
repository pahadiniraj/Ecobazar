import React from "react";
import { GiShoppingBag } from "react-icons/gi";
import Stars from "../../Stars/Stars";

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
      stars: 2.4,
      reviews: 50,
    },
    {
      id: 2,
      image: "./ProductImg/Mango.png",
      name: "Sarjapur Mango",
      category: "fruit",
      description: "loremjncjnd",
      discount: "Sale 50%",
      price: "$14.99",
      stars: 3.4,
      reviews: 50,
    },
    {
      id: 3,
      image: "./ProductImg/Tomato.png",
      name: "Red Tomato",
      category: "vegetable",
      description: "loremjncjnd",
      price: "$14.99",
      stars: 4.4,
      reviews: 50,
    },
    {
      id: 4,
      image: "./ProductImg/Cowliflower.png",
      name: "Cowliflower",
      category: "vegetable",
      description: "loremjncjnd",
      price: "$14.99",
      stars: 2.4,
      reviews: 50,
    },
    {
      id: 5,
      image: "./ProductImg/Chilli.png",
      name: "Green Chilli",
      category: "vegetable",
      description: "loremjncjnd",
      discount: "Sale 50%",
      price: "$14.99",
      stars: 1.5,
      reviews: 50,
    },
  ];

  return (
    <div className="w-full  flex items-center justify-center py-10">
      <div className=" md:container md:mx-auto   ">
        <div className="flex justify-center items-center  text-2xl  font-semibold">
          <h2 className="pb-3">FEATURED PRODUCT</h2>
        </div>
        <div className=" grid grid-cols-2 xs:grid-cols-3 md:grid-cols-5 px-8 ">
          {featuredMenu.map((menu, index) => (
            <div
              key={index}
              className={`border group  hover:border-green-600 shadow-md hover:shadow-green-300 relative`}
            >
              {menu.discount ? (
                <div className="bg-red-600 rounded m-2 text-white h-5 w-14 text-xxs px-1 text-center py-1 flex justify-center items-center">
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
                  <p className="text-slate-500 text-xxs group-hover:text-[#2C742F]">
                    {menu.name}
                  </p>
                  <p className="font-medium text-xs">{menu.price}</p>
                  <Stars
                    stars={menu.stars}
                    className={`flex text-[#FF8A00] text-xs`}
                  />
                </div>
                <div className="bg-white border border-slate-400 w-6 h-6 xs:w-8 xs:h-8 flex justify-center items-center rounded-full  group-hover:bg-[#00B207] group-hover:text-white absolute right-1 bottom-2">
                  <GiShoppingBag className="text-sm xs:text-base " />
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
