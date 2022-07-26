import { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  const [cartNum, setCartNum] = useState(0);

  useEffect(() => {
    localStorage.getItem("cartNumber")
      ? setCartNum(parseInt(localStorage.getItem("cartNumber")))
      : localStorage.setItem("cartNumber", "0");
  }, [cartNum]);

  return (
    <>
      <nav>
        <p className="navTitle">Water St. CD & Vinyl</p>
        <div className="links">
          <Link to="/home">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact" id="contactLink">
            Contact Us
          </Link>
          <Link to="/contact/messages">Messages</Link>
          <div id="loginProfileLinks">
            <Link to="/auth" id="loginLink">
              Login
            </Link>
            <Link to="/profile" id="profileLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 0 24 24"
                width="30px"
                fill="#f5f5f5"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52
                    2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93
                    1.78C15.57 19.36 13.86 20 12
                    20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36
                    2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0
                    1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06
                    13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83
                    0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"
                />
              </svg>
            </Link>
          </div>
          <Link to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 0 24 24"
              width="30px"
              fill="#f5f5f5"
              className="cartIcon"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M15.55 13c.75 0 1.41-.41
                      1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6
                      7.59-1.35 2.44C4.52 15.37 5.48 17 7
                      17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7
                      18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10
                      0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
              />
            </svg>
            <span id="cartNumber">{String(cartNum)}</span>
          </Link>
        </div>
      </nav>
      <div className="pageWrapper">
        <Outlet context={[cartNum, setCartNum]} />
      </div>
      <footer>Water St. CD & Vinyl by Elijah Bules &copy; 2022</footer>
    </>
  );
};

export default Layout;
