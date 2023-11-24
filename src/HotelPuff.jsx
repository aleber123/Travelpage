import React from 'react';
import { Stack, Button } from 'react-bootstrap';
import { getHotelData } from './HotelData';
import { Link } from 'react-router-dom';
import SearchForm from './Components/SearchForm';

export const HotelPuff = (props) => {
  // Extrtaherar category från parameter i route
  const category = props.match.params.category;
   // Extrtaherar searchPhrase från parameter i route 
  const searchPhrase = props.match.params.searchPhrase || '';
      //variabeln hotelArrey blir lika med funktionen getHotelData, där all information om hotellen sparats
  const hotelArray = getHotelData();
  console.log( category,searchPhrase)
  return (
    hotelArray
      // Filter används för att filtrera data
    // Filtreringen beror på om categori vilket deklarerades på rad 10, om det är lika med all kommer detta villkor vara sant leer om categori är lika med contery i searchPhrase som är det också sant,
      .filter(
        (x) =>
          (x.category == category || category == 'all') &&
          x.countery.toLowerCase().indexOf(searchPhrase.toLowerCase()) > -1
      )
      .map(
        (
          hotel /*genom att använda map, delas hoteldata. hotel refererar till varje objekt i arrayen, vilket sen går att välja vilka objekt som önskas presenteras */
        ) => (
          <div>
            
            <Stack
              className="p-1 d-flex justify-content-between"
              direction="horizontal"
              gap={2}
            >
                <div className="p-1" style={{ width: '7rem' }}>
                  <img src={hotel.image} style={{ width: '100px' }} />
                </div>
                <div className="p-1 mb-1 " style={{ width: '7rem' }}>
                    <ul className="list-unstyled text-left">
                      <li><p className="font-weight-bold">{hotel.name}</p></li>
                      <li> <p className="text-muted ">{hotel.countery}</p></li>
                    </ul>
                </div>
                <p className="  bi bi-star-fill fs-5 fs-7" style={{ width: '3rem', color: "#F5CC0E"  }}>{hotel.rating}
            </p>
                <Link to={'/HotelCard/' + hotel.hotelID}>
                  <Button
                    className=" bi bi-chevron-compact-right"
                    style={{ backgroundColor: '#FFFFFF', color: '#0E4778' }}
                  ></Button>
                </Link>
            </Stack>
          </div>
        )
      )
  );
};
export default HotelPuff;

