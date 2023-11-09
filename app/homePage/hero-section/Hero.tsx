import "./hero.scss";
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container flex-class">
        <div className="hero-left">
          <div className="flex-class">
            <div className="short-line"></div>
            <span>OVER 1000 USERS</span>
          </div>
          <h1>
            Enjoy Foods All Over The <b>World</b>
          </h1>
          <p>
            EatLy help you set saving goals, earn cash back offers, Go to
            disclaimer for more details and get paychecks up to two days early.
            Get a <b>$20 bonus.</b>
          </p>
          <button>Get Started</button>
        </div>
        <div className="hero-right">
          <img src="./hero.svg" alt="Eror" />
          <div className="img-card flex-class">
            <img src="./hero.svg" alt="Eror" />
            <div className="hero-text">
              <h5>Chicken Hell</h5>
              <h6>On The Way</h6>
            </div>
            <span>3:09 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
