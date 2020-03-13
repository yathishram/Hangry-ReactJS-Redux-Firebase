import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const RecipeDetails = props => {
  const { recipe, auth } = props;
  if (!auth.uid) return <Redirect to="/signin"></Redirect>;
  if (recipe) {
    return (
      <div className="container recipe-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{recipe.recipeTitle}</span>
            <h5>Summary</h5>
            <p>{recipe.summary}</p>
            <h5>Ingredients</h5>
            <p>{recipe.ingredients}</p>
            <h5>Steps</h5>
            <p>{recipe.procedure}</p>
            <div className="card-action grey lighten-4 grey-text">
              <div>Created at {moment(recipe.createdAt.toDate()).calendar()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Loading!!!!</span>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const recipes = state.firestore.data.recipes;
  const recipe = recipes ? recipes[id] : null;
  return {
    recipe: recipe,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "recipes"
    }
  ])
)(RecipeDetails);
