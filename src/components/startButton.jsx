import React from "react";

const StartButton = ({ onCountdownText }) => {
  return <button onClick={() => onCountdownText()}>START</button>;
};

export default StartButton;
