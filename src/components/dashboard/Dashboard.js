import React, { Component } from "react";
import RecipeList from "../recipe/recipeList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import ChefLogo from "../../media/chef.svg";

class Dashboard extends Component {
  render() {
    console.log(this.props);
    const { recipes, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin"></Redirect>;
    return (
      <div className="center container section">
        <div className="row">
          <div className="col s12 m6">
            <RecipeList recipes={recipes} />
          </div>
          <div className="col s6 center ">
            <img alt="" src={ChefLogo} style={{ height: 300, width: 600 }} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    recipes: state.firestore.ordered.recipes,
    auth: state.firebase.auth
  };
};

export default compose(connect(mapStateToProps), firestoreConnect([{ collection: "recipes" }]))(Dashboard);
