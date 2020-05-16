import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "./ChatMessages.css";
import { Message } from "../Message/Message";
export const ChatMessages = ({ messages, name }) => (
  <section className="message__box">
    <ScrollToBottom>
      {messages.map((message, index) => (
        <div key={index}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  </section>
);
