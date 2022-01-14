import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

const Trailer = ({ idMovie, title }) => {

    const [video, setVideo] = useState(null);

    useEffect(() => {
        const consultAPI = async () => {
            const url = `https://api.themoviedb.org/3/movie/${idMovie}/videos?api_key=187a4dd9fcb912ed459990053e6266b8`;
        
            const results = await axios.get(url);

            setVideo(results.data.results.filter( v => v.site === 'YouTube' & v.type === 'Trailer')[0]);
        };
        
        consultAPI();
    }, [idMovie]);

    if (!video) return null;

    return (
        <Fragment>
            <hr />
            <section className="trailer">
                <h3 className="mb-4">Tráiler de { title }</h3>
                <div className="container-video">
                    <iframe 
                        className="responsive-iframe border border-secondary" 
                        src={ `https://www.youtube.com/embed/${ video.key }` } 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </Fragment>           
    );
}
 
export default Trailer;