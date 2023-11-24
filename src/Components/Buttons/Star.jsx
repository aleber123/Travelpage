/* Stjärna skapad som en återanvändningsbar komponent*/

import React from 'react';

const StarRating = ({ rating, color }) => {
   /* Komponenten StarRating tar emot två egenskaper: "rating" och "color" */
  const starStyle = {
    color: color || '#F5CC0E',
  };
/* Skapa en stjärnstil med den angivna färgen eller standardfärgen */
  const stars = [];
  /* Skapa en tom array för att hålla stjärnorna */
  const fullStars = parseInt(rating, 10); 
   /* Konvertera betyget till ett heltal med bas 10 */

  for (let i = 0; i < fullStars; i++) {
    /* Skapa en slinga för varje full stjärna i betyget */
    stars.push(
      <span
        key={i}
        className="bi bi-star-fill fs-1 filled"
        style={starStyle}
      >
      </span>
    );
    /* Lägg till en fylld stjärna med den angivna färgen i arrayen */
  }

  return <div className="star-rating">{stars}</div>;
  /* Returnera en div som innehåller stjärnorna med klassen "star-rating" */
};

export default StarRating;
