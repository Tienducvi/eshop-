import React from 'react';
import { Link } from 'react-router-dom';

function MainMenu() {
  return (
    <div className="col-lg-9 col-12">
      <div className="menu-area">
        {/* MainMenu */}
        <nav className="navbar navbar-expand-lg">
          <div className="navbar-collapse">
            <div className="nav-inner">
              <ul className="nav main-menu menu navbar-nav">
                <li className="active"><Link to="/home">Home</Link></li>
                <li>
                  <Link to="/product">
                    Product
                  </Link>
                </li>
                <li>
                  <Link to="/service">
                    Service
                  </Link>
                </li>
                <li>
                  <Link to="/shop">
                    Shop
                    <i className="ti-angle-down" />
                    <span className="new">New</span>
                  </Link>
                  <ul className="dropdown">
                    <li><a href="shop-grid.html">Shop Grid</a></li>
                    <li><a href="cart.html">Cart</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
                  </ul>
                </li>
                <li><Link to="/pages">Pages</Link></li>
                <li>
                  <Link to="/blog">
                    Blog
                    <i className="ti-angle-down" />
                  </Link>
                  <ul className="dropdown">
                    <li><Link to="blog-single-sidebar.html">Blog Single Sidebar</Link></li>
                  </ul>
                </li>
                <li><Link to="contact.html">Contact Us</Link></li>
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
