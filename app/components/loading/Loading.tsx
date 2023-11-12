import ClipLoader from "react-spinners/ClipLoader";
const override = {
  margin: "0px 430px",
  borderColor: "blue",
};

function Spinner() {
  return (
    <div className="sweet-loading">
      <ClipLoader
        cssOverride={override}
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;
