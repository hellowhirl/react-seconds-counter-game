import React from "react";

const MessageBox = ({
  message,
  secondsCountingStarted,
  time,
  counter,
  gameOn,
  gameOver,
}) => {
  return (
    <React.Fragment>
      {!gameOver && (
        <div style={{ height: 100 }} className="row justify-content-center">
          <div className="gameMessage">{message}</div>
        </div>
      )}

      {!secondsCountingStarted && time >= 9.5 && time <= 10.5 && (
        <div style={{ height: 100 }} className="row justify-content-center">
          <div className="messageSuccess">Excellent!</div>
        </div>
      )}
      {counter.length === 1 && gameOn && !secondsCountingStarted && time < 9.5 && (
        <div style={{ height: 100 }} className="row justify-content-center">
          <div className="messageFailure">Too Quick</div>
        </div>
      )}
      {!secondsCountingStarted && time > 10.5 && (
        <div style={{ height: 100 }} className="row justify-content-center">
          <div className="messageFailure">Too Slow</div>
        </div>
      )}
    </React.Fragment>
  );
};

export default MessageBox;
