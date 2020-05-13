import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Join</h1>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Room"
          value={room}
          onChange={(event) => setRoom(event.target.value)}
        />
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="btn btn-primary" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};
