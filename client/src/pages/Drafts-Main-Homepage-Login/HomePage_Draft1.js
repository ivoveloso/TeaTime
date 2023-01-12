//This is the 1st version that intends to convert existing handlebars to jsx. 
//Assuming that we could convert handlebars to jsx file using npm install handlebars-to-jsx
//Reference: https://www.npmjs.com/package/handlebars-to-jsx 
//NOTE: Activate MongoDB & Npm run develop in the Integrated Terminal instead. 

import { compile } from 'handlebars-to-jsx' //Haven't npm installed this function yet

//<!-- Top Navbar --> Search Bar also required
<nav class="navbar navbar-expand-lg">
    <div class="container">
        <img id="" href="/" src="/"></img>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" href="/">SHOP</a>
                </li>
                {/* {{#if logged_in}} */}
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Account
                    </a>

                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="./login">LOGIN</a></li>
                        <li>
                            {/* <hr class="dropdown-divider"> */}
                        </li>
                        <li><a class="dropdown-item" id="logout">LOG OUT</a></li>
                    </ul>
                </li>
                {/* {{else}} */}
                <li class="nav-item">
                    <a class="nav-link active" href="./login">Login</a>
                </li>
                {/* {{/if}} */}


                {/* {{#if logged_in}} */}
                <li class="nav-item">
                    <a class="nav-link">Welcome back!</a>
                </li>
                {{ else}}
                <li class="nav-item">
                    <a class="nav-link" href="/login">JOIN US</a>
                </li>
                {/* {{/if}} */}


                {/* {{#if logged_in}} */}
                <li class="nav-item">
                    <a class="nav-link">Welcome back!</a>
                </li>
                {/* {{else}} */}
                <li class="nav-item">
                    <a class="nav-link" href="/login">CONTACT US</a>
                </li>
                {/* {{/if}} */}
            </ul>
            <a href="/cart/" class="btn btn-primary" role="button">Shopping Cart: {{ cart.totalQty }}</a>
        </div>
    </div>
    <section class="main">
        <div class="container py-5">
            <div class="row py-4">
                <div class="col-lg-7 pt-5 text-center">
                    <a href="#themenu"><button id='shopNowBtn' class="btn1 mt-3">SHOP NOW</button></a>
                </div>
            </div>
        </div>
    </section>
</nav>
