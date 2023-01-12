import React from "react";
import API_URL from "../api/api";
import Movies from "../pages/Movies";

const Card = ({ title, img, release_date, overview, rating, name }) => {
  return (
    <section className="bg-gray-900 h-90 flex justify-center items-center gap-x-16 text-white rounded-lg">
      <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective rounded-lg">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 rounded-lg">
          <div className="absolute backface-hidden border-2 w-full h-full rounded-lg overflow-hidden">
            <img src={img} alt={title} className="w-full h-full" />
          </div>
          <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden rounded-lg">
            <div className="m-4 my-20 text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
              <h1 className="text-2xl font-bold">
                {title}
                {name}
              </h1>

              <p className="text-xs">{overview}</p>
              <div className="m-10">
                <p className="text-black text-xs w-full 2xl:text-[0.75rem] xl:text-[0.5rem] lg:text-[0.25rem] md:text-[0.1rem]">
                  {release_date}
                </p>
                <button className="text-white font-semibold text-sm p-4 mt-6 rounded-full bg-orange-600">
                  {rating}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
