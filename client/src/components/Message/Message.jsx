import React from "react";
import "./Message.css";

export const Message = ({ message: { user, text }, name }) => {
  let sentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    sentByCurrentUser = true;
  }

  return sentByCurrentUser ? (
    <section className="d-flex message">
      <p className="user__name">{trimmedName}:</p>
      <div>
        <p className="user__message">{text}</p>
      </div>
    </section>
  ) : (
    <section className="d-flex message">
      <div>
        <p className="user__message">{text}</p>
      </div>
      <p className="user__name">:{user}</p>
    </section>
  );
};
