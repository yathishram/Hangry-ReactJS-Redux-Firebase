import React from "react";

const SearchSummary = ({ resultData }) => {
  return (
    <div className="card grey darken-3 z-depth-0 search-summary ">
      <div className="card-image">
        <img src={`https://spoonacular.com/recipeImages/${resultData.image}`} alt="" style={{ height: 400, width: 400 }} />
      </div>
      <div className="card-content white-text">
        <span className="card-title left-align">{resultData.title}</span>
        <p>Servings: {resultData.servings}</p>
        <p>Time to prepare: {resultData.readyInMinutes} Mins</p>
      </div>
    </div>
  );
};

export default SearchSummary;
