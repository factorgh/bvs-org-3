import React from "react";

import styles from "./Home.module.css";
import { MdOutlineSearch } from "react-icons/md";
import Display from "../../components/Display/Display";
import { products } from "../../data/data";
import Review from "../../components/Review/Review";

const Home = () => {
  return (
    <>
      <section className={styles.first__section}>
        <div className="flex  flex-col container mx-auto items-center justify-center">
          <p className="text-[#1d1e20] text-3xl md:text-4xl font-bold">
            Discover Freshness,
          </p>
          <p className="text-4xl md:text-6xl text-[#a66011] font-bold p-2">
            Straight from the Farm
          </p>
          <p className="text-4xl md:text-6xl text-[#a66011] font-bold p-2">
            to Your Doorstep !
          </p>
        </div>
        <h5 className="text-[#8e9199] md:text-2xl">
          Your direct connection to quality groceries and farm-produced
        </h5>
        <div className="flex items-center justify-center mt-3">
          <div className={styles.first__section__input}>
            <MdOutlineSearch color="grey" />
            <input
              type="text"
              placeholder="Search for a product"
              className={styles.input__field}
            />
          </div>
          <button className="p-2 m-1 text-center bg-orange-500 rounded-md">
            Search
          </button>
        </div>
      </section>
      <section className="conatiner mx-auto  flex flex-col gap-5 items-start">
        <div className="mt-5 p-3">
          {products.map((item) => (
            <Display key={item.id} item={item} />
          ))}
        </div>
        <button className="bg-orange-500 m-5 hover:bg-orange-300 text-white p-2 mx-auto rounded-xl w-[150px]">
          Start Shopping
        </button>
      </section>
      <section className={styles.third__section}>
        <h2 className="text-2xl md:text-3xl text-black p-1">
          {" "}
          What our happy customers say
        </h2>
        <h5 className="text-[10px] md:text-sm text-gray-500 mb-5">
          Read real experiences form our customers
        </h5>
        <Review />
      </section>
    </>
  );
};

export default Home;
