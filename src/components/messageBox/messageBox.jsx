import React from "react";

const MessageBox = ({ message }) => {
  return (
    <React.Fragment>
      <div className="row justify-content-md-center">{message}</div>
    </React.Fragment>
  );
};

export default MessageBox;
