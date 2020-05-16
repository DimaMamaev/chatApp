import React from "react";
import { Link } from "react-router-dom";
import "./ChatBar.css";

export const ChatBar = ({ room }) => (
  <section className="chat__bar">
    <div className="bar__left">
      <i className="fas fa-plug" /> <h2 className="h3">Chat room: {room}</h2>
    </div>
    <div className="bar__right">
      <Link to="/">
        <i className="fas fa-times-circle" />
      </Link>
    </div>
  </section>
);
