import "./purchases.scss";
const Purchases = () => {
  return (
    <section className="purchases-section">
      <div className="container flex-class">
        <div className="purchases-left">
          <h1>
            Control <b>Purchases</b> Via Dashboard
          </h1>
          <div className="purchases-card">
            <div className=" flex-class">
              <img src="./hero2.svg" alt="Eror" />
              <div className="purchases-text">
                <h6>Chicken Hell</h6>
                <h5>On The Way</h5>
              </div>
              <span>3:09 PM</span>
            </div>
          </div>
          <div className="purchases-card">
            <div className="flex-class">
              <img src="./Food Image (1).svg" alt="Eror" />
              <div className="purchases-text">
                <h6>Swe Dish</h6>
                <h5>Delivered</h5>
              </div>
              <span>Yesterday</span>
            </div>
          </div>
          <div className="purchases-card">
            <div className="flex-class">
              <img src="./Food Image (2).svg" alt="Eror" />
              <div className="purchases-text">
                <h6>Fish Hell Veg</h6>
                <h5>Cancelled</h5>
              </div>
              <span>Cancelled</span>
            </div>
          </div>
        </div>
        <div className="purchases-right">
          <div className="right-title flex-class">
            <h2>Purchases</h2>
            <div className="flex-class">
              <h4>This month</h4>
              <img src="./chevron-down.svg" alt="Eror" />
            </div>
          </div>

          <div className="right-body">
            <div className="body-card">
              <div className="flex-class">
                <img src="./icon.svg" alt="Eror" />
                <div className="right-texts">
                  <h6>Expense</h6>
                  <h5>Increased By 10%</h5>
                </div>
                <h3>$409.00</h3>
              </div>
              <div className="resctangles">
                <img src="./Rectangle 13 (2).svg" alt="Eror" />
                <img src="./Rectangle 14 (1).svg" alt="Eror" />
              </div>
            </div>

            <div className="body-card">
              <div className="flex-class">
                <img src="./icon (1).svg" alt="Eror" />
                <div className="right-texts">
                  <h6>Expense</h6>
                  <h5>Increased By 10%</h5>
                </div>
                <h3>$409.00</h3>
              </div>
              <div className="resctangles">
                <img src="./Rectangle 13 (3).svg" alt="Eror" />
                <img src="./Rectangle 14.svg" alt="Eror" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchases;
