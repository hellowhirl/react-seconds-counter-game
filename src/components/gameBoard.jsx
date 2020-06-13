import React from "react";

const GameBoard = ({
  time,
  gameOn,
  secondsCountingStarted,
  clockStop,
  addTimerClasses,
}) => {
  return (
    <React.Fragment>
      <div className={addTimerClasses()}>{time}</div>
      <div className="row justify-content-center">
        {gameOn && (
          <button
            className="btn btn-primary mt-3 mb-3"
            onClick={() => clockStop()}
            disabled={secondsCountingStarted ? "" : "disabled"}
          >
            STOP
          </button>
        )}
      </div>
    </React.Fragment>
  );
};

export default GameBoard;
