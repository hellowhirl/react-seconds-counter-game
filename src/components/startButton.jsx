import React from "react";

const StartButton = ({ onStartButtonClick, gameOn }) => {
  return (
    <div className="row startContainer justify-content-center">
      <button
        className="btn btn-primary"
        onClick={() => {
          onStartButtonClick();
        }}
        disabled={gameOn ? "disabled" : ""}
      >
        START
      </button>
    </div>
  );
};

export default StartButton;
