import React from 'react';

function ProductCategoryMain() {
    return (
        <div id="bg-structure">   
            <div id="bg-productsmain-images"style={{ backgroundImage: `url("")`}}>

            </div>
            <nav class="navbar background">
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
// TO DO LIST AS AT 17/01/2022: Work through Slide 1 - 6 
//  1) Finish the 'Product Category' Main Page 
//  2) Start & Finish 'Modern Tea Classic' Main Page 
//  3) Start & Finish the 'Traditional Tea' Main Page 
//  4) Start & Finish the  Login Page 

// Completed: Slide 1) Homepage & Slide 3) About us Page = 4 slides to go!