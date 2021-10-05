import React from "react";

function GameBoard(props) {
  const calculateDifference = (currentTime) => {
    let difference = (currentTime - 10).toFixed(2);

    return Math.abs(difference);
  };

  return (
    <React.Fragment>
      <div>
        <div className={props.addTimerClasses()}>{props.time}</div>
        <div className={props.addDifferenceClasses()}>
          <bold>{calculateDifference(props.time)}</bold>
        </div>
        <p className={props.addDifferenceClasses()}>seconds away</p>
      </div>
    </React.Fragment>
  );
}

// const GameBoard = ({ time, addTimerClasses, addDifferenceClasses }) => {

export default GameBoard;
