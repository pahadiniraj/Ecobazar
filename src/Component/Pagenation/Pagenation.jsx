import React from "react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const Pagenation = ({ handlePageClick }) => {
  return (
    <div className="p-6">
      <ReactPaginate
        previousLabel={
          <span>
            <MdKeyboardArrowLeft className="hover:bg-green-500  hover:text-white h-7 w-7 rounded-full bg-[#F2F2F2] text-[#B3B3B3] " />
          </span>
        }
        nextLabel={
          <span>
            <MdKeyboardArrowRight className="hover:bg-green-500 hover:text-white h-7 w-7 rounded-full  bg-[#F2F2F2] text-[#B3B3B3]" />
          </span>
        }
        breakLabel={"..."}
        pageCount={"21"}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={(event) => handlePageClick(event.selected)}
        className="flex items-center justify-center gap-5 "
        pageClassName="text-base rounded-full w-7 h-7 hover:bg-green-500 hover:text-white flex items-center justify-center"
        activeClassName="bg-green-500 text-white"
      />
    </div>
  );
};

export default Pagenation;
