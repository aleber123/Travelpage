// Hamburger-menu.jsx
import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  // Stil för menyn som ändras beroende på om den är öppen eller stängd
  const menuStyle = {
    display: isOpen ? 'block' : 'none', // Visa menyn om isOpen är true, annars dölj den
    width: '15rem', // Justera bredden
    backgroundColor: '#F3F8F7', // Justera bakgrundsfärgen
    position: 'absolute', 
    top: '60px', // Justera toppositionen
    right: '-2px', // Justera högerpositionen
    zIndex: 1, // Lägsta z-index för att placera menyn ovanpå andra element
    


    
  };
  // Stil för länkarna i menyn
  const linkStyle = {
    margin: "0.5rem",
    textDecoration: "none",
    color: 'black',
  };

  //retunerar hamburgermenu med länkar
  return (
    <div style={{ position: 'relative' }}>
      <Hamburger
        toggled={isOpen}
        toggle={toggleMenu}
        size={35}
        color="#0E4778"
      />
      <div style={menuStyle}>
        <div className="p-5">
          <div className="flex-column">
            <Link to="/SearchVy" style={linkStyle}>
              <p>Hem</p>
            </Link>
            <Link to="/Vyer/OmOssVy" style={linkStyle}>
              <p>Om oss</p>
            </Link>
            <Link to="/Vyer/InspirationVy" style={linkStyle}>
              <p>Inspiration</p>
            </Link>
            <Link to="/Components/sorry" style={linkStyle}>
              <p>Mina Sidor</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
