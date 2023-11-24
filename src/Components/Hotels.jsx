import React from 'react';
import StarRating from './Buttons/Star';
import { Card, ListGroup, Button, Container, } from 'react-bootstrap';
import { getHotelData } from '../HotelData';
import { Link } from 'react-router-dom';

// Loopa igenom varje hotell i HotelData.jsx och genererar en Card-komponent för varje hotell. Inkluderat Rating där antal stjärnor visas.
const Hotels = () => {
  const hotelArray = getHotelData();
  return hotelArray.map((hotel) => (
    <Container className="mx-auto">
      <Card style={{ width: '20rem' }}>
      <Card.Img style={{ height: 'auto' }} src={hotel.image} />
      <div key={hotel.hotelID} className="hotel-card">
      <Card.Body>
  
      <div >
        <div>
                  <Card.Title className="text-wrap mb-0">
                    <p>{hotel.name}</p>
                  </Card.Title>
                </div>
                <Card.Subtitle className="text-muted text-wrap mb-1">
                  <p>{hotel.adress}</p>
                </Card.Subtitle>
        </div>
        <p>
          <strong>Rating:</strong>{' '}
          <StarRating rating={parseFloat(hotel.rating)} color="#F5CC0E" />
        </p>

        <p>
          <strong>Price:</strong> {hotel.price} kr/natt
        </p>
        </Card.Body>
        <div>
        <ListGroup variant="flush" style={{ listStyle: 'none' }}>
            <ListGroup.Item>
            <span className="d-flex justify-content-between " >
            <label htmlFor={`rum-${hotel.hotelID}`}>Rum brevid varandra</label>
          
              <input
                type="radio"
                id={`rum-${hotel.hotelID}`}
                name={`room-${hotel.hotelID}`}
              />
              </span>
              </ListGroup.Item>
          
              <ListGroup.Item>
              <span className="d-flex justify-content-between " >
              <label htmlFor={`transfer-${hotel.hotelID}`}>Transfer</label>
             
              <input 
                type="radio"
                id={`restaurant-${hotel.hotelID}`}
                name={`room-${hotel.hotelID}`}
              />
              </span>
              </ListGroup.Item >
              <ListGroup.Item>
              <span className="d-flex justify-content-between " >
             <Link> <label htmlFor={`restaurant-${hotel.hotelID}`}>Boka restaurang</label></Link>
              </span>
              </ListGroup.Item >
          </ListGroup >
        </div>
        <div className="text-center p-5">
        <Link to="/StartBetalaVy"><Button  style={{
                width: '7rem',
                height: '3rem',
                backgroundColor: '#0E4778',
              }}>Boka</Button></Link>
              </div>
      </div>
     
      </Card>
    </Container>
  ));
};

export default Hotels;