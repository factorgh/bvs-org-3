import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import SimpleBackdrop from "../MyBackDrop";
import { FaShoppingBasket } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full  bg-[#f4f4f4]">
      <div className="container mx-auto flex justify-between items-center p-2">
        <div className={styles.header__banner}>
          <Link to="/">
            <img src="images/icons/logo.png" className="w-[150px] h-[50px]" />
          </Link>
        </div>
        <div className="md:hidden">
          <SimpleBackdrop />
        </div>

        <div className="hidden md:block">
          <ul className="flex justify-end gap-3 p-3 items-center ">
            <li className="p-1 mx-3 text-[#1d1e20] font-bold list-none visited hover:border-b-2 hover:border-black ">
              <Link to="/">Home</Link>
            </li>
            <li className="p-1  text-[#1d1e20] list-none hover:border-b-2 hover:border-black hover:transition-100">
              <Link to="/about-us">About</Link>
            </li>
            <li className="p-1  text-[#1d1e20] list-none  hover:border-b-2 hover:border-black ">
              <Link to="/locations">Locations</Link>
            </li>
            <li className="p-1  text-orange-500 list-none  hover:border-b-2 hover:border-black ">
              <button>
                <a href="" className="flex flex-row items-center ">
                  {" "}
                  <FaShoppingBasket />{" "}
                  <span className="text-sm px-1">Shop</span>
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
