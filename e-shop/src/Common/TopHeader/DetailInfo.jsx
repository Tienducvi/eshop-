import React from 'react';

function DetailInfo() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-12">
            <div className="top-left">
              <ul className="list-main">
                <li>
                  <i className="ti-headphone-alt" />
                  +060 (800) 801-582
                </li>
                <li>
                  <i className="ti-email" />
                  support@shophub.com
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-12">
            <div className="right-content">
              <ul className="list-main">
                <li>
                  <i className="ti-location-pin" />
                  Store location
                </li>
                <li>
                  <i className="ti-alarm-clock" />
                  <a to="/">Daily deal</a>
                </li>
                <li>
                  <i className="ti-user" />
                  <a to="/">My account</a>
                </li>
                <li>
                  <i className="ti-power-off" />
                  <a to="/login.html#">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailInfo;
