import react from "react";

function ModernTea() {
  return (
    <div
      id="bg-modern-images"
      style={{
        backgroundImage: `url("https://c1.wallpaperflare.com/path/681/578/434/matcha-power-japanese-ingredient-56baf6e0dcb0bfc443ebc7b24610003c.jpg")`,
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
          <i />
          <button class="newBtn">Search</button>
        </div>
        <div class="modernTeaitems">
          <div class="tea-card" id="card1">
            <h5>ROSÉ RENDEZVOUS</h5>
            <img src="https://www.ohhowcivilized.com/wp-content/uploads/rose-tea-5.jpg"></img>
          </div>
          <div class="tea-card" id="card2">
            <h5>CHRYSANTHEMUM SAMURAI</h5>
            <img src="https://cdn.shopify.com/s/files/1/0116/6009/9641/articles/chrysanthemum-tea-benefits_600x600_crop_center.jpg?v=1659037062"></img>
          </div>
          <div class="tea-card" id="card3">
            <h5>LAVENDER DREAM</h5>
            <img src="https://cdn.shopify.com/s/files/1/0399/9603/1142/products/blackleaves-OrganicLavender-min_1024x.jpg?v=1639616957"></img>
          </div>
          <div class="tea-card" id="card4">
            <h5>SWEET OSMANTHUS</h5>
            <img src="https://cdn.shopify.com/s/files/1/0270/5620/9989/products/10_37c72971-1e65-4dac-8a52-84d02402d7ed.jpg?v=1592138882"></img>
          </div>
        </div>
        <footer className="footer">
          <i>
            TeaTime Corporation. Copyright ©-All rights are reserved 2023.
            <strong />
          </i>
        </footer>
      </nav>
    </div>
  );
}

export default ModernTea;
//By Cindy J.
