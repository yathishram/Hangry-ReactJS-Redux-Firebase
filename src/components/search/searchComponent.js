import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import SearchList from "./searchList";

export class SearchRecipe extends Component {
  state = {
    query: "",
    results: []
  };
  handleSubmit = e => {
    e.preventDefault();
    axios.get(`https://api.spoonacular.com/recipes/search?query=${this.state.query}&number=10&apiKey=f5f0ee78de1c4476b9426d53027b5eea`).then(data => {
      console.log(data);
      console.log(data.data.results);
      this.setState({
        results: data.data.results
      });
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin"></Redirect>;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Search</h5>
          <div className="input-field">
            <label htmlFor="query">Recipe Name</label>
            <input type="text" id="query" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Search</button>
          </div>
        </form>
        <div className="container">
          <div className="row">
            <div className="col s8">
              <SearchList results={this.state.results} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(SearchRecipe);
