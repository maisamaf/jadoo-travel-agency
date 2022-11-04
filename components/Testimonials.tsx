import React from 'react'

type Props = {}

export default function Testimonials({}: Props) {
  return (
    <section className="w-8/12 pb-10 mx-auto mb-20">
    <div className="relative flex flex-col gap-10 md:gap-20 md:flex-row">
      <div className="flex flex-col justify-between flex-1">
        <div className="max-w-lg text-center text-gray-800 md:text-start font-poppins">
          <p className="text-gray-600">Testimonials</p>
          <h2 className="my-4 text-4xl font-bold text-gray-800 md:text-5xl font-volkhof">
            What People Say
          </h2>
        </div>
        <div className="items-start justify-start hidden gap-4 md:flex">
          <button className="w-4 h-4 bg-black rounded-full" aria-label="slider button 1"></button>
          <button className="rounded-full h-4 w-4 bg-[#f5f5f5]" aria-label="slider button 2"></button>
          <button className="rounded-full h-4 w-4 bg-[#f5f5f5]" aria-label="slider button 3"></button>
        </div>
      </div>
      <div className="flex flex-col flex-1 mt-14 md:mt-0">
        <div className="relative flex flex-col">
          <div
            className="absolute w-full h-52 -right-8 md:-right-12 px-10 pt-16 border-2 border-gray-100 rounded-lg -bottom-20 text-[#5E6282]">
            <div className="mt-[4.3rem] font-poppins">
              <p>Chris Thomas</p>
              <p className="mt-2 text-sm">CEO of Red Button</p>
            </div>
          </div>
          <div className="relative flex flex-col py-6 px-8 font-poppins bg-white rounded-lg shadow-lg text-[#5E6282]">
            <img src="./images/mike.png" alt="Profile image of a man"
              className="absolute rounded-full w-14 h-14 -left-6 -top-6" />
            <p className="">
              "On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or
              diverted no."
            </p>
            <p className="mt-6">Mike taylor</p>
            <p className="mt-2 text-sm">US, CA</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-20 mt-16 md:justify-end md:flex-col">
        <a className="cursor-pointer prev">
          <svg xmlns="http://www.w3.org/2000/svg" width="16.828" height="9.829" viewBox="0 0 16.828 9.829">
            <path id="Vector_2" data-name="Vector 2" d="M0,7,7,0l7,7" transform="translate(1.414 1.414)" fill="none"
              stroke="#bcb7c2" stroke-linecap="round" stroke-width="2" />
          </svg>
        </a>
        <a className="cursor-pointer next">
          <svg xmlns="http://www.w3.org/2000/svg" width="16.828" height="9.829" viewBox="0 0 16.828 9.829">
            <path id="Vector_3" data-name="Vector 3" d="M0-7,7,0l7-7" transform="translate(1.414 8.414)" fill="none"
              stroke="#3e2e4d" stroke-linecap="round" stroke-width="2" />
          </svg></a>
      </div>
    </div>
  </section>
  )
}