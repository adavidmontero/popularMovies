import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Movie = ({ movie }) => {

    const { id, title, poster_path } = movie;

    return ( 
        <div className="col mb-3">
            <Link
                to={ `/movies/${id}` }
            >
                <img 
                    className="img-fluid border border-secondary image-clickable" 
                    src={ `https://image.tmdb.org/t/p/w500${poster_path}` } 
                    alt={`${title}'s poster`}
                    loading="lazy"
                />
            </Link>
        </div>
     );
}

Movie.propTypes = {
    movie: PropTypes.object.isRequired
};
 
export default Movie;