import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function Category({}: Props) {
  return (
    <section className="w-10/12 mx-auto mt-[15rem] pb-10">
      <div className="relative text-center font-poppins">
        <p className="uppercase">Category</p>
        <h2 className="my-4 text-4xl font-semibold text-gray-800">
          We Offer Best Services
        </h2>
        <img
          src="/images/pluses.png"
          className="absolute right-0 -top-2"
          role="presentation"
        />
      </div>
      <motion.div
        initial={{ y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center my-14 gap-14 font-poppins"
      >
        <div className="relative group">
          <div className="opacity-0 group-hover:opacity-100 transition duration-200 delay-100 ease-in absolute -bottom-9 -left-10 w-20 h-20 rounded-bl-sm rounded-tl-[2rem] bg-primary rounded-br-md"></div>
          <div className="grid px-3 pt-4 pb-10 transition transform place-items-center rounded-[2rem] hover:scale-110 hover:bg-white hover:drop-shadow-2xl cursor-default">
            <div className="relative flex mb-4 w-max">
              <img
                src="./images/dish-antenna.png"
                className="z-10"
                role="presentation"
              />
              <div className="absolute w-12 h-12 rounded-tr-sm rounded-bl-sm -bottom-1 -right-6 bg-light-orange rounded-br-2xl"></div>
            </div>
            <div className="text-center">
              <h3 className="font-sans font-medium text-gray-800">
                Calculated Weather
              </h3>
              <p className="max-w-[11rem] text-gray-500 mt-3 text-sm">
                Built Wicket longer admire do barton vanity itself do in it.
              </p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="opacity-0 group-hover:opacity-100 transition duration-200 delay-100 ease-in absolute -bottom-9 -left-10 w-20 h-20 rounded-bl-sm rounded-tl-[2rem] bg-primary rounded-br-md"></div>
          <div className="grid px-3 pt-4 pb-10 transition transform place-items-center rounded-[2rem] hover:scale-110 hover:bg-white hover:drop-shadow-2xl cursor-default">
            <div className="relative flex mb-4 w-max">
              <img src="/images/plane.png" className="z-10" alt="Plane image" />
              <div className="absolute w-12 h-12 rounded-bl-2xl rounded-tr-2xl -top-2 left-6 bg-light-orange rounded-br-md"></div>
            </div>
            <div className="text-center">
              <h4 className="font-sans font-medium text-gray-800">
                Best Flights
              </h4>
              <p className="max-w-[11rem] text-gray-500 mt-3 text-sm">
                Engrossed listening. Park gate sell they west hard for the.
              </p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="opacity-0 group-hover:opacity-100 transition duration-200 delay-100 ease-in absolute -bottom-9 -left-10 w-20 h-20 rounded-bl-sm rounded-tl-[2rem] bg-primary rounded-br-md"></div>
          <div className="grid px-3 pt-4 pb-10 transition transform place-items-center rounded-[2rem] hover:scale-110 hover:bg-white hover:drop-shadow-2xl cursor-default">
            <div className="relative flex mb-4 w-max">
              <img src="./images/mic.png" className="z-10" alt="Mic image" />
              <div className="absolute w-10 h-10 rounded-br-sm rounded-tr-xl rounded-bl-xl -top-5 -right-20 bg-light-orange"></div>
            </div>
            <div className="text-center">
              <h4 className="font-sans font-medium text-gray-800">
                Local Events
              </h4>
              <p className="max-w-[11rem] text-gray-500 mt-3 text-sm">
                Barton vanity itself do in it. Preferd to men it engrossed
                listening.
              </p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="opacity-0 group-hover:opacity-100 transition duration-200 delay-100 ease-in absolute -bottom-6 -left-10 w-20 h-20 rounded-bl-sm rounded-tl-[2rem] bg-primary rounded-br-md"></div>
          <div className="grid px-3 pt-4 pb-10 transition transform place-items-center rounded-[2rem] hover:scale-110 hover:bg-white hover:drop-shadow-2xl cursor-default">
            <div className="relative flex mb-4 w-max">
              <img
                src="/images/power-supply.png"
                className="z-10"
                alt="power supply image"
              />
              <div className="absolute w-10 h-10 rounded-tr-sm rounded-br-sm rounded-bl-xl -bottom-2 -right-6 bg-light-orange"></div>
            </div>
            <div className="text-center">
              <h4 className="font-sans font-medium text-gray-800">
                Customization
              </h4>
              <p className="max-w-[11rem] text-gray-500 mt-3 text-sm">
                We deliver outsourced aviation services for military customers
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
