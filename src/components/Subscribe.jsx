import React from "react";
import kid_img from "../assets/kid.jpg";

const Subscribe = () => {
  return (
   <div
  className="flex mt-10 flex-col w-full max-w-[70rem]  min-h-[300px] mx-auto justify-center items-center rounded-2xl bg-center bg-cover mb-10 "
  style={{
    backgroundImage: `linear-gradient(to left, rgba(7,2,255,0.6), rgba(84,255,108,0.6)), url(${kid_img})`,
  }}
>

      <div className="flex flex-col justify-center items-center gap-30">
        <h1 className="text-[#343434] text-4xl text-center font-bold">
          Subscribe To Our Newsletter
        </h1>
        <div className="flex gap-5">
          <input
            type="text"
            className="h-13 w-100 text-[#00000080] border border-[#484848] outline-none rounded-3xl px-4 text-2xl"
            placeholder="Your Email Address"
          />
          <button
            
            className="rounded-3xl bg-[#54FF6C] text-xl font-bold  text-[#343434] h-13 px-11 cursor-pointer hover:bg-green-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
