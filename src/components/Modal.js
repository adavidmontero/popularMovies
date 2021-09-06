import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Modal = ({ idMovie, setShowModal }) => {

    const [movieSelected, setMovieSelected] = useState({});

    const closeModal = () => {
        setShowModal(false);
    }

    useEffect(() => {
        const consultAPI = async () => {
            const url = `https://api.themoviedb.org/3/movie/${idMovie}?api_key=187a4dd9fcb912ed459990053e6266b8`;
        
            const results = await axios.get(url);

            setMovieSelected(results.data);

            document.querySelector('#spinner').setAttribute('class', 'd-none justify-content-center align-items-center');
            document.querySelector('#modal-content').setAttribute('class', 'container d-block');
        };
      
        consultAPI();
    }, [idMovie]);

    const { title, tagline, poster_path, production_companies, overview, genres, vote_average, release_date, runtime } = movieSelected;

    return ( 
        <div className="modal fade show d-block">
            <div className="modal-dialog modal-dialog-scrollable modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Información adicional de esta película:</h5>
                        <button type="button" onClick={ closeModal } className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" className="text-white">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex justify-content-center align-items-center" id="spinner">
                            <div className="spinner-border text-light" role="status">
                                <span className="visually-hidden"></span>
                            </div>
                        </div>
                        <div className="container d-none" id="modal-content">
                            <div className="row">
                                <div className="col-md-4">
                                    <img 
                                        className="img-fluid rounded mx-auto d-block border border-secondary" 
                                        src={ `https://image.tmdb.org/t/p/w300${poster_path}` } 
                                        alt={`${title}'s poster`}  />
                                </div>
                                <div className="col-md-8">
                                    <ul className="list-group">
                                        <li className="border-0 list-group-item">
                                            <span className="font-weight-bold">Título: </span>{ title }
                                        </li>
                                        <li className="border-0 list-group-item">
                                            <span className="font-weight-bold">Eslogan: </span>
                                            { tagline === '' ? '-' : tagline }
                                        </li>
                                        <li className="border-0 list-group-item">
                                            <span className="font-weight-bold">Productora(s): </span>
                                            { production_companies ? production_companies.map(pc => pc.name).join(', ') : ''}
                                        </li>
                                        <li className="border-0 list-group-item">
                                            <span className="font-weight-bold">Género(s): </span>
                                            { genres ? genres.map(genre => genre.name).join(', ') : ''}
                                        </li>
                                        <li className="border-0 list-group-item">
                                            <span className="font-weight-bold">Sinopsis: </span>{ overview }
                                        </li>
                                        <li className="border-0 list-group-item">
                                            <span className="font-weight-bold">Duración: </span>{ runtime } minutos
                                        </li>
                                        <li className="border-0 list-group-item">
                                            <span className="font-weight-bold">Fecha de lanzamiento: </span>{ release_date }
                                        </li>
                                        <li className="border-0 list-group-item">
                                            <span className="font-weight-bold">Puntuación: </span>{ vote_average }
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={ closeModal }>Close</button>
                    </div> */}
                </div>
            </div>
        </div>
     );
}
 
export default Modal;