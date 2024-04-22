import BreadCrums from "./BreadCrums/BreadCrums";
import FilterProduct from "../Filter/FilterProduct/FilterProduct";
import UnderFilter from "../UnderFilter/UnderFilter";
import Products from "../AllProducts/Products";
import { useState, useEffect } from "react";
import Pagenation from "../Pagenation/Pagenation";
import { FilterList } from "@mui/icons-material";

function Shop() {
  const [select, setSelect] = useState();
  const [productList, setProductList] = useState(Products);
  const [categories, setCategories] = useState();
  const [rating, setRating] = useState();

  useEffect(() => {
    filterProducts();
  }, [select, categories, rating]);

  const filterProducts = () => {
    let filteredList = Products;

    if (select) {
      filteredList = filteredList.filter(
        (product) => product.description === select
      );
      setProductList(filteredList);
    }
    if (!select) {
      filteredList = Products;
      setProductList(filteredList);
    }
    if (categories) {
      filteredList = filteredList.filter(
        (product) =>
          product.category === categories || product.description === categories
      );
      setProductList(filteredList);
    }

    if (rating) {
      filteredList = filteredList.filter((product) =>
        rating.includes(product.stars.toString())
      );
      setProductList(filteredList);
      if (rating.length === 0) {
        filteredList = Products;
        setProductList(filteredList);
      }
    }
  };

  const onListSelected = (value) => {
    setSelect(value);
  };

  const handleCatagories = (value) => {
    setCategories(value);
  };

  const handleRating = (value) => {
    console.log(value);
    setRating(value);
  };

  const handleTag = (value) => {
    console.log(value);
  };

  const handleSelectedPrice = (value) => {
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
      <Pagenation />
    </>
  );
}
export default Shop;
