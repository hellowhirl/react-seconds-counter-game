import React from "react";

const MessageBox = ({ message }) => {
  return (
    <React.Fragment>
      <div style={{ height: 100 }} className="row justify-content-center">
        <div className="gameMessage">{message}</div>
      </div>
    </React.Fragment>
  );
};

export default MessageBox;
