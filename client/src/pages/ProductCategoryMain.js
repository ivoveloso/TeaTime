import React from 'react';

function ProductCategoryMain() {
    return (
        <div id='bg-productsmain-image' style={{ backgroundImage: `url("https://r4.wallpaperflare.com/wallpaper/496/808/956/kettle-cups-pottery-glassware-wallpaper-928bea95626e79527da698a601f67dab.jpg")` }}>
            <nav class="navbar background"><br/>
                <ul class="nav-list">
                    <div class="navtabs">
                        <li><a href="#Shop"><strong> | SHOP </strong></a></li>
                        <li><a href="#AboutUs"><strong> | ABOUT US  </strong></a></li>
                        <li><a href="#JoinUS"><strong>|  JOIN US  </strong></a></li>
                        <li><a href='#ContactUs'><strong>| CONTACT US |</strong></a></li>
                    </div>
                </ul>
                <div class="rightNav">
                    <input type="text" name="search" id="search" placeholder="Let us find your favourite Tea!" /><i />
                    <button class="newBtn">Search</button>
                </div>
            </nav>
            <div>
                <button class="btn-2">TRADTIONAL</button>
                <button class="btn-2">MODERNISED CLASSIC</button>
            </div>
            <footer className="footer">
                <i>TeaTime Corporation. Copyright ©-All rights are reserved 2023.<strong /></i>
            </footer>
        </div>
    )
}
export default ProductCategoryMain;
//By Cindy J.