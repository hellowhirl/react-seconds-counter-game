import React from "react";

const StartButton = ({ onCountdownText, gameStarted }) => {
  return (
    <div className="row justify-content-md-center">
      <button
        className="btn btn-primary"
        onClick={() => {
          onCountdownText();
          // other();
        }}
        // disabled={gameStarted ? "disabled" : ""}
      >
        START
      </button>
    </div>
  );
};

export default StartButton;
