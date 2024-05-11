import BreadCrums from "./BreadCrums/BreadCrums";
import FilterProduct from "../Filter/FilterProduct/FilterProduct";
import UnderFilter from "../UnderFilter/UnderFilter";
import Products from "../AllProducts/Products";
import { useState, useEffect } from "react";
import Pagenation from "../Pagenation/Pagenation";
import { Outlet } from "react-router-dom";

function Shop() {
  const [select, setSelect] = useState("");
  const [categories, setCategories] = useState("");
  const [rating, setRating] = useState([]);
  const [tag, setTag] = useState([]);
  const [price, setPrice] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    filterProducts();
  }, [select, categories, rating, tag, price, currentPage]);

  const filterProducts = () => {
    let filteredList = Products;

    if (select) {
      filteredList = filteredList.filter(
        (product) => product.description === select
      );
    }

    if (categories) {
      filteredList = filteredList.filter(
        (product) => product.category === categories
      );
    }

    if (rating.length) {
      filteredList = filteredList.filter((product) =>
        rating.includes(parseInt(product.stars).toString())
      );
    }

    if (tag.length) {
      filteredList = filteredList.filter((product) =>
        tag.includes(product.tag)
      );
    }

    if (price.length) {
      filteredList = filteredList.filter(
        (product) =>
          parseInt(product.prices) > price[0] &&
          parseInt(product.prices) < price[1]
      );
    }

    setFilteredProducts(
      filteredList.slice(currentPage * 12, (currentPage + 1) * 12)
    );
  };

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const onListSelected = (value) => {
    setSelect(value);
  };

  const handleCatagories = (value) => {
    setCategories(value);
  };

  const handleRating = (value) => {
    setRating(value);
  };

  const handleTag = (value) => {
    setTag(value);
  };

  const handleSelectedPrice = (value) => {
    setPrice(value);
  };

  return (
    <>
      <FilterProduct onGetSelect={onListSelected} />
      <UnderFilter
        handleCatagories={handleCatagories}
        handleRating={handleRating}
        handleTag={handleTag}
        handleSelectedPrice={handleSelectedPrice}
        productList={filteredProducts}
      />
      <Pagenation
        handlePageClick={handlePageClick}
        totalPages={Math.ceil(Products.length / 10)}
      />
    </>
  );
}

export default Shop;
