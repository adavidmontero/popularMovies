import React from 'react';
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {

    const { id, title, poster_path } = movie;

    return ( 
        <Link
            to={ `/movies/${id}` }
        >
            <div className="col mb-3">
                    <img 
                        src={ `https://image.tmdb.org/t/p/w500${poster_path}` } 
                        className="img-fluid border border-secondary" 
                        alt={`${title}'s poster`}
                        style={{ cursor: 'pointer' }}
                    />
            </div>
        </Link>
     );
}
 
export default Movie;