import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiStarSFill } from "react-icons/ri";
import styles from "./Review.module.css";
import { Avatar } from "@mui/material";

const Review = () => {
  return (
    <div className="flex w-full border bg-white mx-5 p-5 shadow-lg md:justify-center md:w-[500px]  relative">
      <RiDoubleQuotesL className="absolute top-0 left-0 text-[#c8c7ca] text-5xl" />
      <div className={styles.review__content__main}>
        <div className={styles.review__content__stars}>
          <RiStarSFill color="gold" size={30} />
          <RiStarSFill color="gold" size={30} />
          <RiStarSFill color="gold" size={30} />
          <RiStarSFill color="gold" size={30} />
          <RiStarSFill color="gold" size={30} />
        </div>
        <h4 className="font-bold">Emily</h4>
        <p className="text-[10px] md:text-md text-gray-500">
          From pasture-raised eggs to grass-fed meats, our <br /> commitment to
          quality extends across <br /> our entire range
        </p>
      </div>
      <Avatar
        sx={{ width: "90px", height: "90px", marginLeft: "20px" }}
        src="/images/profile.jpg"
        alt="profile"
      />
    </div>
  );
};

export default Review;
