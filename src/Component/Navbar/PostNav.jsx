import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { CgMenuLeft } from "react-icons/cg";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import { useState } from "react";
import Navigation from "./Navigation";
import AnimatedNav from "./AnimatedNav";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
function PostNav() {
  const [showNav, setShowNav] = useState(false);
  const [showNavPop, setShowNavPop] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = () => {
    setShowNavPop((prevShowNavPop) => {
      const newShowNavPop = !prevShowNavPop;
      navigate("/", { state: { showNavPop: newShowNavPop } });
      return newShowNavPop;
    });
  };

  const handleMenuClick = () => {
    setShowNav(!showNav);
  };
  const handleClose = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <nav className=" bg-[#F2F2F2] px-4 w-full text-sm  shadow-lg  ">
        <div className=" container mx-auto flex justify-between items-center w-full xl:px-28 md:px-5 ">
          <div className="flex items-center justify-start  w-5/6 gap-4">
            <div className="flex py-4 bg-[#00B207] p-4 justify-center items-center gap-3  ">
              <button onClick={handleMenuClick} className="md:hidden ">
                {showNav ? (
                  <CgMenuLeft className="text-white " size={23}></CgMenuLeft>
                ) : (
                  <MenuRoundedIcon className="text-white "></MenuRoundedIcon>
                )}
              </button>

              <div
                className="flex items-center justify-center cursor-pointer "
                onClick={handleNavClick}
              >
                <div className="text-white text-sm hidden xs:block md:px-3">
                  All Categories
                </div>
                <div className="hidden md:block ">
                  <KeyboardArrowDownRoundedIcon className="text-white "></KeyboardArrowDownRoundedIcon>
                </div>
              </div>
            </div>

            <Navigation />
          </div>
          <div className=" flex  gap-4 ">
            <FavoriteBorderRoundedIcon></FavoriteBorderRoundedIcon>
            <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
            <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {showNav && (
          <AnimatedNav
            handleClose={handleClose}
            showNav={showNav}
          ></AnimatedNav>
        )}
      </AnimatePresence>
    </>
  );
}
export default PostNav;
