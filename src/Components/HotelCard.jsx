import React from 'react';
import {
  Card,
  ListGroup,
  Col,
  Row,
  Button,
  Stack,
  Container,
} from 'react-bootstrap';
import { getHotelData } from '../HotelData';
import { getHotel } from '../HotelData';
import { Link } from 'react-router-dom';
import StarRating from './Buttons/Star';

export const HotelCard = (props) => {
  // Extrtaherar hotelID från parameter i route
  const hotelID = props.match.params.hotelID;
  // hämtar hotel ID från funktionen getHotel
  const hotel = getHotel(hotelID); 
  //variabeln hotelArrey blir lika med funktionen getHotelData, där all information om hotellen sparats
  const hotelArray = getHotelData();
  //sorterar ut informationen i hotelArray via .map()
  return hotelArray.map((hotel) => (
    <div className=" ">
      <Container className="mx-auto">
        <Col>
        {/* i Cards visas informationen från komponenten hoteldata via funktionen GetHotelData */}
          <Card style={{ width: '20rem' }}>
            <Card.Img style={{ height: 'auto' }} src={hotel.image} />
            <Card.Body>
              <div>
                <div className="d-flex justify-content-between">
                  <Card.Title className="text-wrap mb-0">
                    <p>{hotel.name}</p>
                  </Card.Title>
                </div>
                <Card.Subtitle className="text-muted text-wrap mb-1">
                  <p>{hotel.adress}</p>
                </Card.Subtitle>
                <div>
                <p>
          <strong>Rating:</strong>{' '}
          <StarRating rating={parseFloat(hotel.rating)} color="#F5CC0E" />
        </p>
                </div>
                <Card.Text>
                  <p> {hotel.desc}</p>
                </Card.Text>
              </div>
            </Card.Body>
            {/* Lista för att visa upp om olika faciliteter finns, om de finns hämtas de från hoteldata och presenteras här */}
            <ListGroup variant="flush" style={{ listStyle: 'none' }}>
              <ListGroup.Item>
                {/* denna if sats låter villorekt om kids club är sant, visa */}
                {hotel.isKidsClub ? (
                  <li className="mb-2 p-2">
                    <span className="fa-li">
                      <i className="fas fa-book-open fa-2x"></i>
                    </span>
                    Kids Club
                  </li>
                ) : (
                  ''
                )}
              </ListGroup.Item>
              <ListGroup.Item>
                {hotel.isResturant ? (
                  <li className="mb-2 p-2">
                    <span className="fa-li">
                      <i className="fas fa-book-open fa-2x"></i>
                    </span>
                    Hotel restaurant
                  </li>
                ) : (
                  ''
                )}
              </ListGroup.Item>
              <ListGroup.Item>
                {hotel.isTransfer ? (
                  <li className="mb-2 p-2">
                    <span className="fa-li">
                      <i className="fas fa-book-open fa-2x"></i>
                    </span>
                    Airport Transfer
                  </li>
                ) : (
                  ''
                )}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        {/* de kommande två stack presenteras mindre information samt en länk till mer infromation */}
        <Stack
          md="3"
          sm="6"
          xl="3"
          className="p-1 d-flex justify-content-between"
          direction="horizontal"
          gap={2}
          style={{ width: 'auto',  margin: '' }}
        >
          <div className="p-1">
            <img
              src="https://img.freepik.com/free-photo/white-nature-hotel-travel-beautiful_1203-4841.jpg?w=1800&t=st=1696937898~exp=1696938498~hmac=5e3c878e541b08a9e5617465c00be7d467280303dc99bcdf178c70ba9365c935"
              style={{ width: '120px' }}
            />
          </div>
          <div className=" " style={{ width: 'auto' }}>
            <ul className="list-unstyled text-left">
              <li>
                <p className="font-weight-bold">Restaurang</p>
              </li>
              <li>
                <p className="text-muted ">Taverna Gusto</p>
              </li>
            </ul>
          </div>

          <Link to="/TavernaGusto/"><Button
            className=" bi bi-chevron-compact-right"
            style={{ backgroundColor: '#FFFFFF', color: '#0E4778' }}
          ></Button>
          </Link>
        </Stack>
        <Stack
          md="3"
          sm="6"
          xl="3"
          className="p-1 d-flex justify-content-between"
          direction="horizontal"
          gap={4}
          style={{ width: 'auto', margin: 'auto' }}
        >
          <div className="p-1">
            <img
              src="https://img.freepik.com/free-photo/children-playing-grass_1098-504.jpg?w=1800&t=st=1696946914~exp=1696947514~hmac=16b68103b9036cc52fe71cf83f83d97a91ed112cf8cdcba96a1cb2a5b461f017"
              style={{ width: '120px' }}
            />
          </div>
          <div className=" ">
            <ul className="list-unstyled text-left">
              <li>
                <p className="font-weight-bold">Kinds Club</p>
              </li>
              <li>
                <p className="text-muted">Aktiviteter för barn</p>
              </li>
            </ul>
          </div>

          <Button
            className=" bi bi-chevron-compact-right "
            style={{ backgroundColor: '#FFFFFF', color: '#0E4778' }}
          ></Button>
        </Stack>
        <Row>
          <div className="text-center p-5">
             <Link to="/Hotels/">
             <Button
              style={{
                width: '7rem',
                height: '3rem',
                backgroundColor: '#0E4778',
              }}
            >
              Boka
            </Button>
            </Link>
          </div>
        </Row>
      </Container>
    </div>
  ));
};
export default HotelCard;


