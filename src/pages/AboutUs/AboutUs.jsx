import { Button } from "@mui/material";
import React from "react";

const AboutUs = () => {
  return (
    <div className=" w-full bg-[#f5f5f4] ">
      <div className="grid md:grid-cols-2 p-3  md:mb-5 container mx-auto ">
        <div className="flex flex-col justify-center items-start p-5">
          <h3 className="text-3xl md:text-5xl font-bold px-5">About us</h3>
          <p className=" text-gray-500 p-5  mx-auto">
            Welcome to Bvs, your premier destination for quality butchery
            products in Accra. With years of experience in the industry, we are
            committed to providing our customers with the finest cuts of meat
            sourced from trusted suppliers. At Bvs, we take pride in offering a
            wide selection of fresh and flavourful meats and vegetables that are
            sure to satisfy even the most discerning palates. Our team of
            skilled butchers ensures that every cut is expertly prepared and
            delivered with utmost care. Whether you're a home cook or a
            professional chef, you can rely on us for top-notch products and
            exceptional customer service.
          </p>
        </div>

        <div className="flex items-center">
          <img
            src="images/about-us.png"
            className="w-[500px] p-2 ml-5 border-gray-100 rounded-lg h-[300px]"
          />
        </div>
      </div>
      <div className="bg-white flex flex-col items-center justify-center">
        <div className="container mx-auto flex flex-col   w-full p-5 ">
          <h3 className=" text-3xl my-10 font-bold ">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            <div className="flex flex-row  ">
              <img
                src="images/icons/image-a.png"
                className="w-[100px] h-[100px] rounded-xl mr-5"
              />
              <div className="w-[300px] my-10">
                <h2 className="text-3xl font-bold ">Fresh Cuts</h2>
                <p className="text-gray-500 ">
                  Enjoy the finest produce, harvested at the peak of freshness
                  for unbeatable taste and nutrition.
                </p>
              </div>
            </div>
            <div className="flex flex-row ">
              <img
                src="images/icons/image-b.png"
                className="w-[100px] h-[100px] rounded-xl mr-5"
              />
              <div className="my-10">
                <h2 className="text-3xl font-bold ">Custom Butchering</h2>
                <p className="text-gray-500 ">
                  From pasture-raised eggs to grass-fed meats, our commitment to
                  quality extends across our entire range.
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <img
                src="images/icons/image-c.png"
                className="w-[100px] h-[100px] rounded-xl mr-5"
              />
              <div className="my-10">
                <h2 className="text-3xl font-bold ">Direct Delivery</h2>
                <p className="text-gray-500 ">
                  Skip the store queues and enjoy the ease of online ordering.
                  Your groceries, personally selected, will arrive at your
                  doorstep.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Button
          variant="contained"
          sx={{ width: "150px", marginBottom: "15px" }}
          color="success"
        >
          {" "}
          Get in touch
        </Button>
      </div>
    </div>
  );
};

export default AboutUs;
