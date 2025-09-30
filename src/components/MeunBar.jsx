import React from "react";
import { Link } from "react-router-dom";

const MenuBar = ({ hc, ac, pc, cc }) => {
  return (
    <div className="flex justify-around items-center bg-black text-white py-5">
      <h1 className="text-3xl font-bold">NiniN SAU</h1>
      <Link style={hc} to="/">Home</Link>
      <Link style={ac} to="/about">About</Link>
      <Link style={pc} to="/portfolio">Portfolio</Link>
      <Link
        style={cc}
        to="/contact"
        className="border-2 border-white px-4 py-2 rounded-3xl"
      >
        Let's Talk
      </Link>
    </div>
  );
};

export default MenuBar;
