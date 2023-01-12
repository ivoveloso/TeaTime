//This is Version 2 using the Chakura UI - npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
//Logo to be located on the side panel 
import React from 'react';
import './App.css';
import { chakra } from "@chakra-ui/react";
import backgroundImage from "./Project 3 Images/MainPages/Homepage-Main.jpg"
//TO DO: Generating a Welcome Pop up card. 

function App() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img id="TeaTimeLogo" href="/" src="/Project 3 Images/MainPages/T-TimeLogo.png" />
                    </div>
                    <li><a href="#Shop">SHOP</a></li>
                    <li><a href="#AboutUs">ABOUT US</a></li>
                    <li><a href="#JoinUS">JOIN US</a></li>
                    <li><a href='#ContactUs'>CONTACT US</a></li>
                </ul>

                <div class="rightNav">
                    <input type="text" name="search" id="search" />
                    <button class="btn btn-sm">Search</button>
                </div>
            </nav>
    
            <div>
                <div style={{ backgroundImage: `url("https://c1.wallpaperflare.com/path/1015/217/316/tea-leaf-china-green-f78462261f295a41b4d8473a4924c0b8.jpg")`}}>
                    Background Image
                </div>
            </div>
            <section class="section">
                <div class="box-main">
                    <div class="main">
                        <a href="#shopNow"><button id='shopNowBtn' class="btn1 mt-3">SHOP NOW</button></a>
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

export default App;

//Background Image - Homepage-Main.jpg. Still need to incorporate this in the Project. 