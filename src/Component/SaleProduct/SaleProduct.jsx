import React from "react";
import img1 from "../../assets/SaleImg/GreenCap.png";
import img2 from "../../assets/SaleImg/RedCap.png";
import img3 from "../../assets/SaleImg/Sijapuri.png";

const SaleProduct = () => {
  const saleProduct = [
    {
      name: "Red Capsicum",
      cost: "$32.00",
      star: 4,
      src: img1,
    },
    {
      name: "Red Capsicum",
      cost: "$32.00",
      star: 4,
      src: img2,
    },
    {
      name: "Red Capsicum",
      cost: "$32.00",
      star: 4,
      src: img3,
    },
  ];

  return (
    <div>
      <div>
        <h2>Sale Product</h2>
        <div className="w-full border">
          {saleProduct.map((val, idx) => (
            <div key={idx} className="flex justify-start p-2">
              <div>
                <img src={val.src} alt="img" />
              </div>
              <div>
                <p>{val.name}</p>
                <p>{val.cost}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaleProduct;
