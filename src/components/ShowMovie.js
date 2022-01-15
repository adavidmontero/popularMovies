import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import NavBar from './NavBar';
import Trailer from './Trailer';
import Actors from './Actors';
import Images from './Images';
import Footer from './Footer';
import ArrowUp from './ArrowUp';

const ShowMovie = () => {

    let params = useParams();

    const { idMovie } = params;

    const [movieSelected, setMovieSelected] = useState({});

    useEffect(() => {
        const consultAPI = async () => {
            const url = `https://api.themoviedb.org/3/movie/${idMovie}?api_key=187a4dd9fcb912ed459990053e6266b8&language=es-ES`;
        
            const results = await axios.get(url);

            setMovieSelected(results.data);
        };
      
        consultAPI().then(() => {
            document.querySelector('#spinner').setAttribute('class', 'd-none justify-content-center align-items-center');
            document.querySelector('#movie-details').setAttribute('class', 'd-block');
        });
    }, [idMovie]);

    const { title, tagline, poster_path, production_companies, overview, genres, vote_average, release_date, runtime } = movieSelected;

    return (
        <Fragment>
            <NavBar />
            <div className="d-flex justify-content-center align-items-center" id="spinner">
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden"></span>
                </div>
            </div>
            <div className="d-none" id="movie-details">
                <div className="container">
                    <main className="row">
                        <div className="col-md-4 mb-2">
                            <img 
                                className="img-fluid border border-secondary" 
                                src={ `https://image.tmdb.org/t/p/w500${ poster_path }` } 
                                alt={`${ title }'s poster`}
                            />
                        </div>
                        <div className="col-md-8 text-white">
                            <div className="card-details">
                                <small>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid-dots" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="5" cy="5" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="19" cy="5" r="1" /><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="19" r="1" /><circle cx="12" cy="19" r="1" /><circle cx="19" cy="19" r="1" /></svg>
                                    { genres ? genres.map(genre => genre.name).join(', ') : '' }</small>
                                |
                                <small>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="4" y="5" width="16" height="16" rx="2" /><line x1="16" y1="3" x2="16" y2="7" /><line x1="8" y1="3" x2="8" y2="7" /><line x1="4" y1="11" x2="18" y2="11" /><rect x="8" y="15" width="2" height="2" /></svg>
                                    { release_date ? release_date : '' }
                                </small>
                                |
                                <small>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffbf00" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                                    { vote_average ? vote_average : '' }
                                </small>
                                |
                                <small>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clock" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 15" /></svg>
                                    { runtime ? `${ runtime } m` : '' }
                                </small>
                            </div>
                            <hr />
                            <h2 className="card-title">{ title }</h2>
                            <p className="lead fst-italic">{ tagline ? tagline : null }</p>
                            <p className="lead">
                                { overview }
                            </p>
                            <hr />
                            <p className="lead">
                                { production_companies ? production_companies.map(pc => pc.name).join(', ') : ''}
                            </p>
                        </div>
                    </main>
                    <Trailer
                        idMovie = { idMovie }
                        title = { title }
                    />
                    <Actors
                        idMovie = { idMovie }
                    />
                    <Images
                        idMovie = { idMovie }
                        title = { title }
                    />
                </div>
                <Footer />
                <ArrowUp />
            </div>
        </Fragment>
    );
}
 
export default ShowMovie;