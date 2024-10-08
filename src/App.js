import React, { useState } from "react";
import "./App.css";

const messages = [
  "You're doing great!",
  "You're halfway there!",
  "You're awesome!",
  "You did it!",
  "You're a pro!",
];

function App() {
  const [step, setStep] = useState(1);
  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 5) setStep(step + 1);
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}> 1</div>
        <div className={`${step >= 2 ? "active" : ""}`}> 2</div>
        <div className={`${step >= 3 ? "active" : ""}`}> 3</div>
        <div className={`${step >= 4 ? "active" : ""}`}> 4</div>
        <div className={`${step >= 5 ? "active" : ""}`}> 5</div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
