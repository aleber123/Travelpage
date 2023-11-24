import React from 'react';
import Logotype from './Buttons/Logga';
import FaceBookLogo from './Buttons/FaceBookLogo';
import InstagramLogo from './Buttons/InstagramLogo';
import { Form, Container, Row, Col, Stack, Button } from 'react-bootstrap';
import MailLogo from './Buttons/Button-start-mail';
import PhoneLogo from './Buttons/Button-start-phone';

const Footer = () => (
  <footer
    className="page-footer font-small blue pt-4 "
    style={{ backgroundColor: '#F3F8F7' }}
  >
    <hr></hr>
    {/* rubrik för sitemap */}
    <h3 className="text-center" style={{ color: '#0E4778' }}>
      Genvägar
    </h3>
    <hr></hr>
    <div className="d-flex justify-content-center">
         {/* i följade container ligger grunden till att skapa en sitemap, bara att länka alla p element som saknas */}
      <Container className="p-5">
        <Row>
          <Col>
            <p className="text-muted">Inspireras</p>
          </Col>
          <Col>
            <p className="text-muted">Mina sidor</p>
          </Col>
          <Col>
            <p className="text-muted">Om oss</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Populärt</p>
          </Col>
          <Col>
            <p>Mina favoriter</p>
          </Col>
          <Col>
            <p>Företaget</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Restips</p>
          </Col>
          <Col>
            <p>Sparade sökningar</p>
          </Col>
          <Col>kundtjänst</Col>
        </Row>
        <Row>
          <Col>
            <p>Artiklar</p>
          </Col>
          <Col>
            <p>Mina bokningar</p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
    <hr></hr>
 {/* Kommande container innehåller information för att fylla i mail för kundbrev */}
    <Container>
      <h3 className="text-center" style={{ color: '#0E4778' }}>
        Håll dig uppdaterad
      </h3>
      <p className="text-center">Få erbjudanden via e-post</p>
      <div className="d-flex justify-content-around">
        <Stack direction="horizontal" gap={2}>
          <Form.Control
            className=""
            style={{ width: '16rem' }}
            placeholder="Skriv din mail här....."
          />
          <Button variant="secondary" style={{ backgroundColor: '#0E4778' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-envelope"
              style={{ color: '#F3F8F7' }}
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
          </Button>
        </Stack>
      </div>
    </Container>
 {/* Kommande div innehåller ikoner för kommunikation med företaget */}
    <div className="d-flex justify-content-center p-4">
    
    
      <Logotype />
    </div>
    <div className="p-3">
      <Row>
        <Col>
          <FaceBookLogo />
        </Col>
        <Col>
          <InstagramLogo />
        </Col>
        <Col>
          <MailLogo />
        </Col>
        <Col>
          <PhoneLogo />
        </Col>
      </Row>
    </div>
    <hr></hr>
    <Container className="d-flex justify-content-center">
        {/* kommande container är  för att presentera företagets kontaktinfo */}
      <Row>
        <Col className="d-flex justify-content-center">
          <p style={{fontSize:'0.8rem'}}>Adress: adressen 45 0000 staden</p>
        </Col>
        <Col className="d-flex justify-content-center">
          <p  style={{fontSize:'0.8rem'}}>Telefon: 222000</p>
        </Col>
        <hr></hr>
        <Col>
          <p  style={{fontSize:'0.6rem'}}>cookies</p>
        </Col>
        <Col>
          <p style={{fontSize:'0.6rem'}}>Hantering av personuppgifter</p>
        </Col>
        <Col>
          <p style={{fontSize:'0.6rem'}}>Hållbarhet</p>
        </Col>
        <Col>
          <p style={{fontSize:'0.6rem'}}>Hur vi jobbar</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
