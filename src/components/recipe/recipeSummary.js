import React from "react";
import moment from "moment";

const RecipeSummary = ({ recipeData }) => {
  return (
    <div className="card grey darken-3 z-depth-0 recipe-summary ">
      <div className="card-content white-text ">
        <span className="card-title left-align">Recipe : {recipeData.recipeTitle}</span>
        <p className="justify">{recipeData.summary}</p>
        <p className="grey-text">{moment(recipeData.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  );
};

export default RecipeSummary;
