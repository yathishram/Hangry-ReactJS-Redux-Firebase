import React, { Component } from "react";
import axios from "axios";

import IngredientsList from "./ingredientsList";
import SearchInstructions from "./searchInstructions";

class SearchDetails extends Component {
  state = {
    ingredients: [],
    instructions: "",
    title: "",
    sourceurl: "",
    image: ""
  };

  componentDidMount() {
    axios
      .get(`https://api.spoonacular.com/recipes/${this.props.match.params.id}/information?includeNutrition=false&apiKey=f5f0ee78de1c4476b9426d53027b5eea`)
      .then(data => {
        console.log(data);
        console.log(data.data.instructions);
        console.log(data.data.extendedIngredients);
        this.setState({
          ingredients: data.data.extendedIngredients,
          instructions: data.data.instructions,
          title: data.data.title,
          sourceurl: data.data.sourceUrl,
          image: data.data.image
        });
      });
    console.log(this.state);
  }

  render() {
    if (this.state.ingredients && this.state.instructions) {
      return (
        <div className="container search-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{this.state.title}</span>
              <img src={this.state.image} alt="" style={{ height: 400, width: 400 }} />
              <hr />
              <h5>Ingredients</h5>
              <IngredientsList ingredients={this.state.ingredients} />
              <hr />
              <h5>Instructions</h5>
              <SearchInstructions instruction={this.state.instructions} />
              <div className="card-action grey lighten-4 grey-text">
                <div>{this.state.sourceurl}</div>
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
  }
}
export default SearchDetails;
