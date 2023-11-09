import "./customer.scss";
const Customer = () => {
  return (
    <section className="customer-section">
      <div className="container">
        <div className="customer-title">
          <h1>
            <b>Customer</b> Say
          </h1>
        </div>
        <div className="customer-body flex-class">
          <div className="customer-card1 customer-card">
            <div className="flex-class">
              <div className="customer-img flex-class">
                <img src="./134 (image).png" className="person1" alt="Eror" />
                <div className="customer-img-text">
                  <h5>Alexander R.</h5>
                  <h6>01 Year With Us </h6>
                </div>
              </div>
              <img src="./Path 173.svg" className="quota" alt="Eror" />
            </div>
            <p>
              “ Online invoice payment helps companies save time, are faster and
              save maximum effort for the clients and save maximum effort.
              Online invoice payment helps companies save time ”
            </p>
            <img src="./Stars.svg" alt="Eror" />
          </div>
          <div className="customer-card2 customer-card">
            <div className="card">
              <p>
                “ Online invoice payment helps companies save time, are faster
                and save maximum effort for the clients and save maximum effort.
                Online invoice payment helps companies save time ”
              </p>
              <img src="./Stars.svg" alt="Eror" />
            </div>
            <div className="rectangles">
              <img src="./Rectangle 13 (2).svg" alt="Eror" />
              <img src="./Rectangle 14 (1).svg" alt="Eror" />
            </div>
          </div>
          {/* <div className="card2 customer-card">
            <p>
              “ Online invoice payment helps companies save time, are faster and
              save maximum effort for the clients and save maximum effort.
              Online invoice payment helps companies save time ”
            </p>
            <img src="./Stars.svg" alt="Eror" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Customer;
