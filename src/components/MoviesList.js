import React from 'react';
import { Link } from 'react-router-dom';


export default function MoviesList({ movies }) {
    //rendering movies in the DOM
    const movieRender = Object.keys(movies).map(movieID => (
        <li key={movieID}><Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link></li>
    ))

    return (
        <ul>{movieRender}</ul>
    )
}

