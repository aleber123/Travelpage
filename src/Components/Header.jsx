import React from 'react';
import Logotype from './Buttons/Logga';
import AccountButton from './Buttons/Button-Account';
import HamburgerMenu from './Hamburger-menu';

const Header = ({ onLoginButtonClick }) => {
  // Stilar för header
  const navbarStyle = {
    backgroundColor: '#F3F8F7', // Justera bakgrundsfärgen
    padding: '2px 2px', // Justera fyllning
  };

  return (
    <nav className="navbar navbar-expand-xl navbar-light" style={navbarStyle}>
      {/* Lägger till en knapp för användarkonto */}
      <AccountButton onClick={onLoginButtonClick} />
      <div className="mx-auto">
        <Logotype /> {/* Lägger till en logotyp */}
      </div>
      <HamburgerMenu /> {/* Lägger till en hamburgermeny */}
      <div className="navbar">
      </div>
    </nav>
  );
};

export default Header;