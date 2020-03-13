import React from "react";
import { Link } from "react-router-dom";

import RecipeSummary from "./recipeSummary";

const RecipeList = ({ recipes }) => {
  return (
    <div className="project-list">
      {recipes &&
        recipes.map(recipe => {
          return (
            <Link to={"/recipe/" + recipe.id} key={recipe.id}>
              <RecipeSummary recipeData={recipe} />
            </Link>
          );
        })}
    </div>
  );
};

export default RecipeList;
