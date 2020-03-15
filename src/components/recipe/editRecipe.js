import React, { Component } from "react";
import { connect } from "react-redux";
import { editRecipe } from "../../actions/recipeActions";
import { Redirect } from "react-router-dom";

export class EditRecipe extends Component {
  state = {
    ingredients: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.editRecipe(this.state, this.props.match.params.id);
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
          <h5 className="grey-text text-darken-3">Edit your Ingredients</h5>
          <div className="input-field">
            <label htmlFor="ingredients">List the Ingredients</label>
            <textarea className="materialize-textarea" id="ingredients" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Update</button>
          </div>
        </form>
        <div>Hey! Sorry that you can edit only one thing on the recipe! Maybe in the future we shall add the whole thing!</div>
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
    editRecipe: (recipe, id) => dispatch(editRecipe(recipe, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipe);
