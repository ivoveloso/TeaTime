import react from 'react';

function ModernTea () {
    return (
        <div id="bg-modern-images"style={{backgroundImage: `url("https://c1.wallpaperflare.com/path/681/578/434/matcha-power-japanese-ingredient-56baf6e0dcb0bfc443ebc7b24610003c.jpg")`}}>
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
                <div class ="modernTeaitems">
                    <card id="card1"></card>
                    <card id=""></card>
                    <card id=""></card>
                    <card id=""></card>
                </div>
            </nav>
        </div>
    )
}

export default ModernTea;