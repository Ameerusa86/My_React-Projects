import React from "react";

const Banner = ({ title, fetchURL }) => {
  return (
    <div className=" mt-6 w-full h-20 bg-slate-400 rounded-full overflow-hidden">
      <h2 className="text-white font-bold p-6 text-2xl shadow-md">{title}</h2>
    </div>
  );
};

export default Banner;
