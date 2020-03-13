const initState = {
  recipes: []
};

const recipeReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_RECIPE_SUCCESS":
      console.log("created recipe", action.recipe);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create recipe error", action.err);
      return state;
    case "GETTING_DATA_SUCCESS":
      console.log("got the data", action.recipe);
      return {
        ...state
      };
    case "GETTING_DATA_ERROR":
      console.log("getting recipe error", action.err);
      return state;
    default:
      return state;
  }
};

export default recipeReducer;
