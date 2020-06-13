import React from "react";

const ResultsDisplay = ({
  secondsCountingStarted,
  time,
  counter,
  gameOn,
  gameOver,
  resetGame,
}) => {
  return (
    <React.Fragment>
      <div
        style={{ marginBottom: 20, marginTop: 10 }}
        className="row justify-content-center"
      >
        {!secondsCountingStarted && time >= 9.5 && time <= 10.5 && (
          <h3>Excellent!</h3>
        )}
        {counter.length === 1 &&
          gameOn &&
          !secondsCountingStarted &&
          time < 9.5 && <h3>Too Quick!!</h3>}
        {!secondsCountingStarted && time > 10.5 && (
          <h3>T o o _ S l o w . . .</h3>
        )}
      </div>
      <div className="row justify-content-center">
        {gameOver ? (
          <button className="btn btn-primary" onClick={() => resetGame()}>
            RESET
          </button>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default ResultsDisplay;
