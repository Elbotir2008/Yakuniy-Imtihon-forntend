import "./quetions.scss";

const Questions = () => {
  return (
    <section className="section-question">
      <div className="container">
        <div className="question-title">
          <h1>
            Frequently Asked <b>Questions</b>
          </h1>
        </div>
        <div className="question-body">
          <div className="ques flex-class">
            <div className="ques-texts">
              <h5>How long does delivery take?</h5>
              <p>
                You Can Get Information By Contacting Our Support Team Have 24/7
                Service. What’s The Difference Between Free And Paid Plan ?
              </p>
            </div>
            <img src="./Plus (1).svg" alt="Eror" />
          </div>
          <hr />
          <div className="ques flex-class">
            <div className="ques-texts">
              <h5>How Does It Work ?</h5>
            </div>
            <img src="./Plus.svg" alt="Eror" />
          </div>
          <hr />
          <div className="ques flex-class">
            <div className="ques-texts">
              <h5>How does your food delivery service work?</h5>
            </div>
            <img src="./Plus.svg" alt="Eror" />
          </div>
          <hr />
          <div className="ques flex-class">
            <div className="ques-texts">
              <h5>What payment options do you accept?</h5>
            </div>
            <img src="./Plus.svg" alt="Eror" />
          </div>
          <hr />
          <div className="ques flex-class">
            <div className="ques-texts">
              <h5>Do you offer discounts or promotions?</h5>
            </div>
            <img src="./Plus.svg" alt="Eror" />
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default Questions;
