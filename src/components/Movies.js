import React from 'react';
import Movie from './Movie';

const Movies = ({ movies, setShowModal, setIdMovie }) => {

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {
                movies.map(movie => (
                    <Movie 
                        key = { movie.id }
                        movie = { movie }
                        setShowModal = { setShowModal }
                        setIdMovie = { setIdMovie }
                    />
                ))
            }
        </div>
    );
}
 
export default Movies;