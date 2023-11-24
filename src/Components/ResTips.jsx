import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Card, Button } from 'react-bootstrap';

export const ResTips = () => {
    // useEmblaCarousel är en hook som tillåter funktioner för presentera bilder från bildbibloteket Embla
  const [emblaRef] = useEmblaCarousel();
 //  Här sparas funktioen ner i variabeln emblaRef, som senare används som referens på rad 19
  return (
    <div>
      <div
        style={{
          backgroundColor: '#F5CC0E',
          color: 'white',
        }}
      >
        <h2 className="text-center p-2">Resetips</h2>
      </div>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
              {/* Här börjar Card som är informationen som presetenras i karusellen */}
            <Card style={{ width: '20rem' }}>
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-photo/beautiful-outdoor-view-with-umbrella-chair-around-swimming-pool-luxury-hotel_74190-1052.jpg?w=1800&t=st=1696950082~exp=1696950682~hmac=3092ba1519d1e21b4b4735e80e4885ad92812b5d86ec0a61a31a6fb831b9127b"
              />
              <Card.Body>
                <Card.Title className="text-center fs-3">
                  Allinclusive på maldiverna
                </Card.Title>
                <Card.Text className=" fs-4">
                  <div className="d-flex justify-content-center">
                    <ul style={{ listStyle: 'none' }}>
                      <li>Bekväma sviter</li>
                      <li>Barnpassning</li>
                      <li>Spaavdelning</li>
                    </ul>
                  </div>
                </Card.Text>
                <div className="text-center p-2">
                  <Button
                    className=" fs-3"
                    style={{
                      backgroundColor: '#F5CC0E',
                      height: '3rem',
                      borderStyle: 'none',
                    }}
                  >
                    Lyxresor
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="embla__slide">
            <Card style={{ width: '20rem' }}>
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-photo/hotel-sign_1101-846.jpg?w=1800&t=st=1696953684~exp=1696954284~hmac=9bbad5b69df408b689036a90296cb8207acc0df37ac8cf3413cee269ae38aaad"
              />
              <Card.Body>
                <Card.Title className="text-center fs-3">
                  Boutiqe hotell i Malaga
                </Card.Title>
                <Card.Text className=" fs-4">
                  <div className="d-flex justify-content-center">
                    <ul style={{ listStyle: 'none' }}>
                      <li>Unika rum</li>
                      <li>Cocktailbar</li>
                      <li>Spaavdelning</li>
                    </ul>
                  </div>
                </Card.Text>
                <div className="text-center p-2">
                  <Button
                    className="fs-3"
                    style={{
                      backgroundColor: '#F5CC0E',
                      height: '3rem',
                      borderStyle: 'none',
                    }}
                  >
                    Gömda pärlor
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="embla__slide">
            <Card style={{ width: '20rem' }}>
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-photo/children-having-fun-with-floater-pool_23-2149492547.jpg?w=1800&t=st=1696953803~exp=1696954403~hmac=796f7b951ff375e2702b27ce52b72e79b84d618005ea91a72a64bb7ed28efdd6"
              />
              <Card.Body>
                <Card.Title className="text-center fs-3">
                  Kids club på hotel Konsul
                </Card.Title>
                <Card.Text className=" fs-4">
                  <div className="d-flex justify-content-center">
                    <ul style={{ listStyle: 'none' }}>
                      <li>Glassbar</li>
                      <li>Strandäventyr</li>
                      <li>onsdagsdisco</li>
                    </ul>
                  </div>
                </Card.Text>
                <div className="text-center p-2">
                  <Button
                    className="fs-3"
                    style={{
                      backgroundColor: '#F5CC0E',
                      height: '3rem',
                      borderStyle: 'none',
                    }}
                  >
                    Kids club
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResTips;
