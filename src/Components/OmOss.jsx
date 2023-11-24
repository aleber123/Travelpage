import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const OmOss = () => (
  
  <div>
        {/* presenterar ett foto med en margin för att låga kommande element lägga sig över */}
    <div className="d-flex justify-content-center ">
      <Image
    style={{ 
      width: '100%',
      margin: '-0.3rem',
   }}
        src="https://img.freepik.com/free-photo/close-up-hands-holding-small-plane_23-2149080805.jpg?w=1800&t=st=1696759695~exp=1696760295~hmac=03fa99c2e77f059a9d8d26ec459e9f88af19121eb28e3e94980e108142bdbc59"
        fluid
      />
    </div>
      {/* detta element innehåller en rubruk, men minus margin för att lägga sig över bilder  */}
    <h1 className="text-center p-3 fs-1 " style={{ 
      marginTop: '-3.1rem',
      position:'relative', 
      backgroundColor:'#FFFFFF',
      borderRadius:'40px',
      height:'7rem',
      color:'#0E4778',
      }} >Om oss</h1>
         {/* kommande container beskriver kort företaget */}
    <Container className="p-3">
      <p>
        Vi är familjens val för bokning av det perfekta hotellet för er
        semester. Vi arbetar med noga utvalda hotell i 5 länder, vårt nära
        sammarbete med hotellen ger oss möjlighet att skräddar sy er vistelse
        efter era önskemål.
      </p>
    </Container>
    <hr></hr>
    <h2 className="text-center strong" style={{ color: '#0E4778' }}>
      Vi erbjuder
    </h2>
     {/* Kommande container berkiver vad företaget erbjuder */}
    <Container className="p-5">
      <h3 style={{ color: '#0E4778' }}>Inga bokningsavgifter</h3>
      <p>
        När du bokar en resa med oss debiteras inga extra avgifter, det pris som
        står är det pris som gäller.
      </p>
      <h3 style={{ color: '#0E4778' }}>Bekräftelse direkt</h3>
      <p>
        Vid din reservation av hotell bekräftas din bokning direkt,och
        resedetaljerna sparas på mina sidor.
      </p>
      <h3 style={{ color: '#0E4778' }}>Kundservice</h3>
      <p>
        För att du ska känna dig trygg och njuta av din semester finns våra
        medarbetare tillgänliga dygnet runt, via telefon, mail eller chat
      </p>
      <h3 style={{ color: '#0E4778' }}>Hållbarhet</h3>
      <p>
        Vi arbetar för att din semester ska bli så miljövänlig som möjligt. Vårt
        mål är ett hållbart levende för alla{' '}
      </p>
    </Container>
    <div
      className="d-flex justify-content-center"
      style={{ backgroundColor: '#0E4778', width: '100%' }}
    >
       {/* Följaden container innegåller kundtjänstinformation */}
      <Container>
        <Row>
          <Image src="https://img.freepik.com/free-photo/businesswoman-call-center-office_1098-984.jpg?w=1800&t=st=1696761115~exp=1696761715~hmac=5e4c7c9722c0ecd675f05a49b27576de253453824176956d634fa7e078c280d0"></Image>
        </Row>
        <Row>
          <h2 className="text-center p-3" style={{ color: '#F3F8F7' }}>
            Kundtjänst
          </h2>
        </Row>
        <Row>
          <p className="text-center" style={{ color: '#F3F8F7' }}>
            Vi finns här för er dygnet runt. tveka inte att kontakta oss
          </p>
        </Row>
        <div className="p-5">
          <Row>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="currentColor"
              className="bi bi-telephone"
              viewBox="0 0 16 16"
              style={{ color: '#F3F8F7' }}
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>
          </Row>
          <Row>
            <p className="text-center" style={{ color: '#F3F8F7' }}>
              Behöver du hjälp direkt?
            </p>
            <p className="text-center" style={{ color: '#F3F8F7' }}>
              Ring oss +465655656
            </p>
          </Row>
        </div>
        <div className="p-5">
          <Row>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="currentColor"
              className="bi bi-envelope"
              style={{ color: '#F3F8F7' }}
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
          </Row>
          <Row>
            <p className="text-center" style={{ color: '#F3F8F7' }}>
              ar du frågor som inte behöver besvaras direkt? Mail oss på:{' '}
            </p>
            <p className="text-center" style={{ color: '#F3F8F7' }}>
              Familjehotell@sverige.se
            </p>
          </Row>
        </div>
      </Container>
    </div>
  </div>
);

export default OmOss;