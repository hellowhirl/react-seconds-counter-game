import React from "react";

const MessageBox = ({ message }) => {
  return (
    <React.Fragment>
      <div
        style={{ height: 32 }}
        className="row gameMessage justify-content-center"
      >
        {message}
      </div>
    </React.Fragment>
  );
};

export default MessageBox;
