"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./cart.scss";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const storedCart = localStorage.getItem("cartProducts");
  console.log(setCart);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="cart-cards">
          {storedCart ? (
            <div className="cart-card flex-class">
              <div className="cart-left flex-class">
                <img src={storedCart.imgUrl} alt="Error" />
                <div className="cart-texts">
                  <h3>{storedCart.name}</h3>
                  <span>{storedCart.price}</span>
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
