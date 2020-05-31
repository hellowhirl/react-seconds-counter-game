import React from "react";

const ResetButton = ({ resetGame, gameOver }) => {
  return (
    <div className="row justify-content-center">
      {gameOver ? (
        <button className="btn btn-primary" onClick={() => resetGame()}>
          RESET
        </button>
      ) : null}
    </div>
  );
};

export default ResetButton;
