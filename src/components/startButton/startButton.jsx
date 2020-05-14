import React from "react";

const StartButton = ({ onCountdownText, other }) => {
  return (
    <div className="row justify-content-md-center">
      <button
        className="btn btn-primary"
        onClick={() => {
          onCountdownText();
          other();
        }}
      >
        START
      </button>
    </div>
  );
};

export default StartButton;
