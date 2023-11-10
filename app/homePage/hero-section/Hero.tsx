"use client";
import { useEffect, useState } from "react";
import "./hero.scss";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 480);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={`hero-section ${isMobile ? "mobile" : ""}`}>
      <div className="container">
        <div className="hero-container flex-class">
          <div className="hero-left">
            <div className="flex-class">
              <div className="short-line"></div>
              <span>OVER 1000 USERS</span>
            </div>
            <h1>
              Enjoy Foods All Over The <b>World</b>
            </h1>
            <p>
              EatLy helps you set saving goals, earn cash back offers. Go to the
              disclaimer for more details and get paychecks up to two days
              early. Get a <b>$20 bonus.</b>
            </p>
            <button>Get Started</button>
          </div>
          <div className="hero-right">
            <img src="./hero.svg" className="heroimg" alt="Error" />
            {!isMobile && (
              <div className="img-card flex-class">
                <img src="./hero.svg" alt="Error" />
                <div className="hero-text">
                  <h5>Chicken Hell</h5>
                  <h6>On The Way</h6>
                </div>
                <span>3:09 PM</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
