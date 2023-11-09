import "./footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-1 flex-class">
          <div className="footer-input2">
            <h1>GET 50%</h1>
            <div className="flex-class">
              <input type="text" placeholder=" Enter Your Email Address" />
              <button>subscribe</button>
            </div>
          </div>
          <img src="./Food Image.svg" alt="Eror" />
        </div>
        <div className="footer-2">
          <div className="flex-class flex-class1">
            <img src="./Logo.svg" alt="Eror" />
            <h1>eatly</h1>
          </div>
          <div className="line"></div>
          <div className="flex-class flex-class2">
            <p>© 2023 EATLY All Rights Reserved.</p>
            <img src="./Socials (1).svg" alt="Eror" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
