import React from "react";
import HomePage from "./homeContainer";
import popularMovies from "./popularMovies";
import Header from "../components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <div>
        <Router>
          <Switch>
            <div>
              <Header />
              <Route path="/" exact component={HomePage} />
              <Route path="/movies" exact component={popularMovies} />
            </div>
          </Switch>
        </Router>
      </div>
    </div>
  );
}
