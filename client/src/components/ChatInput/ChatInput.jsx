import React from "react";

export const ChatInput = ({ sendMessage, message, setMessage }) => (
  <input
    type="text"
    value={message}
    onChange={(event) => setMessage(event.target.value)}
    onKeyPress={(event) => (event.key === "Enter" ? sendMessage(event) : null)}
    className="form-control"
    placeholder="type & send"
  />
);
