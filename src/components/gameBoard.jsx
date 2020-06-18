import React from "react";

const GameBoard = ({ time, addTimerClasses }) => {
  return (
    <React.Fragment>
      <div className={addTimerClasses()}>{time}</div>
    </React.Fragment>
  );
};

export default GameBoard;
