"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./cart.scss";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartProducts");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  console.log(getCarts);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="cart-cards">
          {getCarts ? (
            <div className="cart-card flex-class">
              <div className="cart-left flex-class">
                <img src={getCarts[0].imgUrl} alt="Error" />
                <div className="cart-texts">
                  <h3>{getCarts[0].name}</h3>
                  <span>{getCarts[0].price}</span>
                </div>
              </div>
              <div className="cart-right">
                <div className="btns flex-class">
                  <button>-</button>
                  <p></p>
                  <button>+</button>
                </div>
                <h4> </h4>
              </div>
            </div>
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
