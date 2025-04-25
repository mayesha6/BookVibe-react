import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={
            "work-sans font-semibold text-lg px-5 py-2 rounded border-[1px] border-transparent text-[#131313] duration-300 hover:bg-transparent hover:border-[#23BE0A] hover:text-[#23BE0A]"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/listedbook"
          className={
            "work-sans font-semibold text-lg px-5 py-2 rounded border-[1px] border-transparent text-[#131313] duration-300 hover:bg-transparent hover:border-[#23BE0A] hover:text-[#23BE0A]"
          }
        >
          Listed book
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pagestoread"
          className={
            "work-sans font-semibold text-lg px-5 py-2 rounded border-[1px] border-transparent text-[#131313] duration-300 hover:bg-transparent hover:border-[#23BE0A] hover:text-[#23BE0A]"
          }
        >
          Pages to read
        </NavLink>
      </li>
    </>
  );
  return (
    <header>
      <div className="navbar px-0 py-5">
        <div className="navbar-start w-full lg:w-[50%]">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex flex-col gap-3"
            >
              {links}
              <NavLink className="btn capitalize work-sans font-semibold text-lg px-7 py-2.5 rounded text-white duration-300 bg-[#23BE0A] hover:bg-[#59C6D2]">
                sign in
              </NavLink>
              <NavLink className="btn capitalize work-sans font-semibold text-lg px-7 py-2.5 rounded text-white duration-300 bg-[#23BE0A] hover:bg-[#59C6D2]">
                sign up
              </NavLink>
            </ul>
          </div>
          <NavLink
            to="/"
            className="text-[38px] font-bold capitalize text-[#131313] work-sans"
          >
            book vibe
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2 hidden lg:flex">
          <NavLink className="btn capitalize work-sans font-semibold text-lg px-7 py-2.5 rounded text-white duration-300 bg-[#23BE0A] hover:bg-[#59C6D2]">
            sign in
          </NavLink>
          <NavLink className="btn capitalize work-sans font-semibold text-lg px-7 py-2.5 rounded text-white duration-300 bg-[#23BE0A] hover:bg-[#59C6D2]">
            sign up
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
