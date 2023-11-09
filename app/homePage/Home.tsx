import ChickenKing from "./chickenKing-section/ChickenKing";
import Customer from "./customer-section/customer";
import Dishes from "./dishes-section/Dishes";
import Hero from "./hero-section/Hero";
import Premium from "./premium-section/Premium";
import Purchases from "./purchases-section/Purchases";
const Home = () => {
  return (
    <>
      <Hero />
      <Premium />
      <ChickenKing />
      {/* <Dishes /> */}
      <Purchases />
      <Customer />
    </>
  );
};

export default Home;
