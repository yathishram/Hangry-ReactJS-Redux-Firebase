import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar";
import Home from "./components/landing_page/home";
import Dashboard from "./components/dashboard/Dashboard";
import About from "./components/dashboard/about";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Search from "./components/search/searchComponent";
import CreateRecipe from "./components/recipe/createRecipe";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/about" component={About} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/search" component={Search} />
            <Route path="/recipe" component={CreateRecipe} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
