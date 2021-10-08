import React from 'react';

function TrendingItem() {
  return (
    <div className="product-area section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Trending Item</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="product-info">
              <div className="nav-main">
                {/* Tab Nav */}
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#man" role="tab">Man</a></li>
                  <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#women" role="tab">Woman</a></li>
                  <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#kids" role="tab">Kids</a></li>
                  <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#accessories" role="tab">Accessories</a></li>
                  <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#essential" role="tab">Essential</a></li>
                  <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#prices" role="tab">Prices</a></li>
                </ul>
                {/* End Tab Nav */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingItem;
