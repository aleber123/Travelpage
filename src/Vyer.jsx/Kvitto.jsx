import React from "react";
import "./Kvitto.css";

const Kvitto = ({ onButtonClick }) => {
  return (
    <main className="pt5 black-80" style={{ maxWidth: "40%", maxHeight: "30%", margin: "auto" }}>
      <h2>Kvitto</h2>
      <p style={{ color: "#C0C0C0" }}>Här är din kvittoutskrift:</p>
      <div className="mv3">
        <p><strong>Namn på hotel:</strong> Exempelhotellet</p>
      </div>
      <div className="mv3">
        <p><strong>Adress till hotel:</strong> Exempelgatan 123, Stad</p>
      </div>
      <div className="mv3">
        <p><strong>Incheckningsdatum:</strong> 2023-10-13</p>
      </div>
      <div className="mv3">
        <p><strong>Antal nätter:</strong> 3</p>
      </div>
      <div className="mv3">
        <p><strong>Antal personer:</strong> 2</p>
      </div>
      <div className="mv3">
        <p><strong>Antal rum:</strong> 1</p>
      </div>
      <div className="mv3">
        <p><strong>Vald betalningsmetod:</strong> Kreditkort</p>
      </div>
      <div className="mv3">
        <p><strong>Totalt belopp betalt:</strong> 1500 SEK</p>
      </div>
      <div>
         {/* Knapp för att skriva ut kvittot och gå vidare till nästa vy */}
        <button
          className="f6 grow br2 ph3 pv2 mb2 dib white"
          style={{
            borderStyle: "none",
            width: "100%",
            backgroundColor: "#0E4778",
            borderRadius: "15px",
            color: "#FFFFFF",
            padding: "10px",
          }}
          onClick={() => onButtonClick("pagethree")}
        >
          Skriv ut kvitto
        </button>
      </div>
    </main>
  );
};

export default Kvitto;
