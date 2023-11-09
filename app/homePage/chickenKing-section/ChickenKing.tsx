import "./chickenKing.scss";
const ChickenKing = () => {
  return (
    <section className="chickenKing-section">
      <div className="container">
        <img src="./Image.svg" className="backChicken" alt="Eror" />
        <div className="chicken-texts flex-class">
          <h1>The Chicken King</h1>
          <div className="center flex-class">
            <span className="span1">24min •</span>
            <img src="./Star.svg" alt="Eror" />
            <span>4.8</span>
          </div>
          <img src="Bookmark.svg" className="book" alt="Eror" />
        </div>
      </div>
    </section>
  );
};

export default ChickenKing;
