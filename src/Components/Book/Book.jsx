import React from "react";
import { NavLink } from "react-router";
import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {
  const { image, bookName, author, category, rating } = book;
  return (
    <li className="p-6 rounded-2xl border-[1px] border-[#F3F3F3] flex flex-col justify-between">
      <div className="bg-[#F3F3F3] rounded-2xl py-14">
        <img src={image} alt="book's image" className="max-h-[166px] mx-auto" />
      </div>
      <div className="mt-6">
        <NavLink
          to="/"
          className="capitalize work-sans font-medium text-[#23BE0A] px-4 py-2 rounded-[50px] bg-[rgba(35,190,10,0.05)] me-4"
        >
          young adult
        </NavLink>
        <NavLink
          to="/"
          className="capitalize work-sans font-medium text-[#23BE0A] px-4 py-2 rounded-[50px] bg-[rgba(35,190,10,0.05)]"
        >
          Identity
        </NavLink>

        <h3 className="playfair-display text-2xl font-bold pt-5 pb-3 text-[#131313]">
          {bookName}
        </h3>
        <p className="work-sans font-medium text-[rgba(19, 19, 19, 0.8)] capitalize pb-4">
          by: {author}
        </p>

        <div className="flex justify-between items-center border-t-[1px] border-dashed border-[rgba(19, 19, 19, 0.15)] pt-3">
          <p className="work-sans font-medium text-[rgba(19, 19, 19, 0.8)] capitalize">
            {category}
          </p>
          <div className="flex justify-between items-center">
            <p className="work-sans font-medium text-[rgba(19, 19, 19, 0.8)] capitalize pe-2">
              {rating}
            </p>
            <FaRegStar className="text-[#424242] w-6" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Book;
