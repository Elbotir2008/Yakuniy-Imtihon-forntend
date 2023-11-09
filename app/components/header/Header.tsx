import Link from "next/link";
import "./header.scss";
const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="flex-class">
          <div className="nav-left flex-class">
            <img src="./Logo.svg" alt="Eror" />
            <h1>eatly</h1>
            <ul className="flex-class">
              <Link href="/">
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
            <Link href="/register">
              <button>Sign Up</button>
            </Link>
          </div>
        </nav>
      </div>
      <hr />
    </header>
  );
};

export default Header;
