import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { MdOutlineMovieFilter } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-700">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-50 uppercase">
          Cinema World
        </h1>
        <div className="flex space-x-10">
          <div className="flex items-center space-x-2">
            <Link to="/home" span>
              <AiOutlineHome className="text-3xl text-white" />
            </Link>
            <Link to="/home" span className="text-gray-50">
              HOME
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <Link to="/movies" span>
              <BiMoviePlay className="text-3xl text-white" />
            </Link>
            <Link to="/movies" span className="text-gray-50">
              MOVIES
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <Link to="/tvshows" span>
              <MdOutlineMovieFilter className="text-3xl text-white" />
            </Link>
            <Link to="/tvshows" span className="text-gray-50">
              TV SERIES
            </Link>
          </div>
        </div>
        <div className="lg:flex hidden items-center space-x-2 bg-white py-1 px-2 rounded-full">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input className="outline-none" type="text" placeholder="Search" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
