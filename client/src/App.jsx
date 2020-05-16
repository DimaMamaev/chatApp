import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Chat } from "./components/Chat/Chat";
import { Join } from "./components/Join/Join";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
