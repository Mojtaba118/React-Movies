import React from "react";
import logo from "./logo.svg";
import Movies from "./components/movies";
import MovieItem from "./components/movieItem";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route path="/movie/:id" component={MovieItem} />
        <Route path="/" component={Movies} />
      </Switch>
    </div>
  );
}

export default App;
