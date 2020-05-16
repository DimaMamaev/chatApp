import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Chat } from "./components/Chat/Chat";
import { Join } from "./components/Join/Join";
import ParticlesBg from "particles-bg";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
      </Switch>
      <ParticlesBg type="circle" bg={true} />
    </BrowserRouter>
  );
};

export default App;
