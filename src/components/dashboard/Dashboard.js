import React from "react";
import RecipeList from "../recipe/recipeList";

const Dashboard = () => {
  return (
    <div className="center container">
      <div className="row">
        <div className="col s12 m6">
          <RecipeList />
        </div>
        <div className="col s12 m5 offset-m1"></div>
      </div>
    </div>
  );
};

export default Dashboard;
