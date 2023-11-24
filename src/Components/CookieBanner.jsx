import React, { useState } from 'react';
import { Button } from 'react-bootstrap'; // Importera Bootstrap Button-komponenten

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAcceptClick = () => {
    // Här kan man sätta en cookie för att komma ihåg användarens val.
    // Alternativet att dölja finns enbart. 
    setIsVisible(false);
  };

  const handleRejectClick = () => {
    // Här kan man hantera neka.
    // Alternativet att dölja finns enbart.
    setIsVisible(false);
  };

  const handleCloseClick = () => {
    // Hantera klick på stängningsknappen för att dölja banneren.
    setIsVisible(false);
  };

  if (!isVisible) {
    return null; // Dölj banneren om den inte är synlig
  }

  const closeButtonStyle = {
    position: 'absolute',
    top: '15px', // Justerar toppositionen
    right: '15px', // Justerar högerpositionen
    color: 'black',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
  };

  return (
    <div className="cookie-banner">
      <button className="close-button p-2" style={closeButtonStyle} onClick={handleCloseClick}>
        &times;
      </button>
      <div className="cookie-text p-5">
        Vi använder Cookies. Genom att klicka på "acceptera alla cookies" samtycker du till lagring av cookies på din enhet för att förbättra navigeringen på webbplatsen, analysera webbplatsens användning och bistå i våra marknadsföringsinsatser.
      </div>
      <div className="cookie-buttons d-flex justify-content-around">
        <button className="btn btn-danger" onClick={handleRejectClick}>
          Neka
        </button>
        <button className="btn btn-success" onClick={handleAcceptClick}>
          Acceptera
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
