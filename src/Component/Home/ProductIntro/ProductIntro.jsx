import { useState } from "react";
import { NavLink } from "react-router-dom";
import Products from "../../AllProducts/Products";
import Cards from "../../Cards/Cards";

function ProductIntro() {
  const cat = [
    {
      name: "All",
      category: "all",
    },
    {
      name: "Vegetable",
      category: "vegetable",
    },
    {
      name: "Fruit",
      category: "fruit",
    },
    {
      name: "Meat & Fish",
      category: "meatandfish",
    },
  ];

  const AllProduct = Products.slice(0, 20);
  const [items, setItems] = useState(AllProduct);
  const [activeCategory, setActiveCategory] = useState("all");

  const filterItems = (category) => {
    const updatedItems =
      category === "all"
        ? AllProduct
        : Products.filter((item) => item.category === category);
    setItems(updatedItems);
    setActiveCategory(category);
  };

  return (
    <div className="bg-[#EDF2EE]  w-full mt-5 py-20  ">
      <div className="xs:container xs:mx-auto ">
        <div className="flex flex-col justify-center items-center  ">
          <h3 className=" xxs:text-lg xs:text-2xl md:text-4xl font-semibold text-center md:mt-10 mt-5">
            Introducing Our Product
          </h3>
          <div className="flex justify-center  gap-3 text-xxs xxs:text-xxs xs:text-xs my-5">
            {cat.map((category, index) => (
              <button
                key={index}
                onClick={() => filterItems(category.category)}
                className={`${
                  activeCategory === category.category
                    ? "text-green-600 border-b-2 border-green-500 pb-2"
                    : "text-[#808080]"
                }`}
              >
                {category.name}
              </button>
            ))}
            <div className="relative top-1 text-[#808080]">|</div>
            <NavLink to="product" className="pt-1 text-[#808080]">
              View All
            </NavLink>
          </div>
        </div>
        <div className="grid grid-cols-4 xxxs:px-5   xxxs:grid-cols-2  xs:grid-cols-3  md:grid-cols-4">
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
  );
}

export default ProductIntro;
