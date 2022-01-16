import React from 'react';
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {

    const { id, title, poster_path } = movie;

    return ( 
        <div className="col mb-3">
            <Link
                to={ `/movies/${id}` }
            >
                <img 
                    src={ `https://image.tmdb.org/t/p/w500${poster_path}` } 
                    className="img-fluid border border-secondary" 
                    alt={`${title}'s poster`}
                    style={{ cursor: 'pointer' }}
                    loading="lazy"
                />
            </Link>
        </div>
     );
}
 
export default Movie;