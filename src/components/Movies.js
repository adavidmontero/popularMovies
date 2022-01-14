import React from 'react';
import Movie from './Movie';

const Movies = ({ movies }) => {

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            {
                movies.map(movie => (
                    <Movie 
                        key = { movie.id }
                        movie = { movie }
                    />
                ))
            }
        </div>
    );
}
 
export default Movies;