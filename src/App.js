import React from "react";
import "./App.css";
import { Home } from "../src/Component/Home.jsx";
import { About } from "../src/Component/About.jsx";
import { Navigation } from "./Component/Nav.jsx";
import { Movies } from "./Component/Movies";
import { Route } from "react-router-dom";
import { Trailer } from "./Component/Trailer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route exact path="/movies" component={Movies} />
      <Route path="/about" component={About} />
      <Route path="/movies/:id" component={Trailer} />
    </div>
  );
}

export default App;
