import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RestErbjud from './RestErbjud';

 // Restaurnaginformation och styling. 

export const TavernaGusto = () => {
  return (
    <div>
      <Container
        fluid
        className="search-start"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/wine-glass_1203-3447.jpg?w=1480&t=st=1697565536~exp=1697566136~hmac=3d2d923bdd72b06dc3f613e73691b2ae3cbb03705ead650249e96934b4305fdc")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          minHeight: '45vh',
          maxHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      ></Container>
      <div className="mx-auto">
        <h1
          className="text-center p-3 fs-1"
          style={{
            marginTop: '-3.1rem',
            position: 'relative',
            backgroundColor: '#FFFFFF',
            borderRadius: '40px',
            height: '7rem',
          }}
        >
          Om oss
        </h1>
        <p className="p-2">
          Taverna Gusto välkomnar gäster med en varm och inbjudande atmosfär.
          Inredningen kombinerar rustika element med moderna accenter för att
          skapa en hemtrevlig känsla. Belysningen är dämpad och skapar en
          avslappnad atmosfär, perfekt för en trevlig måltid med familj eller
          vänner. Taverna Gusto strävar efter att erbjuda en genuin upplevelse
        </p>
      </div>
      <div>
        <Row className="text-center">
          <Col>
            <i className="bi bi-telephone fs-3">
              <p className="fs-5">Ring oss</p>
            </i>{' '}
          </Col>
          <Col>
            <i className="bi bi-envelope fs-3">
              <p className="fs-5">Mail oss</p>
            </i>
          </Col>
          <Col>
            <i className="bi bi-globe fs-3">
              <p className="fs-5">Besök oss</p>
            </i>
          </Col>
        </Row>
      </div>
      <hr></hr>
      <div className="text-center">
        <h2>Allt du behöver </h2>
        <p>finns hos oss</p>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <p>Välj mellan olika matparket</p>
          </li>
          <li>
            <p>Mat under 12 äter gratis</p>
          </li>
          <li>
            {' '}
            <p>Anpassad kost efter önskemål</p>
          </li>
        </ul>
      </div>
      <RestErbjud />

      <h3 className="text-center p-3">Öppettider</h3>
      <div
        className="d-flex justify-content-center"
        style={{ backgroundColor: '#0E4778' }}
      >
        <table style={{ backgroundColor: '#0E4778', color: '#FFFFFF' }}>
          <tr>
            <td>
              <p>Frukost</p>
            </td>
            <td>
              <p className="p-3">07-10</p>
            </td>
          </tr>
          <tr>
            <td>
              <p >Lunch</p>
            </td>
            <td>
              <p className="p-3">11-14</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>After Beach</p>
            </td>
            <td>
              <p className="p-3"> 14-16</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Middag</p>
            </td>
            <td>
              <p className="p-3">17-22</p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default TavernaGusto;
