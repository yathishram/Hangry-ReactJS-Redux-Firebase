import React, { Component } from "react";
import { connect } from "react-redux";
import { createRecipe } from "../../actions/recipeActions";
import { Redirect } from "react-router-dom";

export class CreateRecipe extends Component {
  state = {
    recipeTitle: "",
    summary: "",
    ingredients: "",
    procedure: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.createRecipe(this.state);
    this.props.history.push("/dashboard");
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
          <h5 className="grey-text text-darken-3">Add your Recipe</h5>
          <div className="input-field">
            <label htmlFor="recipeTitle">Recipe Name</label>
            <input type="text" id="recipeTitle" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="summary">A small Overview</label>
            <textarea className="materialize-textarea" id="summary" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <label htmlFor="ingredients">List the Ingredients</label>
            <textarea className="materialize-textarea" id="ingredients" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <label htmlFor="procedure">Now the Recipe</label>
            <textarea className="materialize-textarea" id="procedure" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createRecipe: recipe => dispatch(createRecipe(recipe))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRecipe);
