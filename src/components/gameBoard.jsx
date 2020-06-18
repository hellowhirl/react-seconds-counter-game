import React from "react";

const GameBoard = ({
  time,
  gameOn,
  secondsCountingStarted,
  clockStop,
  addTimerClasses,
  gameOver,
  resetGame,
}) => {
  return (
    <React.Fragment>
      <div className={addTimerClasses()}>{time}</div>
      <div className="row justify-content-center">
        {gameOn && !gameOver && (
          <button
            className="btn btn-primary mt-3 mb-3"
            onClick={() => clockStop()}
            disabled={secondsCountingStarted ? "" : "disabled"}
          >
            STOP
          </button>
        )}
      </div>
      <div className="row justify-content-center">
        {gameOver ? (
          <button
            className="btn btn-primary mt-3 mb-3"
            onClick={() => resetGame()}
          >
            RESET
          </button>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default GameBoard;
