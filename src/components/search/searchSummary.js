import React from "react";

const SearchSummary = ({ resultData }) => {
  return (
    <div className="card z-depth-0 search-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title left-align">{resultData.title}</span>
        <img src={`https://spoonacular.com/recipeImages/${resultData.image}`} alt="" style={{ height: 300, width: 250 }} />
        <p>Servings: {resultData.servings}</p>
        <p>Time to prepare: {resultData.readyInMinutes} Mins</p>
      </div>
    </div>
  );
};

export default SearchSummary;
