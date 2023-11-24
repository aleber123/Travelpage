import React, { useState } from 'react';
import { Form, Button, Nav, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Calendar from './Buttons/Calendar';
import TravelersButton from './Buttons/TravelersButton';

export const SearchForm = () => {
    // React Hook UseState används för att hämta upp den text som skrivs in i sökrutan
  const [searchPhrase, setSearchPhrase] = useState('');
  return (
    <div>
      <Container
        fluid
        className="search-start"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/beach-concept-with-relax-written-sand_23-2147836060.jpg?w=740&t=st=1696427091~exp=1696427691~hmac=49cc515b1307f510ae3d268982cae2b1c27b7d2c83c6e742fa8c96998fb46dce")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          minHeight: '70vh',
          maxHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Form>
          <div className="p-3 mx-auto">
            <Form.Control
              className=" text-center mb-3"
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '100px',
                padding: '10px',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              type="search"
              placeholder="Skriv din destination här"
              aria-label="Search"
              value={searchPhrase}
              onChange={(e) =>
                setSearchPhrase(e.target.value)
              } /* När värdet i sökrutan ändras, så ändras status på state */
            />
{/* Hämtar andra komponenter */}
            <Calendar />

            <TravelersButton />
          </div>
          <Row>
              {/* kommande div finns länkar där olika filtreringar av komponenten hotelPuff  */}
            <div className="d-flex justify-content-around text-center">
              <Nav.Link as={Link} to="/HotelPuff/all">
                <p
                  className="fs-7"
                  style={{
                    backgroundColor: '#0E4778',
                    color: '#FFFFFF',
                    padding: '10px',
                    width: '150px',
                    borderRadius: '15px',
                  }}
                >
                  Hotell
                </p>
              </Nav.Link>
              <Nav.Link as={Link} to="/HotelPuff/hotellTransfer">
                <p
                  className="fs-7"
                  style={{
                    backgroundColor: '#0E4778',
                    color: '#FFFFFF',
                    padding: '10px',
                    width: '150px',
                    borderRadius: '15px',
                  }}
                >
                  Hotell + Transfer
                </p>
              </Nav.Link>
            </div>
          </Row>
          <Row>
            <div className="d-flex justify-content-around mt-5">
              <Link to={'/HotelPuff/all/' + searchPhrase}>
                <Button
                  style={{
                    backgroundColor: '#F5CC0E',
                    width: '15rem', // Adjust the width as needed
                    height: '3rem', // Adjust the height as needed
                    borderRadius: '20px', // Half of the height to make it rounded
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: 'none', // Remove the border
                    fontSize: '20px ',
                    color: '#0E4778',
                    fontWeight: 'bold',
                  }}
                  variant="outline-success"
                >
                  {' '}
                  <i className="bi bi-search "></i>
                  <p className=" pt-3 mx-auto ">Sök</p>
                </Button>
              </Link>
            </div>
          </Row>
        </Form>
      </Container>
      <div
        Style={{
          height: ' 3rem',
          borderRadius: '20px',
          position: 'relative',
          marginTop: '-30px',
          backgroundColor: '#F5CC0E',
        }}
      >
     
      </div>
    </div>
  );
};
export default SearchForm;
