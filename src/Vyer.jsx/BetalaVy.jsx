import React from 'react';
import './BetalaVy.css';

//Bekräfta bokning
const BetalaVy = ({ onButtonClick }) => {
  return (
    <main
      className="pt5 black-80 center"
      style={{ maxWidth: '40%', maxHeight: '30%', margin: 'auto' }}
    >
      <div>
        <h2>Bekräfta bokning</h2>
        <p style={{ color: '#C0C0C0' }}>Du kan altid ändra din bokning</p>
      </div>
      <div className="mv3">
        <p>
          <strong>Namn på hotel:</strong> Exempelhotellet
        </p>
      </div>
      <div className="mv3">
        <p>
          <strong>Adress till hotel:</strong> Exempelgatan 123, Stad
        </p>
      </div>
      <div className="mv3">
        <p>
          <strong>Incheckningsdatum:</strong> 2023-10-13
        </p>
      </div>
      <div className="mv3">
        <p>
          <strong>Antal nätter:</strong> 3
        </p>
      </div>
      <div className="mv3">
        <p>
          <strong>Antal personer:</strong> 2
        </p>
      </div>
      <div className="mv3">
        <p>
          <strong>Antal rum:</strong> 1
        </p>
      </div>
       {/* Knapp för att utföra bokningen och gå vidare till nästa vy */}
      <div>
        <input
          className="f6 grow br2 ph3 pv2 mb2 dib white"
          style={{
            borderStyle: 'none',
            width: '100%',
            backgroundColor: '#0E4778',
            borderRadius: '15px',
            color: '#FFFFFF',
            padding: '10px',
          }}
          type="submit"
          value="Boka"
          onClick={() => onButtonClick('pagetwo')}
        />
      </div>
    </main>
  );
};

export default BetalaVy;
