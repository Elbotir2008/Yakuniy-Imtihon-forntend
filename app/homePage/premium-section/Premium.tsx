import "./premium.scss";
const Premium = () => {
  return (
    <section className="premium-section">
      <div className="container">
        <div className="premium-1 grid-class">
          <div className="grids grid-1">
            <h3>10K+</h3>
            <p>Satisfied Costumers All Great Over The World </p>
          </div>
          <div className="grids grid-2">
            <h3>4M</h3>
            <p>Healthy Dishes Sold Including Milk Shakes Smooth</p>
          </div>
          <div className="grids grid-3">
            <h3>99.99%</h3>
            <p>Reliable Customer Support We Provide Great Experiences</p>
          </div>
        </div>
        <div className="premium-2 flex-class">
          <img src="./Mobile Screen.svg" className="premium-img1" alt="Eror" />
          <div className="premium2-texts">
            <h1>
              Premium <b>Quality</b> For Your Health
            </h1>
            <ul>
              <li>
                <p>
                  Premium quality food is made with ingredients that are packed
                  with essential vitamins, minerals.
                </p>
              </li>
              <li>
                <p>
                  These foods promote overall wellness by support healthy
                  digestion and boosting immunity
                </p>
              </li>
            </ul>
            <button>
              Download
              <img src="./arrow-right.svg" className="arrow-right" alt="Eror" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Premium;
