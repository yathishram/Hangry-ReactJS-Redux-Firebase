import React from "react";
import moment from "moment";

const RecipeSummary = ({ recipeData }) => {
  return (
    <div className="card z-depth-0 recipe-summary ">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title left-align">Recipe : {recipeData.recipeTitle}</span>
        <p className="justify">{recipeData.summary}</p>
        <p className="grey-text">{moment(recipeData.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  );
};

export default RecipeSummary;
