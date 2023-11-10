"use client";
import { useState } from "react";
import Link from "next/link";
import "./header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="container">
        <nav className={`flex-class ${menuOpen ? "open" : ""}`}>
          <div className="nav-left flex-class">
            <img src="./Logo.svg" alt="Eror" />
            <h1>eatly</h1>
            <ul className={`flex-class ${menuOpen ? "open" : ""}`}>
              <Link href="/homePage">
                <li className="selected">Home</li>
              </Link>
              <Link href="/dishes">
                <li>Dishes</li>
              </Link>
            </ul>
          </div>
          <div className="nav-right flex-class">
            <Link href="/cart">
              <img
                src="./ant-design_shopping-cart-outlined.svg"
                className="cart"
                alt="Eror"
              />
            </Link>
            <Link href="/login">
              <button className="login">Login</button>
            </Link>
            <Link href="/">
              <button className="register">Sign Up</button>
            </Link>
          </div>
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          </div>
        </nav>
      </div>
      <hr />
    </header>
  );
};

export default Header;
