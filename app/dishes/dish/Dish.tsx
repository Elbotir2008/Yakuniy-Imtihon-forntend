"use client";
import "./dish.scss";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

const Dish = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedDishes, setSearchedDishes] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [dishesPerPage] = useState(4);
  // const totalPages = Math.ceil(searchedDishes.length / dishesPerPage);
  // const pageNumbers = [];
  // for (let i = 1; i <= totalPages; i++) {
  //   pageNumbers.push(i);
  // }

  const [cart, setCart] = useState([]);

  const handleClickImg = (dsh) => {
    const updatedCart = [...cart, dsh];
    setCart(updatedCart);
    localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
  };

  const searchDishes = async () => {
    try {
      let res = await axios.get(
        `https://654ea70d358230d8f0ccbf59.mockapi.io/api/v1/Dishes?search=${searchQuery}&page=2&limit=8`
      );
      setSearchedDishes(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    searchDishes();
  }, [searchQuery]);

  return (
    <section className="dishesPage-section">
      <div className="container">
        <input
          type="text"
          placeholder="Search dishes..."
          className="searchBox"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="dishesPage-cards grid-class">
          {searchedDishes.length > 0 ? (
            searchedDishes.map((dsh) => (
              <div className="card" key={dsh.id}>
                <Link href={`/dishes/${dsh.id}`}>
                  <img src={dsh.imgUrl} alt="Error" />
                </Link>
                <h4>{dsh.category}</h4>
                <h2>{dsh.name}</h2>
                <div className="flex-class">
                  <span>24 min •</span>
                  <img src="./Star.svg" alt="Error" />
                  <span>{dsh.stars}</span>
                </div>
                <div className="flex-class">
                  <p>{dsh.price}</p>

                  <img
                    src="./Add.svg"
                    onClick={() => handleClickImg(dsh)}
                    className="add"
                    alt="Error"
                  />
                </div>
              </div>
            ))
          ) : (
            <p>No dishes found.</p>
          )}
        </div>
        {/* <div className="pagination">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={currentPage === number ? "active" : ""}
            >
              {number}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Dish;
