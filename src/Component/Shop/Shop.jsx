import BreadCrums from "./BreadCrums/BreadCrums";
import FilterProduct from "../Filter/FilterProduct/FilterProduct";
import UnderFilter from "../UnderFilter/UnderFilter";
import Products from "../AllProducts/Products";
import { useState, useEffect } from "react";
import Pagenation from "../Pagenation/Pagenation";

function Shop() {
  const [select, setSelect] = useState("");
  const [productList, setProductList] = useState(Products);
  const [categories, setCategories] = useState("");
  const [rating, setRating] = useState([]);
  const [tag, setTag] = useState([]);
  const [price, setPrice] = useState([]);

  useEffect(() => {
    filterProducts();
  }, [select, categories, rating, tag, price]);

  const filterProducts = () => {
    let filteredList = Products;

    if (select) {
      filteredList = filteredList.filter(
        (product) => product.description === select
      );
      setProductList(filteredList);
    }

    if (!select) {
      setProductList(Products);
    }

    if (categories) {
      filteredList = filteredList.filter(
        (product) => product.category === categories
      );
      setProductList(filteredList);
    }

    if (rating?.length) {
      filteredList = filteredList.filter((product) =>
        rating.includes(parseInt(product.stars).toString())
      );
      setProductList(filteredList);
    }

    if (!rating?.length) {
      setProductList(filteredList);
    }

    if (tag?.length) {
      filteredList = filteredList.filter((product) =>
        tag.includes(product.tag)
      );

      if (!tag.length) {
        setProductList(filteredList);
      }

      setProductList(filteredList);
    }

    if (price?.length) {
      filteredList = filteredList.filter(
        (product) =>
          parseInt(product.prices) > price[0] &&
          parseInt(product.prices) < price[1]
      );
      setProductList(filteredList);
    }
  };

  const onListSelected = (value) => {
    setSelect(value);
    console.log(value);
  };

  const handleCatagories = (value) => {
    setCategories(value);
  };

  const handleRating = (value) => {
    console.log(value);
    setRating(value);
  };

  const handleTag = (value) => {
    setTag(value);
  };

  const handleSelectedPrice = (value) => {
    console.log(value);
    setPrice(value);
  };

  const handlePageClick = (value) => {
    console.log(value);
  };

  return (
    <>
      <BreadCrums />
      <FilterProduct onGetSelect={onListSelected} />
      <UnderFilter
        handleCatagories={handleCatagories}
        handleRating={handleRating}
        handleTag={handleTag}
        handleSelectedPrice={handleSelectedPrice}
        productList={productList}
      />
      <Pagenation handlePageClick={handlePageClick} />
    </>
  );
}
export default Shop;
