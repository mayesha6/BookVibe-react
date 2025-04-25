import React from "react";
import { NavLink } from "react-router";
import BannerImage from '../../assets/banner.png'

const Banner = () => {
  return (
    <section className="">
      <div className="hero bg-[#F3F3F3] md:py-20 md:px-28 p-10">
        <div className="w-full flex flex-col lg:flex-row-reverse justify-between items-center gap-5">
          <img
            src={BannerImage} className="max-w-[318px]"
          />
          <div className="text-center lg:text-start">
            <h1 className="playfair-display text-4xl lg:text-6xl lg:leading-20 text-[#131313] font-bold mb-10">Books to freshen up your bookshelf</h1>

            <NavLink className="btn capitalize work-sans font-semibold text-lg px-7 py-3.5 rounded text-white duration-300 bg-[#23BE0A] hover:bg-[#59C6D2]">
              view the list
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
