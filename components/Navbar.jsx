import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7.2xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[17px] font-bold cursor-pointer flex">
           Alifa &nbsp; <span className="sm:block hidden"> | Portfolio</span></p>
        </Link>
        <ul className="list-non hidden sm:flex flex-row gap-10">
          {navLinks.map((Links) =>(
            <li
             key={Links.id}
             className={`#${
              active === Links.title
              ? "text-white"
              : "text-secondary"
             } hover:text-white text-[16px] font-medium cursor-pointer`}
             onClick={() => setActive(Links.title)}
             >
              <a href={`#${Links.id}`}>{Links.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
          src={toggle ? close : menu}
          alt="menu"
          className="w-[20px] h-[20px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden': 'flex'} p-6 black absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-x1`}>
              <ul className="list-non flex justify-end items-start flex-col gap-4">
                {navLinks.map((Links) =>(
                  <li
                  key={Links.id}
                  className={`#${
                    active === Links.title
                    ? "text-white"
                    : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(Links.title);
                  }}
                  >
                    <a href={`#${Links.id}`}>{Links.title}</a>
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
    