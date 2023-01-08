import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Head>
        <title>Jadoo | Travel Agency</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="./images/favicon.png" />
        <meta
          name="description"
          content="Jadoo Travel agency is one of the leading agencies that has smooth process and provides affordable pricing."
        />
        <link
          rel="canonical"
          href="https://www.jadoo-travel-agency.vercel.app/"
        />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type”" content="website" />
        <meta
          property="og:title"
          content="Jadoo – Travel with the best travel agency for a lovely travel experience."
        />
        <meta
          property="og:description"
          content="Jadoo Travel agency is one of the leading agencies that has smooth process and provides affordable pricing."
        />
        <meta
          property="og:url"
          content="https://www.jadoo-travel-agency.vercel.app/"
        />
        <meta property="og:site_name" content="Jadoo Travel Agency" />
        <meta property="og:image" content="" />
        <meta property="og:image:secure_url" content="" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="Jadoo Travel agency is one of the leading agencies that has smooth
    process and provides affordable pricing."
        />
        <meta
          name="twitter:title"
          content="Jadoo – Travel with the best travel agency for a lovely travel experience."
        />
        <meta name="twitter:site" content="@imaisam" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:creator" content="@imaisam" />

        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
      </Head>
      <div
        id="header-left-decor"
        className="absolute hidden md:block md:-top-32 md:-left-44 h-[378px] w-[396px]  bg-pink-circle bg-no-repeat bg-cover"
      ></div>
      <header className="relative w-full mx-auto mt-5 mb-20 md:w-10/12">
        <motion.nav
          initial={{ y: -20 }}
          transition={{ duration: 1 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl px-4 mx-auto">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <div>
                  <a href="#" className="flex items-center px-2 py-4">
                    <img
                      src="/images/logo.png"
                      alt="Logo"
                      className="w-full mr-2"
                    />
                  </a>
                </div>
              </div>
              <ul className="items-center hidden gap-10 text-sm md:flex font-poppins">
                <li>
                  <a href="#">Destinations</a>
                </li>
                <li>
                  <a href="#">Hotels</a>
                </li>
                <li>
                  <a href="#">Flights</a>
                </li>
                <li>
                  <a href="#">Bookings</a>
                </li>
                <li>
                  <a href="#">Flights</a>
                </li>
              </ul>
              <ul className="items-center hidden gap-10 text-sm md:flex font-poppins">
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-4 py-2 rounded-md border-[2px] border-gray-300"
                  >
                    Sign up
                  </a>
                </li>
                <li className="">
                  <select
                    className="px-2 py-2 bg-transparent"
                    name="langs"
                    id="lang-select"
                    aria-label="Select site language"
                  >
                    <option value="en" id="en">
                      EN
                    </option>
                    <option value="de" id="de">
                      DE
                    </option>
                    <option value="tr" id="tr">
                      TR
                    </option>
                  </select>
                </li>
              </ul>
              <div className="flex items-center md:hidden">
                <button
                  className="outline-none"
                  id="btn-mobile-menu"
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  <svg
                    className="w-6 h-6 text-gray-500 hover:text-primary"
                    x-show="!showMenu"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            id="mobile-menu"
            className={`bg-[#FFF1DA] transition transform duration-300 ease-linear ${
              open ? "flex" : "hidden"
            }`}
          >
            <ul
              className={`flex flex-col p-4 mx-4 space-y-5 text-sm sm:hidden font-poppins`}
            >
              <li>
                <a href="/#">Destinations</a>
              </li>
              <li>
                <a href="/#">Hotels</a>
              </li>
              <li>
                <a href="/#">Flights</a>
              </li>
              <li>
                <a href="/#">Bookings</a>
              </li>
              <li>
                <a href="/#">Flights</a>
              </li>
              <li>
                <a href="/#">Login</a>
              </li>
              <li className="-ml-2">
                <a
                  href="#"
                  className="px-2 py-2 rounded-md inline-block border-[2px] border-gray-300"
                >
                  Sign up
                </a>
              </li>
              <li className="">
                <select
                  className="py-2 bg-transparent"
                  name="langs"
                  id="lang-select"
                >
                  <option value="en">EN</option>
                  <option value="de">DE</option>
                  <option value="tr">TR</option>
                </select>
              </li>
            </ul>
          </div>
        </motion.nav>
        <div className="absolute -top-[16rem] -right-[16.5rem] -z-10 rotate-10 h-[872px] w-[786px] bg-hero bg-no-repeat bg-cover" />
        <div className="flex flex-col my-20 md:mx-12 md:flex-row">
          <motion.div
            initial={{ x: -100 }}
            transition={{ duration: 1.5 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            className="flex-1 mx-8 md:mt-8"
          >
            <p className="font-bold uppercase text-primary/80">
              Best destinations around the world
            </p>
            <h1 className="my-10 text-5xl font-bold text-gray-900 md:text-7xl">
              Travel,
              <span
                className="inline-block ml-2"
                style={{
                  backgroundImage: `url('/images/decore-red.png')`,
                  backgroundPosition: "bottom",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "320px 30px",
                }}
              >
                enjoy
              </span>
              and live a new
            </h1>

            <p className="text-sm font-poppins">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
            <div className="flex items-center gap-12">
              <div className="drop-shadow-secondary-button">
                <button className="px-6 py-3 mt-8 text-sm text-center text-white bg-secondary/80 rounded-xl">
                  Find our more
                </button>
              </div>
              <div className="flex mt-14">
                <div className="w-24 h-24 rounded-full drop-shadow-secondary-button">
                  <a href="#" aria-label="Play demo link">
                    <div className="grid w-16 h-16 rounded-full place-items-center bg-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
                <button className="inline -ml-3 -mt-7">Play Demo</button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100 }}
            transition={{ duration: 1.5 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            className="relative flex-1 mt-24 md:mt-0"
          >
            <img
              src="/images/traveller.png"
              className="-mt-14 w-[750px] md:w-full md:right-7 md:absolute"
              alt="girl travelling"
            />
            <img
              src="/images/plane.png"
              alt="plane"
              className="absolute left-[1rem] top-20 md:left-[6rem] md:top-2"
            />
            <img
              src="/images/plane.png"
              alt="plane"
              className="absolute right-0 -top-12 md:top-12"
            />
          </motion.div>
        </div>
      </header>
    </>
  );
}
