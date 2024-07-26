import React from "react";
import { GiAtomicSlashes } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import {Link} from "react-router-dom"
import Hero from "../Hero/Hero";
import About from "../About/About";
import Contact from "../Contact";

const MenuLinks = [
  {
    name: "Episodes",
    link: "https://www.youtube.com/playlist?list=PLHU04UXimSc157y5Su_l1VJSqhSPGN5Hb",
  },
  {
    name: "Store",
    link: "https://www.ubuy.co.in/brand/doraemon",
  },
  {
    name: "Toys",
    link: "https://www.flipkart.com/toys/doraemon~brand/pr?sid=tng",
  },
  {
    name: "Movies",
    link: "https://www.youtube.com/watch?v=ttlUFQ4bq5c",
  },
];
const Navbar = () => {
  return (
    <nav>
    <div data-aos="fade-down" className="container py-4">
        <div className="flex items-center justify-between">
          {/* logo section */}
        <div className="flex items-center gap-4">
            <GiAtomicSlashes className="text-6xl text-primary" />
            <div className="flex flex-col text-2xl font-bold text-gray-600 leading-5" href={Hero}>
              <span >Dora</span>
              <span>emon</span>
            </div>
          </div> 
          {/* links section */}
          <div className="hidden md:block">
          
           <ul className="flex justify-center items-center">
           <ul className="flex justify-center items-center">
              {MenuLinks.map((data, index) => {
                return (
                  <li key={index}>
                    <a className="text-xl inline-block px-6 py-2 font-semibold text-gray-500" href={data.link}>
                      {" "}
                      {data.name}
                    </a>
                  </li>
                );
              })}</ul>
          
              <li className="text-xl inline-block px-6 py-2 font-semibold text-gray-500">
                <Link to={<About/>}>About</Link>
                </li>
                <li className="text-xl inline-block px-6 py-2 font-semibold text-gray-500">
                <Link to="/service">Service</Link>
                </li>
                <li className="text-xl inline-block px-6 py-2 font-semibold text-gray-500">
                  <Link to={<Contact/>}>Contact</Link>
              </li>
            </ul>
            {/* <ul className="flex justify-center items-center">
              {MenuLinks.map((data, index) => {
                return (
                  <li key={index}>
                    <a className="text-xl inline-block px-6 py-2 font-semibold text-gray-500" href={data.link}>
                      {" "}
                      {data.name}
                    </a>
                  </li>
                );
              })}</ul> */}
          </div>

          {/* Search section */}
         <div className="flex items-center gap-6">
            <input
              type="text"
              placeholder="Search"
              className="hidden sm:block py-2 px-3 rounded-full bg-slate-200"
            />
            <div className="bg-primary hover:bg-primary-80 p-3 rounded-full cursor-pointer">
              <FaSearch className="text-white text-sm" />
            </div>
            <div className="center navlink cursor-pointer">
              Eng
              <span>
                <MdArrowDropDown className="text-xl text-primary" />
              </span>
            </div>
           
           
          </div>
        </div>
      </div> 
    </nav>
  );
};

export default Navbar;