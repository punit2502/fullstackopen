import React from "react";

const Message = ({ message, messageType }) => (
  <div className={`message ${messageType}`}>{message}</div>
);
export default Message;
