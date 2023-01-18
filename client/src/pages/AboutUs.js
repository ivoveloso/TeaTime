import React from "react";

// import { chakra } from "@chakra-ui/react"; //Still need to fix this.
// TO DO: Need to link both About us page & Login Page properly with CSS.

function AboutUs() {
  return (
    <div
      id="bg-image2"
      style={{
        backgroundImage: `url("https://r4.wallpaperflare.com/wallpaper/19/762/447/tea-teapot-leaves-transparent-wallpaper-42314250edb68e9beaa872557078e982.jpg")`,
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
              <a href="/aboutus">
                <strong> | ABOUT US </strong>
              </a>
            </li>
            <li>
              <a href="/moderntea">
                <strong>| MODERN TEA </strong>
              </a>
            </li>
            <li>
              <a href="/productmain">
                <strong>| PRODUCTS |</strong>
              </a>
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
          <button class="btn btn-sm">Search</button>
        </div>
      </nav>
      <h2>
        ABOUT US
        <strong />
      </h2>
      <h3>
        <p>
          The TeaTime Corporation was founded in January 2023 by a group of Code
          fanatics who not only like to learn anything about Coding & Web
          Design. <br />
          <br />
          But more importantly, we shared the same passion for promoting a
          healthier living through the Art of Premium Tea with our friends and
          families. <br />
          <br />
          At TeaTime, We only intend to select the finest Tea leaves available.
        </p>
      </h3>
      <footer className="footer">
        <i>
          TeaTime Corporation. Copyright ©-All rights are reserved 2023.
          <strong />
        </i>
      </footer>
    </div>
  );
}

export default AboutUs;
//By Cindy J.
