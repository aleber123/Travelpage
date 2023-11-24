import React from "react";
import "./MultiStepProgressBar.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const MultiStepProgressBar = ({ page, onPageNumberClick }) => {
  // Variabel för att lagra procentandelen av steg som är slutförda
  var stepPercentage = 0;
  // Beräkna procentandelen baserat på aktuell sida
  if (page === "pageone") {
    stepPercentage = 33.33;
  } else if (page === "pagetwo") {
    stepPercentage = 66.66;
  } else if (page === "pagethree") {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (
    <ProgressBar percent={stepPercentage}>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("pageone")} // Klickhanterare för att gå till sida ett
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("pagetwo")} // Klickhanterare för att gå till sida två
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("pagethree")} // Klickhanterare för att gå till sida tre
          >
            {index + 1}
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default MultiStepProgressBar;
