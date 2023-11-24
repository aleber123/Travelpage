import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {Card} from 'react-bootstrap'


export const RestErbjud= () => {
   // useEmblaCarousel är en hook som tillåter funktioner för presentera bilder ett bildbiblotel
    const [emblaRef] = useEmblaCarousel()
  //  Här sparas funktioen ner i variabeln emblaRef, som senare används som referens på rad 11 
    return (
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide"> 
            <Card style={{ width: '20rem' }}>
               {/* Här finns korten som presenteras i embla karusellen */}
                <Card.Img variant="top" src="https://img.freepik.com/free-photo/young-happy-woman-having-fun-while-eating-dinner-communicating-with-friends-dining-table_637285-3342.jpg?w=1800&t=st=1696959460~exp=1696960060~hmac=6f5cc392da3289ea9d38b07213cd596d4700dfbf168e456f3600624bbc2c91f9" />
                <Card.Body>
                    <Card.Title className='text-center fs-3' >Hel pension</Card.Title>
                    <Card.Text className='text-center p-1 fs-4'>
                      <div className="d-flex justify-content-center">
                          <ul style={{ listStyle: 'none' }}>
                              <li>Frukost buffe</li>
                              <li>Lunch</li>
                              <li>Gratis glassbar</li>
                              <li>After Beach</li>
                              <li>Middag</li>
                          </ul>
                      </div>
                    </Card.Text>
                </Card.Body>
            </Card>
          </div>
          <div className="embla__slide">
             <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://img.freepik.com/free-photo/cup-hot-cappuccino-chocolate-croissant-with-breakfast_140725-9515.jpg?w=1800&t=st=1696959411~exp=1696960011~hmac=480a6650a7d263f91d6c04969963afd6ed4ab3f5ebb30bf8e776dba68519354b" />
                <Card.Body>
                    <Card.Title className='text-center fs-3' >Halv pension</Card.Title>
                    <Card.Text className='text-center p-3 fs-4'>
                    <div className="d-flex justify-content-center">
                        <ul style={{ listStyle: 'none' }}>
                            <li>Frukost</li>
                            <li>Lunch</li>
                            <li>Middag</li>
                        </ul>
                     </div>   
                    </Card.Text>            
                </Card.Body>
            </Card>
          </div>
          <div className="embla__slide">
        <Card style={{ width: '20rem' }}>
             <Card.Img variant="top" src="https://img.freepik.com/free-photo/hotel-waitress-serving-food_53876-15221.jpg?w=1800&t=st=1696959367~exp=1696959967~hmac=ff0ad25b46385f2abc212cdb0d057297c297199cae16fa9fd12aed8d323d56c0" />
             <Card.Body>
                <Card.Title className='text-center fs-3'>Frukost</Card.Title>
                <Card.Text className='text-center p-3 fs-4'>
               <p>Börja dagen med vår stora frukostbuffé, här finns allt från nyttiga smoothies till belgiska våfflor</p>
                </Card.Text>
            </Card.Body>
        </Card>
          </div>
        </div>
      </div>
    )
  }
  export default RestErbjud;