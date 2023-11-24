/* Knapp antal resenärer med räknare */

import React, { useState } from 'react';
import './TravelersButton.css'; // Importera den anpassade CSS-filen
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const TravelersButton = () => {
  const [travelers, setTravelers] = useState(1);
  // Använd en state-variabel för att räkna antalet resenärer
  const [isCountVisible, setIsCountVisible] = useState(false);
  // Använd en state-variabel för att visa/dölja räknaren

  const increaseTravelers = () => {
    setTravelers(travelers + 1);
  };
  // Funktion för att öka antalet resenärer med 1

  const decreaseTravelers = () => {
    if (travelers > 1) {
      setTravelers(travelers - 1);
    }
  };
  // Funktion för att minska antalet resenärer med 1, om det är mer än 1

  const toggleCountVisibility = () => {
    setIsCountVisible(!isCountVisible);
  };
  // Funktion för att växla synligheten av räknaren

  return (
    <div className="custom-button">     
      <p className="traveler-button " onClick={toggleCountVisibility}>
        <span className="mx-auto">Antal resenärer</span>
      </p>
      
      {isCountVisible && (
        /* Visa räknaren om isCountVisible är sant */
        <div className="traveler-count-container">
          <div className="blur-background" onClick={toggleCountVisibility}></div>
          <div className="traveler-count-content">
            {/* Själva räknaren och knappar för att öka/minska antalet */}
            <p className="add-button" onClick={increaseTravelers}>
              <FontAwesomeIcon icon={faPlus} />
            </p>
            <span className="traveler-count">{travelers}</span>
            <p className="remove-button" onClick={decreaseTravelers}>
              <FontAwesomeIcon icon={faMinus} />
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TravelersButton;
