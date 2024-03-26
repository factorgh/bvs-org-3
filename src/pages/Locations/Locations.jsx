import React from "react";
import Header from "../../components/Header/Header";
import MyForm from "../../components/MyForm";

const Locations = () => {
  return (
    <div className="">
      <div className="grid md:grid-cols-2 container mx-auto ">
        <div className="flex flex-col gap-5 items-center">
          <div className="mt-10 p-5 ">
            <h3 className="text-3xl mb-5 font-bold ">Locations</h3>
            <p>
              <h3 className="text-gray-500">
                Find our major outlets in any of these locations near you
              </h3>
              <ul className="list-disc mb-10">
                <li className="text-orange-500">
                  {" "}
                  Achimota, Old Station, Unity Oil - 0206933383 Haatso
                </li>
                <li>
                  KFC Shell near Wisconsin University - 0550024062 East Legon,
                  AnC Corner
                </li>
                <li>
                  {" "}
                  (Ground Floor), inside Life Supermarket - 0541650927 Oyarifa,
                </li>
                <li>
                  {" "}
                  Oyarifa Mall (Ground Floor), inside O'Mart Supermarket -
                  0244465781
                </li>
              </ul>
            </p>
          </div>
          <div>
            <div className="flex flex-row  ">
              <img
                src="images/icons/image-c.png"
                className="w-[100px] h-[100px] rounded-xl mr-5"
              />
              <div className="w-[300px] my-5">
                <h2 className="text-3xl font-bold ">Key Distributors</h2>
                <p className="text-gray-500 ">
                  Pick up any of our items or make your personal reservations
                  with key distributors at any of the following points
                </p>
                <div className="m-5 p-3">
                  <ul className="list-disc mb-10">
                    <li className="text-orange-500">
                      {" "}
                      Dansoman, Sakaman, JP Fuel Station
                    </li>
                    <li>Kwabenya, Farmer Joe Supermarket</li>
                    <li> Lakeside, Kamamy Supermarket</li>
                    <li> Spintex, Petrosol Fuel Station</li>
                    <li> East Legon, Adjriganor Puma Fuel Station</li>
                  </ul>
                  <h3 className="text-2xl font-bold">Key Distributors</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="images/icons/image-d.png"
            className="h-[450px] w-[400px] mt-10"
          />
          <img
            src="images/icons/image-e.png"
            className="h-[150px] w-[400px] mt-5 mb-5"
          />
        </div>
      </div>
      <div className=" bg-[#f4f4f4] p-5">
        <div className="grid md:grid-cols-2 mt-5 container mx-auto">
          <div className="flex flex-col m-3 p-2 items-start justify-start gap-3 text-gray-500 ">
            <h3 className="text-3xl md:text-5xl text-black  font-bold p-5">
              Contact Us
            </h3>
            <p>
              We are here to answer any questions you may have and also provide
              you the best service possible
              <h3 className="mt-5">Tel: 0206933383</h3>
              <h3>email: info@bvsgh.online</h3>
            </p>
          </div>
          <div className="flex items-center">
            <MyForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
