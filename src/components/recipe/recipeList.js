import React from "react";
import { Link } from "react-router-dom";

import RecipeSummary from "./recipeSummary";

const RecipeList = () => {
  return (
    <div className="project-list">
      <RecipeSummary />
    </div>
  );
};

export default RecipeList;
