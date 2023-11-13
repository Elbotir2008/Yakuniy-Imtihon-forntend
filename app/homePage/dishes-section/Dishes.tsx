"use client";
import axios from "axios";
import "./dishes.scss";
import { useState, useEffect } from "react";
import { ProductType } from "@/app/types/type";
import { toast } from "react-toastify";
import Spinner from "@/app/components/loading/Loading";

const Dishes = () => {
  const [dish, setDish] = useState<ProductType[]>([]);
  const [cart, setCart] = useState<ProductType[]>([]);

  const fetchDishes = async () => {
    try {
      let res = await axios.get(
        "https://654ea70d358230d8f0ccbf59.mockapi.io/api/v1/Dishes?page=1&limit=4"
      );
      let data = res.data;
      setDish(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  const handleClickImg = (product: ProductType): void => {
    if (!cart.includes(product)) {
      const updatedCart: any = [...cart, { ...product, numOfProducts: 1 }];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    toast.success("Successfully added in Cart");
  };

  return (
    <section className="dishes-section">
      <div className="container">
        <div className="dishes-title">
          <h1>
            Our Top <b>Dishes</b>
          </h1>
        </div>
        <div className="dishes-cards grid-class">
          {dish.length > 0 ? (
            dish.map((dsh, index) => (
              <div className="card" key={index}>
                <img src={dsh.imgUrl} alt="Eror" />
                <h4>{dsh.category}</h4>
                <h2>{dsh.name}</h2>
                <div className="flex-class">
                  <span>24 min •</span>
                  <img src="./Star.svg" alt="Eror" />
                  <span>{dsh.stars}</span>
                </div>
                <div className="flex-class">
                  <p>{dsh.price}</p>
                  <img
                    src="./Add.svg"
                    onClick={() => handleClickImg(dsh)}
                    className="add"
                    alt="Eror"
                  />
                </div>
              </div>
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </section>
  );
};

export default Dishes;
