import React from "react";

const StartButton = ({ onStartButtonClick, gameStarted }) => {
  return (
    <div className="row justify-content-md-center">
      <button
        className="btn btn-primary"
        onClick={() => {
          onStartButtonClick();
        }}
        disabled={gameStarted ? "disabled" : ""}
      >
        START
      </button>
    </div>
  );
};

export default StartButton;
