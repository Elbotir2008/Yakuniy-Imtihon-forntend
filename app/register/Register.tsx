import Link from "next/link";
import "./register.scss";
const Register = () => {
  return (
    <div className="register-con">
      <img src="./Logo.svg" className="register-logo" alt="Eror" />
      <div className="register-flex flex-class">
        <form>
          <h1>Sign Up To eatly</h1>
          <div className="input">
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="input">
            <input type="text" placeholder="Email" />
          </div>
          <div className="input">
            <input type="text" placeholder="Password" />
          </div>
          <Link href="/login">
            <button>Sign Up</button>
          </Link>
          <p>
            Already Have An Account?
            <Link href="/login">
              <b>Log In</b>
            </Link>
          </p>
        </form>
        <div className="register-right">
          <img src="./1st.svg" className="st" alt="Eror" />
          <img src="./hero.svg" className="register-hero" alt="Eror" />
          <img src="./Group 34385.svg" className="trading" alt="Eror" />
          <div className="register-texts">
            <h1>Find Foods With Love </h1>
            <p>
              Eatly Is The Food Delivery Dashboard And Having More Than 2K+
              Dishes Including Asian, Chinese, Italians And Many More. Our
              Dashboard Helps You To Manage Orders And Money.
            </p>
          </div>
        </div>
      </div>
      <div className="register-bottom flex-class">
        <h5>Privacy Policy</h5>
        <h5>Copyright 2022</h5>
      </div>
    </div>
  );
};

export default Register;
