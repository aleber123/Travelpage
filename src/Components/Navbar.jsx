import React from 'react';


const Navbar = () => {
  return (
    // Skapar en navigationsfältkomponent
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#0E4778', color: 'white' }}>
      <div className="container d-flex justify-content-around"> 
        <a className="navbar-brand" href="#" style={{ color: 'white' }}>Om oss</a>
        <a className="navbar-brand" href="#" style={{ color: 'white' }}>Kundtjänst</a>
      </div>
    </nav>
  );
};

export default Navbar;