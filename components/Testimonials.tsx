import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/scrollbar";

// import required modules
import { EffectCards, Scrollbar } from "swiper";

type Props = {};

export default function Testimonials({}: Props) {
  return (
    <section className="w-8/12 pb-10 mx-auto mb-20">
      <div className="relative flex flex-col items-center justify-between w-full gap-10 md:gap-20 md:flex-row">
        <motion.div
          initial={{ x: -100 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          className="max-w-lg text-center text-gray-800 md:text-start font-poppins"
        >
          <p className="text-gray-600">Testimonials</p>
          <h2 className="my-4 text-3xl font-bold text-gray-800 md:text-5xl font-volkhof">
            What People Say
          </h2>
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          className="max-w-sm md:max-w-md mt-14"
        >
          <Swiper
            scrollbar={{
              hide: true,
            }}
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Scrollbar]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="relative flex flex-col mt-8 mx-8 mb-4 py-6 px-8 font-poppins bg-white rounded-lg shadow-lg text-[#5E6282]">
                <img
                  src="./images/mike.png"
                  alt="Profile image of a man"
                  className="absolute rounded-full w-14 h-14 -left-6 -top-6"
                />
                <p className="">
                  "On the Windows talking painted pasture yet its express
                  parties use. Sure last upon he same as knew next. Of believed
                  or diverted no."
                </p>
                <p className="mt-6">Mike taylor</p>
                <p className="mt-2 text-sm">US, CA</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative flex flex-col mt-8 mx-8 mb-4 py-6 px-8 font-poppins bg-white rounded-lg shadow-lg text-[#5E6282]">
                <img
                  src="./images/person-2.jpg"
                  alt="Profile image of a man"
                  className="absolute object-cover rounded-full w-14 h-14 -left-6 -top-6"
                />
                <p className="">
                  "On the Windows talking painted pasture yet its express
                  parties use. Sure last upon he same as knew next. Of believed
                  or diverted no."
                </p>
                <p className="mt-6">Mike taylor</p>
                <p className="mt-2 text-sm">US, CA</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
