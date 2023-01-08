import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="w-full p-10 pt-20 pb-10 mx-auto mt-10 md:w-10/12 md:px-20">
      <motion.div
        initial={{ y: 100 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-14"
      >
        <div className="md:max-w-[14rem] text-center md:text-start">
          <h2 className="text-5xl font-poppins">Jadoo.</h2>
          <p className="mt-3 text-xs text-gray-600 font-poppins">
            Book your trip in minute, get full control for much longer.
          </p>
        </div>
        <div className="flex flex-col mb-10 sm:mb-0">
          <h4 className="font-bold font-poppins">Company</h4>
          <ul className="space-y-2 text-sm font-light text-gray-600">
            <li className="mt-4">
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Mobile</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col mb-10 sm:mb-0">
          <h6 className="font-bold font-poppins">Contact</h6>
          <ul className="space-y-2 text-sm font-light text-gray-600">
            <li className="mt-4">
              <a href="#">Help/FAQ</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Affiliates</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col mb-10 sm:mb-0">
          <h6 className="font-bold font-poppins">More</h6>
          <ul className="space-y-2 text-sm font-light text-gray-600">
            <li className="mt-4">
              <a href="#">Airline fees</a>
            </li>
            <li>
              <a href="#">Airline</a>
            </li>
            <li>
              <a href="#">Affiliates</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center col-span-2 mb-16 md:items-start sm:mb-0 md:ml-8">
          <ul className="flex gap-6 font-light text-gray-600">
            <li>
              <a
                href="#"
                className="grid w-10 h-10 bg-white rounded-full md:w-8 md:h-8 drop-shadow-2xl place-items-center"
                aria-label="Facebook Icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.857"
                  height="12.69"
                  viewBox="0 0 5.857 12.69"
                >
                  <path
                    id="Facebook_Icon"
                    data-name="Facebook Icon"
                    d="M5.537,2.244a3.523,3.523,0,0,0-1.024-.169c-.416,0-1.312.287-1.312.844V4.253H5.329V6.5H3.2V12.69H1.056V6.5H0V4.253H1.056V3.122C1.056,1.418,1.792,0,3.569,0A8.08,8.08,0,0,1,5.857.253Z"
                    fill="#080809"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="grid w-10 h-10 bg-white rounded-full md:w-8 md:h-8 drop-shadow-2xl place-items-center"
                aria-label="Instagram icon"
              >
                <svg
                  id="instagram_1"
                  data-name="instagram 1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <g id="Group">
                    <g id="Group-2" data-name="Group">
                      <path
                        id="Vector"
                        d="M13.656,0H2.344A2.347,2.347,0,0,0,0,2.344V13.656A2.346,2.346,0,0,0,2.344,16H13.656A2.346,2.346,0,0,0,16,13.656V2.344A2.346,2.346,0,0,0,13.656,0Zm1.406,13.656a1.408,1.408,0,0,1-1.406,1.406H2.344A1.408,1.408,0,0,1,.938,13.656V2.344A1.408,1.408,0,0,1,2.344.938H13.656a1.408,1.408,0,0,1,1.406,1.406Z"
                      />
                    </g>
                    <g id="Group-3" data-name="Group">
                      <path
                        id="Vector-2"
                        data-name="Vector"
                        d="M.938,0a.938.938,0,1,0,.938.938A.939.939,0,0,0,.938,0Z"
                        transform="translate(12.219 1.906)"
                      />
                    </g>
                    <g id="Group-4" data-name="Group">
                      <path
                        id="Vector-3"
                        data-name="Vector"
                        d="M4.219,0A4.219,4.219,0,1,0,8.438,4.219,4.223,4.223,0,0,0,4.219,0Zm0,7.5A3.281,3.281,0,1,1,7.5,4.219,3.285,3.285,0,0,1,4.219,7.5Z"
                        transform="translate(3.781 3.781)"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="grid w-10 h-10 bg-white rounded-full md:w-8 md:h-8 drop-shadow-2xl place-items-center"
                aria-label="Twitter icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                >
                  <path
                    id="Vector"
                    d="M16,1.539a6.839,6.839,0,0,1-1.89.518A3.262,3.262,0,0,0,15.553.244a6.555,6.555,0,0,1-2.08.794A3.28,3.28,0,0,0,7.8,3.281a3.378,3.378,0,0,0,.076.748A9.284,9.284,0,0,1,1.114.6,3.281,3.281,0,0,0,2.122,4.982a3.239,3.239,0,0,1-1.482-.4v.036A3.3,3.3,0,0,0,3.268,7.837a3.274,3.274,0,0,1-.86.108,2.9,2.9,0,0,1-.621-.056,3.311,3.311,0,0,0,3.065,2.285,6.591,6.591,0,0,1-4.067,1.4A6.144,6.144,0,0,1,0,11.528,9.234,9.234,0,0,0,5.032,13a9.272,9.272,0,0,0,9.336-9.334c0-.145-.005-.285-.012-.424A6.544,6.544,0,0,0,16,1.539Z"
                    fill="#080809"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <p className="mt-6 mb-4 text-xs font-poppins">Discover our app</p>
          <div className="flex w-full">
            <a
              href="#"
              className="flex items-center justify-center p-2 pl-4 pr-5 bg-black rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18.562"
                height="20"
                viewBox="0 0 18.562 20"
              >
                <g
                  id="google-play_1"
                  data-name="google-play 1"
                  transform="translate(-0.719)"
                >
                  <path
                    id="Vector"
                    d="M10.788,9.671.745,19.342A1.709,1.709,0,0,1,0,17.917V1.426A1.709,1.709,0,0,1,.745,0Z"
                    transform="translate(0.719 0.331)"
                    fill="#2196f3"
                  />
                  <path
                    id="Vector-2"
                    data-name="Vector"
                    d="M13.558,6.624,10.044,10,0,.331A1.339,1.339,0,0,1,.118.249,1.718,1.718,0,0,1,1.853.222Z"
                    transform="translate(1.464 0)"
                    fill="#4caf50"
                  />
                  <path
                    id="Vector-3"
                    data-name="Vector"
                    d="M7.773,3.378a1.736,1.736,0,0,1-.908,1.544L3.514,6.756,0,3.378,3.514,0,6.865,1.834A1.736,1.736,0,0,1,7.773,3.378Z"
                    transform="translate(11.507 6.624)"
                    fill="#f0bb1f"
                  />
                  <path
                    id="Vector-4"
                    data-name="Vector"
                    d="M13.558,3.378,1.853,9.78A1.741,1.741,0,0,1,.118,9.753,1.339,1.339,0,0,1,0,9.671L10.044,0Z"
                    transform="translate(1.464 10.002)"
                    fill="#f15a2b"
                  />
                </g>
              </svg>
              <div className="flex flex-col ml-2">
                <p className="text-[10px] text-white">Available on the</p>
                <p className="text-xs text-white">Google Play</p>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center justify-center p-2 pl-4 pr-5 ml-2 bg-black rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="22"
                viewBox="0 0 13.124 16"
              >
                <g
                  id="apple_2_1"
                  data-name="apple (2) 1"
                  transform="translate(-1163.438 -4561)"
                >
                  <g id="Group">
                    <path
                      id="Vector"
                      d="M4.351,12.314C1.97,12.3,0,7.439,0,4.964,0,.92,3.034.034,4.2.034a4.836,4.836,0,0,1,1.586.39,3.545,3.545,0,0,0,.905.26,2.818,2.818,0,0,0,.65-.211A5.206,5.206,0,0,1,9.3,0h0a4.013,4.013,0,0,1,3.358,1.7l.245.368-.352.266a2.966,2.966,0,0,0-1.422,2.446,2.761,2.761,0,0,0,1.54,2.552c.221.133.449.27.449.569,0,.2-1.56,4.393-3.826,4.393a3.077,3.077,0,0,1-1.292-.314,2.62,2.62,0,0,0-1.15-.277,2.958,2.958,0,0,0-.91.246,4.46,4.46,0,0,1-1.579.368Z"
                      transform="translate(1163.438 4564.686)"
                      fill="#fff"
                    />
                    <path
                      id="Vector-2"
                      data-name="Vector"
                      d="M3.006,0A3.152,3.152,0,0,1,.024,3.511,3.39,3.39,0,0,1,3.006,0Z"
                      transform="translate(1169.974 4561)"
                      fill="#fff"
                    />
                  </g>
                </g>
              </svg>

              <div className="flex flex-col ml-2">
                <p className="text-[10px] text-white">Available on the</p>
                <p className="text-xs text-white">Apple Store</p>
              </div>
            </a>
          </div>
        </div>
        <div className="space-y-4 text-sm">
          <p className="mt-8 text-sm font-poppins">
            All rights reserved@jadoo.co
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
