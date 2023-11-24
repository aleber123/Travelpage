import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import './ButtonLike.css'; // Make sure to adjust the path to your CSS file


// Användning av 'useState' för att hantera knappens tillstånd (gillad eller ogillad)
const ButtonLike = () => {
  const [isLiked, setIsLiked] = useState(false);

// Funktion för att hantera knappens klickhändelse
  const handleButtonClick = () => {
// Byt tillståndet mellan gillad och ogillad vid varje klick
    setIsLiked(!isLiked);
  };

  return (
    <button
    // Klassattributet baserat på 'isLiked' tillståndet
      className={`heart-button ${isLiked ? 'liked' : ''}`}
      onClick={handleButtonClick}
    >
       {/* Renderar hjärtikonen med klassen 'heart-icon' */}
      <FaHeart className="heart-icon" />
    </button>
  );
};

export default ButtonLike;
