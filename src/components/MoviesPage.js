import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MovieShow from "./MovieShow";
import MoviesList from "./MoviesList";

function MoviesPage({ movies }) {
  //setting up router match
  const match = useRouteMatch();


  return (
    <div>
      <MoviesList movies={movies}/>
      <Route exact path={match.url}>
        <h3>Select Movie</h3>
      </Route>
      <Route path={`${match.url}/:movieId`}>
        <MovieShow movies={movies}/>
      </Route>
    </div>
  );
}
export default MoviesPage;
