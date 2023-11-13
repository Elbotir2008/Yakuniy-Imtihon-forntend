"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./cart.scss";
import Spinner from "../components/loading/Loading";

const Cart = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [cardPrice, setCardPrice] = useState<any>();
  const [count, setCount] = useState<any>(1);

  useEffect(() => {
    let prods: any = JSON.parse(localStorage.getItem("cart")!) || [];
    setCardPrice(prods[0]?.price);
    setCart(prods);
  }, []);

  const increment = () => {
    setCount(count + 1);
    setCardPrice(cardPrice * count);
    // cart.numOfProducts + 1;
  };
  const decrement = () => {
    if (count == 0) {
      setCardPrice(cardPrice);
      setCount(0);
    } else if (count == 1) {
      confirm("Do dou want to delete this cart")
        ? localStorage.removeItem("cart")
        : null;
      window.location.reload();
    } else {
      setCardPrice(cardPrice / count);
      setCount(count - 1);
      // cart.numOfProducts - 1;
    }
  };

  return (
    <div>
      <Header />
      <div className="container cart-container">
        <div className="cart-cards">
          {cart ? (
            cart.map((pr, index) => (
              <div className="cart-card flex-class" key={index}>
                <div className="cart-left flex-class">
                  <img src={pr.imgUrl} alt="Error" />
                  <div className="cart-texts">
                    <h3>{pr.name}</h3>
                    <span>{pr.price}</span>
                  </div>
                </div>
                <div className="cart-right">
                  <div className="btns flex-class">
                    <button className="btn-cart1" onClick={decrement}>
                      <p>-</p>
                    </button>
                    <p>{count}</p>
                    <button className="btn-cart2" onClick={increment}>
                      <p>+</p>
                    </button>
                  </div>
                  <h4>{cardPrice}</h4>
                </div>
              </div>
            ))
          ) : (
            <Spinner />
          )}
        </div>
        <div className="big">
          <div className="liner">
            <div className="par">
              <p>Subtotal</p>
              <p>$58.96</p>
            </div>
            <div className="line"></div>
          </div>
          <div className="liner">
            <div className="par">
              <p>Subtotal</p>
              <p>$58.96</p>
            </div>
            <div className="line"></div>
          </div>
          <div className="bottom">
            <h2>Total</h2>
            <h2>$62.55</h2>
          </div>
          <button>Review Payment</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
