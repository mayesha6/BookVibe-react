import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("data/booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <section className="py-20">
      <h2 className="playfair-display text-[40px] text-center font-bold mb-16 text-[#131313] capitalize">
        books
      </h2>
      <nav>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {books.map((book) => {
            return <Book book={book} key={book.bookId} />;
          })}
        </ul>
      </nav>
    </section>
  );
};

export default Books;
