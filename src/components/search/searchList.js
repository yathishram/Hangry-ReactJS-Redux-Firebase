import React from "react";
import { Link } from "react-router-dom";

import SearchSummary from "./searchSummary";

const SearchList = ({ results }) => {
  return (
    <div className="project-list">
      {results &&
        results.map(result => {
          return (
            <Link to={"/api/recipe/" + result.id} key={result.id}>
              <SearchSummary resultData={result} />
            </Link>
          );
        })}
    </div>
  );
};

export default SearchList;
