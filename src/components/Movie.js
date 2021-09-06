import React from 'react';

const Movie = ({ movie, setShowModal, setIdMovie }) => {

    const { title, poster_path } = movie;
    
    const openModal = () => {
        setShowModal(true);
        setIdMovie(movie.id);
    };

    return ( 
        <div className="col mb-3">
            <div className="card h-100">
                <img src={ `https://image.tmdb.org/t/p/w500${poster_path}` } className="card-top-img" alt={`${title}'s poster`} />
                <div className="card-body">
                    <h5 className="card-title text-center text-truncate">{ title }</h5>
                    <button 
                        type="button" 
                        className="btn btn-light btn-block"
                        onClick={ openModal }
                    >
                    Ver Información</button>
                </div>
            </div>
        </div>
     );
}
 
export default Movie;