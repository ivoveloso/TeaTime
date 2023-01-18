import React from "react";
import { Link } from "react-router-dom";

function ProductCategoryMain() {
  return (
    <div
      id="bg-productsmain-image"
      style={{
        backgroundImage: `url("https://r4.wallpaperflare.com/wallpaper/496/808/956/kettle-cups-pottery-glassware-wallpaper-928bea95626e79527da698a601f67dab.jpg")`,
      }}
    >
      <nav class="navbar background">
        <br />
        <ul class="nav-list">
          <div class="navtabs">
            <li>
              <a href="https://tea-time.herokuapp.com/">
                <strong> | SHOP </strong>
              </a>
            </li>
            <li>
              <Link to="/aboutus">
                <strong> | ABOUT US </strong>{" "}
              </Link>
            </li>
            <li>
              <Link to="/moderntea">
                <strong> | MODERN TEA </strong>{" "}
              </Link>
            </li>
            <li>
              <Link to="/productmain">
                <strong> | PRODUCTS </strong>{" "}
              </Link>
            </li>
          </div>
        </ul>
        <div class="rightNav">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Let us find your favourite Tea!"
          />
          <i />
          <button class="newBtn">Search</button>
        </div>
      </nav>
      <div>
        <Link to="/">
          <button class="btn-2">
            <strong>TRADITIONAL</strong>
          </button>
        </Link>
        <Link to="/moderntea">
          <button class="btn-2">
            <strong>MODERN TEA</strong>
          </button>
        </Link>
      </div>
      <footer className="footer">
        <i>
          TeaTime Corporation. Copyright ©-All rights are reserved 2023.
          <strong />
        </i>
      </footer>
    </div>
  );
}
export default ProductCategoryMain;
//By Cindy J.
