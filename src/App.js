import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar";
import Home from "./components/landing_page/home";
import Dashboard from "./components/dashboard/Dashboard";
import About from "./components/dashboard/about";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import SearchRecipe from "./components/search/searchComponent";
import CreateRecipe from "./components/recipe/createRecipe";
import RecipeDetails from "./components/recipe/recipeDetails";
import SearchDetails from "./components/search/searchDetails";

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
            <Route path="/search" component={SearchRecipe} />
            <Route exact path="/recipe" component={CreateRecipe} />
            <Route path="/recipe/:id" component={RecipeDetails} />
            <Route path="/api/recipe/:id" component={SearchDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
