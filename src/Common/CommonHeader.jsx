import React from 'react';
import DetailInfo from './TopHeader/DetailInfo';
import SearchBar from './Navbar/SearchBar';
import HeaderInner from './Navbar/HeaderInner';
import MainMenu from './Navbar/MainMenu';

function CommonHeader() {
  return (
    <div>
      <header className="header shop">
        <DetailInfo />
        <SearchBar />
        <div className="header-inner">
          <div className="container">
            <div className="cat-nav-head">
              <div className="row">
                <HeaderInner />
                <MainMenu />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default CommonHeader;
