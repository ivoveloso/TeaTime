import React from 'react';

// import { chakra } from "@chakra-ui/react"; //Still need to fix this. 
// TO DO: Need to link both About us page & Login Page properly with CSS. 

function AboutUs () {
    return (
        <div id="bg-image" style={{ backgroundImage: `url("https://r4.wallpaperflare.com/wallpaper/19/762/447/tea-teapot-leaves-transparent-wallpaper-42314250edb68e9beaa872557078e982.jpg")`}}>
            <h1>ABOUT US<strong/></h1><br/>
            <h3><p>The TeaTime Corporation was founded in January 2023 by a group of Code fanatics who not only like to learn anything about Coding & Web Design. <br/><br/>But more importantly, we shared the same passion for promoting a healthier living through the Art of Premium Tea with our friends and families. <br/><br/>At TeaTime, We only intend to select the finest Tea leaves available.</p></h3>
            <button class="btn btn-sm2">Back to HomePage</button>
            <footer className="footer">
                    <i>Copyright ©-All rights are reserved 2023.<strong/></i>
            </footer>
        </div>
    )
}

export default AboutUs;
//By Cindy J. 