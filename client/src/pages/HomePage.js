//This is Version 2 using the Chakura UI - npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
//Logo to be located on the side panel 
import React from 'react';
// import { chakra } from "@chakra-ui/react";
//TO DO: Generating a Welcome Pop up card. 

function HomePage() {
    return (
        <div id="bg-image" style={{ backgroundImage: `url("https://c1.wallpaperflare.com/path/1015/217/316/tea-leaf-china-green-f78462261f295a41b4d8473a4924c0b8.jpg")` }}>
            <nav class="navbar background"><br />
                <ul class="nav-list">
                    <div class="navtabs">
                        <li><a href="#Shop"><strong> | SHOP </strong></a></li>
                        <li><a href="#AboutUs"><strong> | ABOUT US  </strong></a></li>
                        <li><a href="#JoinUS"><strong>|  JOIN US  </strong></a></li>
                        <li><a href='#ContactUs'><strong>| CONTACT US |</strong></a></li>
                    </div>
                </ul>

                <div class="rightNav">
                    <input type="text" name="search" id="search" placeholder="Let us find your favourite Tea!" />
                    <button class="btn btn-sm">Search</button>
                </div>
            </nav>

            <section class="section">
                <div class="box-main">
                    <div class="main">
                        <a href="#shopNow"><button id='shopNowBtn' class="btn1 mt-3"><strong>SHOP NOW</strong></button></a>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p className="text-footer">
                    TeaTime Corporation. Copyright ©-All rights are reserved 2023.
                </p>
            </footer>
        </div>
    )
}

export default HomePage;
//By Cindy J. 