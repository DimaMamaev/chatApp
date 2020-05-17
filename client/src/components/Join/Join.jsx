import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

export const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const onSubmitHandler = (event) => {
    if (!name.trim() || !room.trim()) {
      event.preventDefault();
      return alert("Chat form is invalid! Try again!");
    }
  };

  return (
    <div className="jumbotron jumbotron-fluid join">
      <div className="container join__container">
        <h1 className="join__article">Chat application!</h1>
        <section>
          <form
            onSubmit={(event) => event.preventDefault()}
            className="form-group join__form"
          >
            <label htmlFor="User_name" className="join__labels">
              Name:
            </label>

            <input
              type="text"
              className="form-control join__input"
              placeholder="Type your name"
              id="User_name"
              onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="User__room" className="join__labels">
              Chat room:
            </label>

            <input
              type="text"
              className="form-control join__input"
              placeholder="Type name of the chat room"
              id="User__room"
              onChange={(event) => setRoom(event.target.value)}
            />

            <Link
              className="join__link"
              onClick={(event) => onSubmitHandler(event)}
              to={`/chat?name=${name}&room=${room}`}
            >
              <button className="btn btn-success join__btn" type="submit">
                Sign In
              </button>
            </Link>
          </form>
        </section>
      </div>
    </div>
  );
};
