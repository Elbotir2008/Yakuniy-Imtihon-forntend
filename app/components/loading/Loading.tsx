import "./loading.css";
const Spinner = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <div className="loader-text">Loading...</div>
    </div>
  );
};

export default Spinner;
