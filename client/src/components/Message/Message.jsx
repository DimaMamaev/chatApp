import React from "react";
import "./Message.css";
import ReactEmoji from "react-emoji";

export const Message = ({ message: { user, text }, name }) => {
  let sentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    sentByCurrentUser = true;
  }

  return sentByCurrentUser ? (
    <section className="d-flex message message-wrapper">
      <p className="user__message message-user">{ReactEmoji.emojify(text)}</p>
      <p className="user__name">:{trimmedName}</p>
    </section>
  ) : (
    <section className="d-flex message ">
      <p className="user__name">{user}:</p>

      <p className="user__message ">{ReactEmoji.emojify(text)}</p>
    </section>
  );
};
