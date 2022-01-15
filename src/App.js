import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Movies from './components/Movies';
import NavBar from './components/NavBar';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import ArrowUp from './components/ArrowUp';
import './App.css';

function App() {

  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);

  const currentPage = urlParams.get('page');

  //Creamos los estados
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(parseInt(currentPage) || 1);
  const [totalPage, setTotalPage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const consultAPI = async () => {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=187a4dd9fcb912ed459990053e6266b8&page=${page}&language=en-ES`;

      const results = await axios.get(url);
      
      setTotalPage(results.data.total_pages);
      setMovies(results.data.results);
    };
    
    consultAPI().then(() => {
      setLoading(false);
    });
    
    window.scrollTo({ behavior: 'smooth', top: '0px' });
  }, [page]);

  return (
    <Fragment>
      <NavBar />
      <div className="container">
        <div className="h-100 p-5 text-white bg-primary text-center my-4" id="jumbotron">
          <h1 className="display-4">Popular Movies</h1>
          <p className="lead">Mantente actualizado con las películas que son tendencia en la industria del cine.</p>
        </div>
        {
          loading
          ?
            <div className="d-flex justify-content-center align-items-center mb-4">
              <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden"></span>
              </div>
            </div>
          :
            <Movies 
              movies = { movies }
            />
        }
        <Pagination 
          setPage = { setPage }
          page = { page }
          totalPage = { totalPage }
          setLoading = { setLoading }
        />
      </div>
      <Footer />
      <ArrowUp />
    </Fragment>
  );
}

export default App;
