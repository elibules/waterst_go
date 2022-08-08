import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="homeContent">
        <div className="homeContent-text">
          <h1>Welcome to our store!</h1>
          <p>
            Our complete catalog of used CD and Vinyl is available for purchase
            through this site, but if you're in the area please come by our shop
            for help finding exactly what you need or to test any of the music
            that we have in stock.
          </p>
          <Link to="/shop" className="goToButton">
            All Products
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
