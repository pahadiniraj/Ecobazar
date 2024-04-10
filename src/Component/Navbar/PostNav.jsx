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
      <nav className=" bg-slate-100 px-4 w-full text-sm ">
        <div className=" container flex justify-between mx-auto px-28 ">
          <div className="flex gap-6 ">
            <div className="flex py-4 bg-[#00B207] gap-5 p-4  justify-center items-center">
              <MenuRoundedIcon className="text-white"></MenuRoundedIcon>
              <span className="text-white text-sm">All Categories</span>
              <KeyboardArrowDownRoundedIcon className="text-white"></KeyboardArrowDownRoundedIcon>
            </div>

            <div className="  py-4 text-xs ">
              <ul className="flex gap-7 items-center  ">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      ` ${isActive ? "text-[#00B207]" : "text-[#737373]"} `
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
                      ` ${isActive ? "text-[#00B207]" : "text-[#737373]"} `
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
                      ` ${isActive ? "text-[#00B207]" : "text-[#737373]"} `
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
                      ` ${isActive ? "text-[#00B207]" : "text-[#737373]"} `
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
                      ` ${isActive ? "text-[#00B207]" : "text-[#737373]"} `
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      ` ${isActive ? "text-[#00B207]" : "text-[#737373]"} `
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className=" flex py-4 gap-4 ml-20">
            <FavoriteBorderRoundedIcon></FavoriteBorderRoundedIcon>
            <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
            <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
          </div>
        </div>
      </nav>
    </>
  );
}
export default PostNav;
