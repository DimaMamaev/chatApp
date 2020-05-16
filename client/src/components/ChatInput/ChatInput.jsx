import React from "react";
import "./ChatInput.css";
export const ChatInput = ({ sendMessage, message, setMessage }) => (
  <form className="chat_form">
    <input
      type="text"
      className="form-control"
      placeholder="Type your message..."
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <button
      className="btn btn-primary ml-2"
      onClick={(event) => sendMessage(event)}
    >
      Send message!
    </button>
  </form>
);
