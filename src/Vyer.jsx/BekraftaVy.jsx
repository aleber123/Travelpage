import React, { useState } from "react";
import "./BetalaVy.css";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faMobile, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

const BetalaVy = ({ onButtonClick }) => {
  const [betalningsmetod, setBetalningsmetod] = useState("");

  // Funktion för att hantera ändring av betalningsmetod
  const handleBetalningsmetodChange = (event) => {
    setBetalningsmetod(event.target.value);
  };

    // Funktion för att hantera klick på "Betala" knappen
  const handleBokaClick = () => {
    // Här kan du använda 'betalningsmetod' för att utföra den valda betalningsmetoden.
    if (betalningsmetod === "creditkort") {
    } else if (betalningsmetod === "swish") {
    } else if (betalningsmetod === "påplats") {
    }

    // Anropa den funktion som skickas som 'onButtonClick' för att gå vidare till nästa vy
    onButtonClick("pagethree");
  };

  return (
    <main className="pt5 black-80 center" style={{ maxWidth: "40%", maxHeight: "30%", margin: "auto" }}>
      <div>
        <h2>Betala bokning</h2>
        <p style={{ color: "#C0C0C0" }}>Bokningen kan alltid ändras efteråt.</p>
      </div>
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
        <p><strong>Välj betalningsmetod:</strong></p>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="payment-method"
            name="payment-method"
            value={betalningsmetod}
            onChange={handleBetalningsmetodChange}
          >
            <FormControlLabel
              value="creditkort"
              control={<Radio />}
              label={
                <>
                  <FontAwesomeIcon icon={faCreditCard} /> Kreditkort
                </>
              }
            />
            <FormControlLabel
              value="swish"
              control={<Radio />}
              label={
                <>
                  <FontAwesomeIcon icon={faMobile} /> Swish
                </>
              }
            />
            <FormControlLabel
              value="påplats"
              control={<Radio />}
              label={
                <>
                  <FontAwesomeIcon icon={faMoneyBill} /> Betala på plats
                </>
              }
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div>
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
          onClick={handleBokaClick}
        >
          Betala
        </button>
      </div>
    </main>
  );
};

export default BetalaVy;
