import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Destinations({}: Props) {
  return (
    <section className="w-10/12 mt[10rem] pb-10 mx-auto">
      <motion.div
        initial={{ y: 120 }}
        transition={{ duration: 1 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        className="relative text-center font-poppins"
      >
        <p className="text-gray-600">Top Selling</p>
        <h2 className="my-4 text-4xl font-semibold text-gray-800">
          Top Destinations
        </h2>
        <div className="relative flex flex-wrap justify-center my-8 gap-14 font-poppins">
          <div className="flex flex-col flex-wrap gap-10 mt-5 sm:flex-row">
            <div className="flex-col pb-6 bg-white shadow-xl overflow-hidden rounded-xl w-[280px] transition transform hover:scale-105 duration-300 cursor-pointer">
              <img
                src="./images/italy.png"
                className="w-full h-[280px] object-cover object-top"
                alt=""
              />
              <div className="flex justify-between px-4 mt-4 mb-2 font-poppins">
                <p>Rome, Italy</p>
                <p>$5,42k</p>
              </div>
              <p className="px-4 text-sm text-start font-poppins">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block mr-2"
                  width="15"
                  height="15"
                  viewBox="0 0 16.25 16.25"
                >
                  <g
                    id="navigation_2"
                    data-name="navigation 2"
                    transform="translate(-1.875 -1.875)"
                  >
                    <g id="Navigation_2">
                      <path
                        id="Vector"
                        d="M16.194.886l-6.875,15a.625.625,0,0,1-1.191-.208L7.546,8.7.573,8.123A.625.625,0,0,1,.365,6.932l15-6.875a.625.625,0,0,1,.829.829Z"
                        transform="translate(1.875 1.875)"
                        fill="#080809"
                      />
                    </g>
                  </g>
                </svg>
                10 Days Trip
              </p>
            </div>
            <div className="flex-col pb-6 bg-white shadow-xl overflow-hidden rounded-xl w-[280px] transition transform hover:scale-105 duration-300 cursor-pointer">
              <img
                src="./images/uk.png"
                className="w-full h-[280px] object-cover object-top"
                alt="London Image"
              />
              <div className="flex justify-between px-4 mt-4 mb-2 font-poppins">
                <p>London, UK</p>
                <p>$4,2k</p>
              </div>
              <p className="px-4 text-sm text-start font-poppins">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block mr-2"
                  width="15"
                  height="15"
                  viewBox="0 0 16.25 16.25"
                >
                  <g
                    id="navigation_1"
                    data-name="navigation 1"
                    transform="translate(-1.875 -1.875)"
                  >
                    <g id="Navigation">
                      <path
                        id="Vector"
                        d="M16.194.886l-6.875,15a.625.625,0,0,1-1.191-.208L7.546,8.7.573,8.123A.625.625,0,0,1,.365,6.932l15-6.875a.625.625,0,0,1,.829.829Z"
                        transform="translate(1.875 1.875)"
                        fill="#080809"
                      />
                    </g>
                  </g>
                </svg>
                12 Days Trip
              </p>
            </div>
            <div className="flex-col pb-6 relative bg-white shadow-xl overflow-hidden rounded-xl w-[280px] transition transform hover:scale-105 duration-300 cursor-pointer">
              <img
                src="./images/europe.png"
                className="w-full h-[280px] object-cover"
                alt="An image from one of european cities"
              />
              <div className="flex justify-between px-4 mt-4 mb-2 font-poppins">
                <p>Full Europe</p>
                <p>$15k</p>
              </div>
              <p className="px-4 text-sm text-start font-poppins">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block mr-2"
                  width="15"
                  height="15"
                  viewBox="0 0 16.25 16.25"
                >
                  <g
                    id="navigation_1"
                    data-name="navigation 1"
                    transform="translate(-1.875 -1.875)"
                  >
                    <g id="Navigation">
                      <path
                        id="Vector"
                        d="M16.194.886l-6.875,15a.625.625,0,0,1-1.191-.208L7.546,8.7.573,8.123A.625.625,0,0,1,.365,6.932l15-6.875a.625.625,0,0,1,.829.829Z"
                        transform="translate(1.875 1.875)"
                        fill="#080809"
                      />
                    </g>
                  </g>
                </svg>
                28 Days Trip
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
