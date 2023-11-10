import Link from "next/link";
import "./register.scss";
const Register = () => {
  return (
    <div className="container register-con">
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
          <button>Sign Up</button>
          <p>
            Already Have An Account?
            <Link href="/login">
              <b>Log In</b>
            </Link>
          </p>
        </form>
        <div className="register-right"></div>
      </div>
      <div className="register-bottom flex-class">
        <h5>Privacy Policy</h5>
        <h5>Copyright 2022</h5>
      </div>
    </div>
  );
};

export default Register;
