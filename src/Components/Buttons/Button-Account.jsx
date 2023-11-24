import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS

// Komponenten AccountButton tar en funktion 'onClick' som en prop.

const AccountButton = ({ onClick }) => {
  const buttonStyle = {
    color: '#0E4778', // Set the color to #0E4778
    fontSize: '30px', 
    cursor: 'pointer', // cursor style to indicate it's clickable
  };

   // Returnera en navigationsfält med en klickbar knapp.
  return (
    <nav className="navbar navbar-light bg-light">
      <p className="navbar-brand" href="#" onClick={onClick}> 
        <i className="bi bi-person-circle p-2" style={buttonStyle}></i>
      </p>
    </nav>
  );
};

export default AccountButton;
