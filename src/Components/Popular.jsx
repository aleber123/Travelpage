import React from 'react';
import {Stack, Button} from 'react-bootstrap';
import { getHotelData } from '../HotelData';

export const popular = () => {
  // sparar funktionen getHotelData i variabeln PopularArray
    const popularArray = getHotelData(); 
  return (
      popularArray.map(pop => (/*genom att använda map, delas hoteldata. hotel refererar till varje objekt i arrayen, vilket sen går att välja vilka objekt som önskas presenteras */
  <div>
      <Stack 
          className="p-1 d-flex justify-content-between"
          direction="horizontal"
          gap={2}>
          <div className="p-1" style={{ width: '7rem' }}>
            <img src={pop.image}style={{ width: '100px' }} />
          </div>
          <div className="p-1 mb-1 " style={{ width: '7rem' }}>
                        <ul className="list-unstyled text-left">
                          <li><p className="font-weight-bold">{pop.name}</p></li>
                          <li><p className="text-muted ">{pop.countery}</p></li>
                        </ul>
            </div>
            <p className="  bi bi-star-fill fs-5 fs-7" style={{ width: '3rem', color: "#F5CC0E"  }}>{pop.rating}
            </p>
            <Button  
            className=" bi bi-chevron-compact-right"
            style={{ backgroundColor: '#FFFFFF', color: '#0E4778' }}>
            </Button>
        </Stack>
    </div>
      ))
  )
}
export default popular