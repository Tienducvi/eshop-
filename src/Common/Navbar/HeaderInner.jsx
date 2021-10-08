import React from 'react';

function HeaderInner() {
  return (
    <div className="col-lg-3">
      <div className="all-category">
        <h3 className="cat-heading">
          <i className="fa fa-bars" aria-hidden="true" />
          CATEGORIES
        </h3>
        <ul className="main-category">
          <li>
            <a to="/">
              New Arrivals
              <i className="fa fa-angle-right" aria-hidden="true" />
            </a>
            <ul className="sub-category">
              <li><a to="/">accessories</a></li>
              <li><a to="/">best selling</a></li>
              <li><a to="/">top 100 offer</a></li>
              <li><a to="/">sunglass</a></li>
              <li><a to="/">watch</a></li>
              <li><a to="/">man’s product</a></li>
              <li><a to="/">ladies</a></li>
              <li><a to="/">westrn dress</a></li>
              <li><a to="/">denim </a></li>
            </ul>
          </li>
          <li className="main-mega">
            <a to="/">
              best selling
              <i className="fa fa-angle-right" aria-hidden="true" />
            </a>
            <ul className="mega-menu">
              <li className="single-menu">
                <a to="/" className="title-a">
                  Shop Kids
                </a>
                <div className="image">
                  <img src="https://via.placeholder.com/225x155" alt="#" />
                </div>
                <div className="inner-a">
                  <a to="/">Kids Toys</a>
                  <a to="/">Kids Travel Car</a>
                  <a to="/">Kids Color Shape</a>
                  <a to="/">Kids Tent</a>
                </div>
              </li>
              <li className="single-menu">
                <a to="/" className="title-a">Shop Mens</a>
                <div className="image">
                  <img src="https://via.placeholder.com/225x155" alt="#" />
                </div>
                <div className="inner-a">
                  <a to="/">Watch</a>
                  <a to="/">T-shirt</a>
                  <a to="/">Hoodies</a>
                  <a to="/">Formal Pant</a>
                </div>
              </li>
              <li className="single-menu">
                <a to="/" className="title-a">Shop Womens</a>
                <div className="image">
                  <img src="https://via.placeholder.com/225x155" alt="#" />
                </div>
                <div className="inner-a">
                  <a to="/">Ladies Shirt</a>
                  <a to="/">Ladies Frog</a>
                  <a to="/">Ladies Sun Glass</a>
                  <a to="/">Ladies Watch</a>
                </div>
              </li>
            </ul>
          </li>
          <li><a to="/">accessories</a></li>
          <li><a to="/">top 100 offer</a></li>
          <li><a to="/">sunglass</a></li>
          <li><a to="/">watch</a></li>
          <li><a to="/">man’s product</a></li>
          <li><a to="/">ladies</a></li>
          <li><a to="/">westrn dress</a></li>
          <li><a to="/">denim </a></li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderInner;
