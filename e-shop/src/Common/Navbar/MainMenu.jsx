import React from 'react';

function MainMenu() {
  return (
    <div className="col-lg-9 col-12">
      <div className="menu-area">
        {/* MainMenu */}
        <nav className="navbar navbar-expand-lg">
          <div className="navbar-collapse">
            <div className="nav-inner">
              <ul className="nav main-menu menu navbar-nav">
                <li className="active"><a to="/">Home</a></li>
                <li>
                  <a to="/">
                    Product
                  </a>
                </li>
                <li>
                  <a to="/">
                    Service
                  </a>
                </li>
                <li>
                  <a to="/">
                    Shop
                    <i className="ti-angle-down" />
                    <span className="new">New</span>
                  </a>
                  <ul className="dropdown">
                    <li><a href="shop-grid.html">Shop Grid</a></li>
                    <li><a href="cart.html">Cart</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
                  </ul>
                </li>
                <li><a to="/">Pages</a></li>
                <li>
                  <a to="/">
                    Blog
                    <i className="ti-angle-down" />
                  </a>
                  <ul className="dropdown">
                    <li><a href="blog-single-sidebar.html">Blog Single Sidebar</a></li>
                  </ul>
                </li>
                <li><a href="contact.html">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </nav>
        {/* End Main Menu */}
      </div>
    </div>
  );
}

export default MainMenu;
