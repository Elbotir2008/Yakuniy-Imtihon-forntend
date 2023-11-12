"use client";
import { ProductType } from "@/app/types/type";
import "./dish.scss";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "@/app/components/loading/Loading";

const Dish = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedDishes, setSearchedDishes] = useState<ProductType[]>([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [dishesPerPage] = useState(4);
  // const totalPages = Math.ceil(searchedDishes.length / dishesPerPage);
  // const pageNumbers = [];
  // for (let i = 1; i <= totalPages; i++) {
  //   pageNumbers.push(i);
  // }

  const [cart, setCart] = useState<ProductType[]>([]);

  const handleClickImg = (product: ProductType): void => {
    if (!cart.includes(product)) {
      const updatedCart: any = [...cart, { ...product, numOfProducts: 1 }];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    toast.success("Successfully added in Cart");
  };

  const searchDishes = async () => {
    try {
      let res = await axios.get(
        `https://654ea70d358230d8f0ccbf59.mockapi.io/api/v1/Dishes?search=${searchQuery}&page=1&limit=8`
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
            searchedDishes.map((dsh, index) => (
              <div className="card" key={index}>
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
            <Spinner />
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
