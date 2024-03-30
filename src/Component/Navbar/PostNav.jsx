import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { NavLink } from "react-router-dom";
import React from "react";
function PostNav() {
  return (
    <>
      <nav className=" flex justify-between  bg-slate-100 px-4 ">
        <div className="flex py-4 bg-[#00B207] gap-5 ">
          <MenuRoundedIcon className="text-white"></MenuRoundedIcon>
          <span className="text-white">All Categories</span>
          <KeyboardArrowDownRoundedIcon className="text-white"></KeyboardArrowDownRoundedIcon>
        </div>

        <div className="  py-4  ">
          <ul className="flex gap-7 ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  ` ${isActive ? "text-green-600" : "text-black"} `
                }
              >
                Home
                <KeyboardArrowDownRoundedIcon></KeyboardArrowDownRoundedIcon>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  ` ${isActive ? "text-green-600" : "text-black"} `
                }
              >
                Shop
                <KeyboardArrowDownRoundedIcon></KeyboardArrowDownRoundedIcon>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pages"
                className={({ isActive }) =>
                  ` ${isActive ? "text-green-600" : "text-black"} `
                }
              >
                Pages
                <KeyboardArrowDownRoundedIcon></KeyboardArrowDownRoundedIcon>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  ` ${isActive ? "text-green-600" : "text-black"} `
                }
              >
                Blog
                <KeyboardArrowDownRoundedIcon></KeyboardArrowDownRoundedIcon>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  ` ${isActive ? "text-green-600" : "text-black"} `
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  ` ${isActive ? "text-green-600" : "text-black"} `
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className=" flex py-4 gap-4 ml-20">
          <FavoriteBorderRoundedIcon></FavoriteBorderRoundedIcon>
          <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
          <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
        </div>
      </nav>
    </>
  );
}
export default PostNav;
