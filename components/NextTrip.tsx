import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function NextTrip({}: Props) {
  return (
    <section className="w-8/12 pb-10 mx-auto mt-32 mb-16">
      <div className="max-w-lg text-center text-gray-800 md:text-start font-poppins">
        <p className="text-gray-600">Easy and Fast</p>
        <h2 className="my-4 text-4xl font-bold text-gray-800 md:text-5xl font-volkhof">
          Book Your Next Trip In 3 Easy Steps
        </h2>
      </div>

      <div className="relative flex flex-col gap-20 my-20 md:flex-row md:gap-10 md:justify-between">
        <motion.div
          initial={{ x: -100 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-12"
        >
          <div className="flex items-center justify-center max-w-md">
            <div className="grid p-3 rounded-xl w-16 h-[3.2rem] bg-[#F0BB1F] place-items-center">
              <img
                src="./images/selection .png"
                className="w-6 h-6"
                role="presentation"
              />
            </div>
            <div className="flex flex-col mx-4 text-[#5E6282] break-words font-poppins w-max">
              <h3 className="font-bold font-poppins">Choose Destination</h3>
              <p className="mt-1 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center max-w-md">
            <div className="grid p-3 rounded-xl w-16 h-[3.2rem] bg-[#F15A2B] place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 22.054 17.86"
              >
                <g
                  id="water-sport_1"
                  data-name="water-sport 1"
                  transform="translate(-198.973 -2750.069)"
                >
                  <path
                    id="Vector"
                    d="M13.143,1.3A2.205,2.205,0,0,1,11.875.929,1.715,1.715,0,0,0,10,.929,2.359,2.359,0,0,1,8.732,1.3,2.359,2.359,0,0,1,7.465.929a1.714,1.714,0,0,0-1.877,0A2.359,2.359,0,0,1,4.321,1.3,2.359,2.359,0,0,1,3.054.929a1.713,1.713,0,0,0-1.876,0,2.193,2.193,0,0,1-1.156.366L0,.646A1.557,1.557,0,0,0,.85.369a2.358,2.358,0,0,1,2.533,0,1.715,1.715,0,0,0,.938.279A1.715,1.715,0,0,0,5.26.369a2.359,2.359,0,0,1,2.535,0,1.715,1.715,0,0,0,.938.279A1.715,1.715,0,0,0,9.671.369a2.36,2.36,0,0,1,2.534,0,1.719,1.719,0,0,0,.941.28,1.719,1.719,0,0,0,.941-.28A2.207,2.207,0,0,1,15.351,0V.65a1.573,1.573,0,0,0-.939.279,2.211,2.211,0,0,1-1.27.369Z"
                    transform="translate(205.676 2766.63)"
                    fill="#fff"
                  />
                  <path
                    id="Vector-2"
                    data-name="Vector"
                    d="M2.205,1.3A2.2,2.2,0,0,1,.939.929,1.572,1.572,0,0,0,0,.649V0A2.2,2.2,0,0,1,1.267.37a1.57,1.57,0,0,0,.938.28,1.57,1.57,0,0,0,.939-.28A2.2,2.2,0,0,1,4.409,0,2.177,2.177,0,0,1,5.646.353l-.327.56a1.551,1.551,0,0,0-.91-.264,1.565,1.565,0,0,0-.935.279,2.2,2.2,0,0,1-1.269.37Z"
                    transform="translate(198.973 2766.631)"
                    fill="#fff"
                  />
                  <path
                    id="Vector-3"
                    data-name="Vector"
                    d="M19.846,1.3A2.209,2.209,0,0,1,18.578.929a1.717,1.717,0,0,0-1.878,0,2.359,2.359,0,0,1-1.267.369A2.359,2.359,0,0,1,14.166.929a1.714,1.714,0,0,0-1.876,0,2.358,2.358,0,0,1-1.267.369A2.358,2.358,0,0,1,9.757.929a1.714,1.714,0,0,0-1.876,0A2.2,2.2,0,0,1,6.614,1.3,2.2,2.2,0,0,1,5.347.929,1.57,1.57,0,0,0,4.41.649a1.57,1.57,0,0,0-.938.28A2.2,2.2,0,0,1,2.207,1.3,2.2,2.2,0,0,1,.94.929,1.57,1.57,0,0,0,0,.649V0A2.2,2.2,0,0,1,1.267.37a1.572,1.572,0,0,0,.939.28A1.57,1.57,0,0,0,3.143.37,2.2,2.2,0,0,1,4.408,0,2.2,2.2,0,0,1,5.676.37a1.57,1.57,0,0,0,.938.28A1.57,1.57,0,0,0,7.552.37a2.358,2.358,0,0,1,2.534,0,1.714,1.714,0,0,0,.938.28,1.714,1.714,0,0,0,.938-.28A2.358,2.358,0,0,1,14.5.37a1.714,1.714,0,0,0,.938.28,1.714,1.714,0,0,0,.938-.28,2.362,2.362,0,0,1,2.536,0,1.719,1.719,0,0,0,.939.279A1.719,1.719,0,0,0,20.786.37,2.209,2.209,0,0,1,22.054,0V.649a1.573,1.573,0,0,0-.941.28,2.209,2.209,0,0,1-1.267.369Z"
                    transform="translate(198.973 2764.36)"
                    fill="#fff"
                  />
                  <path
                    id="Vector-4"
                    data-name="Vector"
                    d="M3.2,1.3A2.205,2.205,0,0,1,1.935.93,1.572,1.572,0,0,0,1,.65,1.492,1.492,0,0,0,.286.8L0,.219A2.145,2.145,0,0,1,1,0a2.205,2.205,0,0,1,1.268.37A1.719,1.719,0,0,0,3.2.651a1.719,1.719,0,0,0,.941-.28A2.207,2.207,0,0,1,5.41,0V.65a1.573,1.573,0,0,0-.939.279A2.211,2.211,0,0,1,3.2,1.3Z"
                    transform="translate(215.617 2762.089)"
                    fill="#fff"
                  />
                  <path
                    id="Vector-5"
                    data-name="Vector"
                    d="M15.431,1.3A2.2,2.2,0,0,1,14.166.929a1.714,1.714,0,0,0-1.877,0,2.359,2.359,0,0,1-1.267.369A2.359,2.359,0,0,1,9.756.929a1.715,1.715,0,0,0-1.877,0A2.205,2.205,0,0,1,6.613,1.3,2.2,2.2,0,0,1,5.346.929a1.572,1.572,0,0,0-.939-.28,1.565,1.565,0,0,0-.935.279,2.2,2.2,0,0,1-1.267.37A2.2,2.2,0,0,1,.939.929,1.572,1.572,0,0,0,0,.649V0A2.2,2.2,0,0,1,1.267.37a1.57,1.57,0,0,0,.938.28,1.57,1.57,0,0,0,.939-.28A2.2,2.2,0,0,1,4.409,0,2.2,2.2,0,0,1,5.676.37a1.57,1.57,0,0,0,.938.28A1.572,1.572,0,0,0,7.553.37a2.359,2.359,0,0,1,2.534,0,1.715,1.715,0,0,0,.938.279A1.715,1.715,0,0,0,11.963.37,2.359,2.359,0,0,1,14.5.37a1.645,1.645,0,0,0,.969.279.581.581,0,0,0,.075,0l.086.643a1.513,1.513,0,0,1-.2.01Z"
                    transform="translate(198.973 2762.09)"
                    fill="#fff"
                  />
                  <path
                    id="Vector-6"
                    data-name="Vector"
                    d="M19.846,1.3A2.209,2.209,0,0,1,18.578.929a1.717,1.717,0,0,0-1.878,0,2.359,2.359,0,0,1-1.267.369A2.359,2.359,0,0,1,14.166.929a1.714,1.714,0,0,0-1.876,0,2.358,2.358,0,0,1-1.267.369A2.358,2.358,0,0,1,9.757.929a1.714,1.714,0,0,0-1.876,0A2.2,2.2,0,0,1,6.614,1.3,2.2,2.2,0,0,1,5.347.929,1.57,1.57,0,0,0,4.41.649a1.57,1.57,0,0,0-.938.28A2.2,2.2,0,0,1,2.207,1.3,2.2,2.2,0,0,1,.94.929,1.57,1.57,0,0,0,0,.649V0A2.2,2.2,0,0,1,1.267.37a1.572,1.572,0,0,0,.939.28A1.57,1.57,0,0,0,3.143.37,2.2,2.2,0,0,1,4.408,0,2.2,2.2,0,0,1,5.676.37a1.57,1.57,0,0,0,.938.28A1.57,1.57,0,0,0,7.552.37a2.358,2.358,0,0,1,2.534,0,1.714,1.714,0,0,0,.938.28,1.714,1.714,0,0,0,.938-.28A2.358,2.358,0,0,1,14.5.37a1.714,1.714,0,0,0,.938.28,1.714,1.714,0,0,0,.938-.28,2.362,2.362,0,0,1,2.536,0,1.719,1.719,0,0,0,.939.279A1.719,1.719,0,0,0,20.786.37,2.209,2.209,0,0,1,22.054,0V.649a1.573,1.573,0,0,0-.941.28,2.209,2.209,0,0,1-1.267.369Z"
                    transform="translate(198.973 2759.82)"
                    fill="#fff"
                  />
                  <path
                    id="Vector-7"
                    data-name="Vector"
                    d="M5.442,10.773l-.612-.215a3.555,3.555,0,0,0-.19-2.784L2.412,3.413a.324.324,0,0,1,.205-.461l4.44-1.184A.567.567,0,0,0,6.78.668L1.406,1.952a.769.769,0,0,0-.5,1.114L2.5,6.03a.324.324,0,0,1-.13.438L.313,7.6,0,7.035l1.778-.98L.336,3.373a1.418,1.418,0,0,1,.921-2.052L6.628.037a1.216,1.216,0,1,1,.6,2.358L3.172,3.475l2.046,4a4.206,4.206,0,0,1,.224,3.294Z"
                    transform="translate(208.756 2750.069)"
                    fill="#fff"
                  />
                  <path
                    id="Vector-8"
                    data-name="Vector"
                    d="M0,0H4.5V.648H0Z"
                    transform="matrix(0.876, -0.483, 0.483, 0.876, 203.681, 2759.906)"
                    fill="#fff"
                  />
                  <path
                    id="Vector-9"
                    data-name="Vector"
                    d="M2.432,4.865a2.435,2.435,0,1,1,1.719-.713,2.432,2.432,0,0,1-1.719.713Zm0-4.216a1.786,1.786,0,1,0,1.261.523A1.784,1.784,0,0,0,2.432.649Z"
                    transform="translate(214.703 2753.82)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </div>
            <div className="flex flex-col mx-4 text-[#5E6282] break-words font-poppins w-max">
              <h5 className="font-semibold">Make Payment</h5>
              <p className="mt-1 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center max-w-md">
            <div className="grid p-3 rounded-xl w-16 h-[3.2rem] bg-[#006380] place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.5"
                height="18.75"
                viewBox="0 0 22.5 18.75"
              >
                <path
                  id="Vector"
                  d="M22.5,8.625v-.75A1.128,1.128,0,0,0,21.375,6.75H19.89l-.776-2.722L18.881,3.1A1.125,1.125,0,0,0,17.79,2.25H14.625V.75a.752.752,0,0,0-.75-.75H8.625a.752.752,0,0,0-.75.75v1.5H4.71A1.125,1.125,0,0,0,3.619,3.1l-.229.922L2.61,6.75H1.125A1.128,1.128,0,0,0,0,7.875v.75a1.122,1.122,0,0,0,.529.949A1.866,1.866,0,0,0,0,10.875v4.5a1.12,1.12,0,0,0,.375.833v1.417A1.128,1.128,0,0,0,1.5,18.75h3a1.128,1.128,0,0,0,1.125-1.125V16.5h11.25v1.125A1.128,1.128,0,0,0,18,18.75h3a1.128,1.128,0,0,0,1.125-1.125V16.208a1.12,1.12,0,0,0,.375-.833v-4.5a1.866,1.866,0,0,0-.529-1.3,1.122,1.122,0,0,0,.529-.949ZM8.625.75h5.25v1.5H8.625ZM4.346,3.285A.375.375,0,0,1,4.71,3H17.79a.375.375,0,0,1,.364.285l.116.465H4.23ZM4.031,4.5H18.469L19.751,9H8.966A2.247,2.247,0,0,0,4.534,9H2.749ZM8.2,9H5.3A1.494,1.494,0,0,1,8.2,9ZM.75,7.875A.375.375,0,0,1,1.125,7.5H2.4L1.969,9H1.125A.375.375,0,0,1,.75,8.625Zm4.125,9.75A.375.375,0,0,1,4.5,18h-3a.375.375,0,0,1-.375-.375V16.5h3.75Zm16.5,0A.375.375,0,0,1,21,18H18a.375.375,0,0,1-.375-.375V16.5h3.75Zm.375-2.25a.375.375,0,0,1-.375.375H1.125a.375.375,0,0,1-.375-.375V15h21Zm0-1.125H.75V10.875A1.128,1.128,0,0,1,1.875,9.75h18.75a1.128,1.128,0,0,1,1.125,1.125Zm0-5.625A.375.375,0,0,1,21.375,9h-.844L20.1,7.5h1.271a.375.375,0,0,1,.375.375Z"
                  fill="#fff"
                />
              </svg>
            </div>
            <div className="flex flex-col mx-4 text-[#5E6282] break-words font-poppins w-max">
              <h5 className="font-semibold">Make Payment</h5>
              <p className="mt-1 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
        </motion.div>
        <div className="absolute -right-28 bottom-32 md:-top-44 md:-right-32">
          <img
            src="./images/blue-circle.png"
            className="z-0 w-96 h-96"
            role="presentation"
          />
        </div>
        <motion.div
          initial={{ x: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          className="z-20 p-6 mt-6 bg-white shadow-xl md:-mt-16 rounded-2xl"
        >
          <div className="flex flex-col mt-4 font-poppins">
            <img
              src="./images/greece-trip.png"
              className="z-10 object-cover"
              alt="Image of a girl in greece"
            />
            <p className="mt-4 text-lg">Trip to Greece</p>
            <div className="flex text-[#64636e] font-poppins text-base my-2">
              <p className="mx-1">14-29 June</p>
              <p className="mx-2">|</p>
              <p>by Robbin Joseph</p>
            </div>
            <div className="flex gap-4 mt-2 mb-8">
              <div className="grid w-10 h-10 rounded-full place-items-center bg-[#F5F5F5] cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13.952"
                  height="14"
                  viewBox="0 0 13.952 14"
                >
                  <g
                    id="leaf_1"
                    data-name="leaf 1"
                    transform="translate(-0.024 0)"
                  >
                    <g id="Group">
                      <g id="Group-2" data-name="Group">
                        <path
                          id="Vector"
                          d="M13.63.151C13.261.043,4.238-.855,1.07,3.426c-1.4,1.9-1.425,4.5-.07,7.727A16.264,16.264,0,0,0,.11,13.409a.456.456,0,1,0,.871.27C3.4,5.87,11.245,2.093,13.652,1.138,13.886,1.045,14.2.317,13.63.151Z"
                          transform="translate(0.024 0)"
                          fill="#84829a"
                        />
                      </g>
                    </g>
                    <g id="Group-3" data-name="Group">
                      <g id="Group-4" data-name="Group">
                        <path
                          id="Vector-2"
                          data-name="Vector"
                          d="M0,9.833a9.984,9.984,0,0,0,3.827.829,6.455,6.455,0,0,0,2.987-.68,6.133,6.133,0,0,0,3.12-5.068A27.5,27.5,0,0,1,10.857,0C8.262,1.2,2.7,4.3,0,9.833Z"
                          transform="translate(2.472 2.297)"
                          fill="#84829a"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="grid w-10 h-10 rounded-full place-items-center bg-[#F5F5F5] cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                >
                  <g
                    id="map_1"
                    data-name="map 1"
                    transform="translate(-0.001 0)"
                  >
                    <g id="Group">
                      <g id="Group-2" data-name="Group">
                        <path
                          id="Vector"
                          d="M13.5,0a.5.5,0,0,0-.224.053L9.487,1.948,5.2.043,5.18.037A.5.5,0,0,0,5.121.019a.519.519,0,0,0-.06-.013.744.744,0,0,0-.122,0,.519.519,0,0,0-.06.013.5.5,0,0,0-.059.018L4.8.043l-4.5,2A.5.5,0,0,0,0,2.5v11a.5.5,0,0,0,.7.457L5,12.047l4.3,1.91c.007,0,.015,0,.023,0a.441.441,0,0,0,.378-.008c.008,0,.017,0,.025-.006l4-2A.5.5,0,0,0,14,11.5V.5A.5.5,0,0,0,13.5,0Zm-9,11.175L1,12.731V2.825L4.5,1.27ZM9,12.731,5.5,11.175V1.27L9,2.825Zm4-1.539-3,1.5V2.809l3-1.5v9.882Z"
                          transform="translate(0.001 0)"
                          fill="#84829a"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>

              <div className="grid w-10 h-10 rounded-full place-items-center bg-[#F5F5F5] cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11.596"
                  height="11.563"
                  viewBox="0 0 11.596 11.563"
                >
                  <g
                    id="send_2"
                    data-name="send 2"
                    transform="translate(-1.186 -1.219)"
                  >
                    <path
                      id="Vector"
                      d="M11.157.023,4.84,6.364a1.353,1.353,0,0,0-.228-.105L.442,4.848a.583.583,0,0,1,0-1.132L10.79.035A.659.659,0,0,1,11,0a.49.49,0,0,1,.158.023Z"
                      transform="translate(1.186 1.219)"
                      fill="#84829a"
                    />
                    <path
                      id="Vector-2"
                      data-name="Vector"
                      d="M6.341.368,2.66,10.728a.583.583,0,0,1-.583.4.583.583,0,0,1-.583-.408L.105,6.545A1.353,1.353,0,0,0,0,6.318L6.353,0a.583.583,0,0,1-.012.368Z"
                      transform="translate(6.405 1.657)"
                      fill="#84829a"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                >
                  <g id="Group" transform="translate(-840 -2843)">
                    <g id="Group-2" data-name="Group">
                      <g id="Group-3" data-name="Group">
                        <path
                          id="Vector"
                          d="M15.733-15.467h-1.6v8.8a.267.267,0,0,1-.267.267H10.133V-.267A.267.267,0,0,1,9.867,0H2.933a.267.267,0,0,1-.267-.267v-15.2H.267A.267.267,0,0,1,0-15.733.267.267,0,0,1,.267-16H15.733a.267.267,0,0,1,.267.267A.267.267,0,0,1,15.733-15.467Zm-10.133,0H4.533v2.4A.267.267,0,0,0,4.8-12.8h.533a.267.267,0,0,0,.267-.267Zm1.067,8.8v-8.8H6.133v2.4a.8.8,0,0,1-.8.8H4.8a.8.8,0,0,1-.8-.8v-2.4H3.2V-.533H9.6V-6.4H6.933A.267.267,0,0,1,6.667-6.667Zm6.933-8.8H7.2v8.533h6.4Z"
                          transform="translate(856 2843) rotate(180)"
                          fill="#84829a"
                        />
                        <path
                          id="Vector-2"
                          data-name="Vector"
                          d="M1.867,0H.267A.267.267,0,0,1,0-.267v-1.6a.267.267,0,0,1,.267-.267h1.6a.267.267,0,0,1,.267.267v1.6A.267.267,0,0,1,1.867,0ZM1.6-1.6H.533V-.533H1.6Z"
                          transform="translate(849.333 2846.733) rotate(180)"
                          fill="#84829a"
                        />
                        <path
                          id="Vector-3"
                          data-name="Vector"
                          d="M1.867,0H.267A.267.267,0,0,1,0-.267v-1.6a.267.267,0,0,1,.267-.267h1.6a.267.267,0,0,1,.267.267v1.6A.267.267,0,0,1,1.867,0ZM1.6-1.6H.533V-.533H1.6Z"
                          transform="translate(849.333 2844.067) rotate(180)"
                          fill="#84829a"
                        />
                        <path
                          id="Vector-4"
                          data-name="Vector"
                          d="M1.867,0H.267A.267.267,0,0,1,0-.267v-1.6a.267.267,0,0,1,.267-.267h1.6a.267.267,0,0,1,.267.267v1.6A.267.267,0,0,1,1.867,0ZM1.6-1.6H.533V-.533H1.6Z"
                          transform="translate(852 2846.733) rotate(180)"
                          fill="#84829a"
                        />
                        <path
                          id="Vector-5"
                          data-name="Vector"
                          d="M1.867,0H.267A.267.267,0,0,1,0-.267v-1.6a.267.267,0,0,1,.267-.267h1.6a.267.267,0,0,1,.267.267v1.6A.267.267,0,0,1,1.867,0ZM1.6-1.6H.533V-.533H1.6Z"
                          transform="translate(852 2844.067) rotate(180)"
                          fill="#84829a"
                        />
                        <path
                          id="Vector-6"
                          data-name="Vector"
                          d="M1.867,0H.267A.267.267,0,0,1,0-.267v-1.6a.267.267,0,0,1,.267-.267h1.6a.267.267,0,0,1,.267.267v1.6A.267.267,0,0,1,1.867,0ZM1.6-1.6H.533V-.533H1.6Z"
                          transform="translate(852 2849.4) rotate(180)"
                          fill="#84829a"
                        />
                        <path
                          id="Vector-7"
                          data-name="Vector"
                          d="M1.867,0H.267A.267.267,0,0,1,0-.267v-1.6a.267.267,0,0,1,.267-.267h1.6a.267.267,0,0,1,.267.267v1.6A.267.267,0,0,1,1.867,0ZM1.6-1.6H.533V-.533H1.6Z"
                          transform="translate(852 2852.067) rotate(180)"
                          fill="#84829a"
                        />
                        <path
                          id="Vector-8"
                          data-name="Vector"
                          d="M.267-2.133h1.6a.267.267,0,0,1,.267.267v1.6A.267.267,0,0,1,1.867,0H.267A.267.267,0,0,1,0-.267v-1.6A.267.267,0,0,1,.267-2.133Zm.267,1.6H1.6V-1.6H.533Z"
                          transform="translate(845.333 2853.133) rotate(180)"
                          fill="#84829a"
                        />
                        <path
                          id="Vector-9"
                          data-name="Vector"
                          d="M.267-2.133h1.6a.267.267,0,0,1,.267.267v1.6A.267.267,0,0,1,1.867,0H.267A.267.267,0,0,1,0-.267v-1.6A.267.267,0,0,1,.267-2.133Zm.267,1.6H1.6V-1.6H.533Z"
                          transform="translate(845.333 2850.467) rotate(180)"
                          fill="#84829a"
                        />
                        <path
                          id="Vector-10"
                          data-name="Vector"
                          d="M.267-2.133h1.6a.267.267,0,0,1,.267.267v1.6A.267.267,0,0,1,1.867,0H.267A.267.267,0,0,1,0-.267v-1.6A.267.267,0,0,1,.267-2.133Zm.267,1.6H1.6V-1.6H.533Z"
                          transform="translate(845.333 2855.8) rotate(180)"
                          fill="#84829a"
                        />
                        <path
                          id="Vector-11"
                          data-name="Vector"
                          d="M.267-2.133h1.6a.267.267,0,0,1,.267.267v1.6A.267.267,0,0,1,1.867,0H.267A.267.267,0,0,1,0-.267v-1.6A.267.267,0,0,1,.267-2.133Zm.267,1.6H1.6V-1.6H.533Z"
                          transform="translate(848 2853.133) rotate(180)"
                          fill="#84829a"
                        />
                        <path
                          id="Vector-12"
                          data-name="Vector"
                          d="M.267-2.133h1.6a.267.267,0,0,1,.267.267v1.6A.267.267,0,0,1,1.867,0H.267A.267.267,0,0,1,0-.267v-1.6A.267.267,0,0,1,.267-2.133Zm.267,1.6H1.6V-1.6H.533Z"
                          transform="translate(848 2850.467) rotate(180)"
                          fill="#84829a"
                        />
                        <path
                          id="Vector-13"
                          data-name="Vector"
                          d="M.267-2.133h1.6a.267.267,0,0,1,.267.267v1.6A.267.267,0,0,1,1.867,0H.267A.267.267,0,0,1,0-.267v-1.6A.267.267,0,0,1,.267-2.133Zm.267,1.6H1.6V-1.6H.533Z"
                          transform="translate(848 2855.8) rotate(180)"
                          fill="#84829a"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
                <p className="text-[#64636e]">24 people going</p>
              </div>
              <div className="relative group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18.585"
                  viewBox="0 0 20 18.585"
                >
                  <g
                    id="heart_6_1"
                    data-name="heart (6) 1"
                    transform="translate(-1140 -2844.708)"
                  >
                    <g id="Group">
                      <g id="Group-2" data-name="Group">
                        <path
                          id="Vector"
                          d="M18.364,1.747a5.465,5.465,0,0,0-8.01,0L10,2.119l-.353-.373A5.469,5.469,0,0,0,1.92,1.462q-.147.137-.284.284a6.134,6.134,0,0,0,0,8.34l7.847,8.275a.715.715,0,0,0,1.01.027l.027-.027,7.844-8.275A6.133,6.133,0,0,0,18.364,1.747ZM17.33,9.1h0L10,16.831,2.673,9.1a4.687,4.687,0,0,1,0-6.372A4.04,4.04,0,0,1,8.382,2.5q.119.11.23.23l.871.919a.736.736,0,0,0,1.038,0l.871-.919A4.04,4.04,0,0,1,17.1,2.5q.119.11.23.23A4.644,4.644,0,0,1,17.33,9.1Z"
                          transform="translate(1140 2844.708)"
                          fill="#4152ca"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
                <div className="hidden shadow-lg group-hover:block px-6 py-2 absolute bottom-10 -left-40 md:-left-24 bg-white rounded-md w-[263px] h-[129px]">
                  <div className="flex w-full">
                    <img
                      src="./images/minar.png"
                      className="object-cover w-12 h-12 rounded-full"
                      alt="Image of a minar"
                    />
                    <div className="flex flex-col w-full mx-2">
                      <p className="font-poppins text-sm text-[#64636e]">
                        Ongoing
                      </p>
                      <p className="text-lg font-poppins">Trip to Rome</p>
                      <p className="mt-2 mb-2 text-sm font-poppins">
                        <span className="text-[#8A79DF]">40%</span> completed
                      </p>

                      <div className="w-full bg-[#F5F5F5] h-2">
                        <div className="bg-[#8A79DF] h-2 rounded-full w-[45%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
