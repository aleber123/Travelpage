import React from 'react';
import './Artiklar.css'; // Import a CSS file for styling

//Array för Artiklar 
export const Artiklar = () => {
  const artiklarArray = [
    {
      artikelID: 1,
      name: "Fynda på Malta",
      countery: "Upptäck Maltas marknader",
      image: "https://img.freepik.com/free-photo/full-length-portrait-from-back-inspired-woman-sparkle-shoes-enjoying-shopping_197531-5736.jpg?w=826&t=st=1696844974~exp=1696845574~hmac=0341c7896fa3f4609fe172f8495980974db39f130c413a4a2b85a045c4d2cf27",
    },
    {
      artikelID: 2,
      name: "Nya smaker i Porto",
      countery: "Tapas på havets läckerheter",
      image: "https://img.freepik.com/free-photo/raw-fresh-oyster-with-caviar-top-lemon_74190-6029.jpg?w=740&t=st=1696845194~exp=1696845794~hmac=a244e7255a34975dfcdf817fa1e7cc3eea8d911a811d97088d672449916101c6",
    },
    {
      artikelID: 3,
      name: "Vattenpark i Rust",
      countery: "Europas största vattenland",
      image: "https://img.freepik.com/free-photo/parents-with-their-son-swimming-pool_23-2149025431.jpg?w=740&t=st=1696845145~exp=1696845745~hmac=07ab5ce7cce00e4a8417191d897d050a29bcd076fcf81840f4da66604285ca56",
    },
  ];
//Presenterar datan hämtad från Artikel array
  return (
    <div className="artiklar-container">
      {artiklarArray.map((hotel) => (
        <div className="artiklar-card" key={hotel.artikelID}>
          <div className="text-container">
            <h6>{hotel.name}</h6>
            <p className="text-muted">{hotel.countery}</p>
          </div>
          <img src={hotel.image} alt={hotel.name} />
        </div>
      ))}
    </div>
  );
};

export default Artiklar;
