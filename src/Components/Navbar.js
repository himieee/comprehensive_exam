import React from "react";
import headerlogo from "../Assets/headerlogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-[#1E3E62] flex justify-between items-center sticky top-0">
      <div className="flex">
        <Link to="/">
          <img src={headerlogo} alt="headerlogo" className="h-12 align" />
        </Link>
      </div>
      <div className="flex w-full justify-end">
        <ul className="flex text-white">
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-8">
            <Link to="/about">About</Link>
          </li>
          <li className="mr-4">
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
