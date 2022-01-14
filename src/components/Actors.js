import { useState, useEffect, Fragment } from "react";
import axios from "axios";

const Actors = ({ idMovie }) => {

    const [cast, setCast] = useState([]);

    useEffect(() => {
        const consultAPI = async () => {

            const url = `https://api.themoviedb.org/3/movie/${idMovie}/credits?api_key=187a4dd9fcb912ed459990053e6266b8`;
        
            const results = await axios.get(url);
            
            setCast(results.data.cast.slice(0, 8));
        };
      
        consultAPI();
    }, [idMovie]);

    return (
        <Fragment>
            <hr />
            <section className="main-actors">
                <h3 className="mb-4">Actores Principales</h3>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    {
                        cast.map(cast => (
                            <div className="col mb-3" key={ cast.id }>
                                <div className="card border border-secondary">
                                    <img 
                                        src={ cast.profile_path ? `https://image.tmdb.org/t/p/w500${ cast.profile_path }` : 'https://via.placeholder.com/500x750' } 
                                        className="card-img-top" 
                                        alt={`${ cast.name }'s profile`}
                                    />
                                    <div className="card-body bg-light text-primary text-center border-top border-secondary">
                                        <h6 className="card-title">{ cast.name }</h6>
                                        <p className="card-text fst-italic">{ cast.character ? cast.character : '-' }</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </Fragment>
    );
}
 
export default Actors;