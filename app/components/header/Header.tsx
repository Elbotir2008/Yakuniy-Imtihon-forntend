"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import "./header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shrinkNavbar, setShrinkNavbar] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShrinkNavbar(true);
    } else {
      setShrinkNavbar(false);
    }
  };

  // Add event listener to handle scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={shrinkNavbar ? "shrink" : ""}>
      <div className="container">
        <nav className={`flex-class ${menuOpen ? "open" : ""}`}>
          <div className="nav-left flex-class">
            <img src="../Logo.svg" alt="Eror" />
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
                src="../ant-design_shopping-cart-outlined.svg"
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
