import { useState, useEffect, Fragment } from "react";
import axios from 'axios';
import PropTypes from 'prop-types';

const Images = ({ idMovie, title }) => {

    const [images, setImages] = useState([]);
    const [isShowing, setIsShowing] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const consultAPI = async () => {

            const url = `https://api.themoviedb.org/3/movie/${idMovie}/images?api_key=187a4dd9fcb912ed459990053e6266b8`;
        
            const results = await axios.get(url);
            
            setImages(results.data.backdrops.slice(0, 9));
        };
      
        consultAPI();
    }, [idMovie]);

    useEffect(() => {
        const body = document.querySelector('body');
        const arrowUp = document.querySelector('.arrow-up');
        body.style.overflow = isShowing ? 'hidden' : 'auto';
        arrowUp.style.display = isShowing ? 'none' : 'block';
    }, [isShowing])

    const viewImage = (i) => {
        setIsShowing(true);
        setCurrentImage(i);
    }

    const next = () => {
        if (currentImage === images.length - 1) {
            setCurrentImage(0);  
        } else {
            setCurrentImage(currentImage + 1);
        }
    }

    const previous = () => {
        if (currentImage === 0) {
            setCurrentImage(images.length - 1); 
        } else {
            setCurrentImage(currentImage - 1);
        }
    }

    if (images.length === 0) return null;

    return (
        <Fragment>
            <hr />
            <h3 className="mb-4">Imágenes</h3>
            <section className="container-images" id="visor-images">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    {
                        images.map((image, index) => (
                            <div className="col mb-3" key={ image.file_path }>
                                <img 
                                    className="img-fluid border border-secondary image-clickable" 
                                    src={ `https://image.tmdb.org/t/p/w500${ image.file_path }` } 
                                    alt={`${ title }'s`}
                                    loading="lazy"
                                    onClick={ () => viewImage(index) }
                                />
                            </div>
                        ))
                    }
                </div>
                {
                    isShowing
                    ?
                    <Fragment>

                        <div className="carousel-images">
                        </div>
                        <div className="image-container d-flex justify-content-center align-items-center">
                            <div className="close-visor fixed-top d-flex justify-content-between p-2">
                                <span>{ currentImage + 1 } de { images.length }</span>
                                <button 
                                    className="btn-close btn-close-white" 
                                    type="button" 
                                    aria-label="Close"
                                    onClick={ () => setIsShowing(false) }
                                ></button>
                            </div>
                            <div className="controls">
                                <button className="btn arrow-left" onClick={ previous }>
                                    <svg className="icon-arrow" width="30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                </button>
                                <button className="btn arrow-right" onClick={ next }>
                                    <svg className="icon-arrow" width="30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                </button>
                            </div>
                            <img 
                                className="img-fluid rounded border border-secondary" 
                                src={ `https://image.tmdb.org/t/p/original${ images[currentImage].file_path }` } 
                                alt={ `${title} ${currentImage}` }
                            />
                        </div>
                    </Fragment>
                    :
                        null
                }
            </section>
        </Fragment>
    );
}

Images.propTypes = {
    idMovie: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};
 
export default Images;