import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
//Componentes
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Spinner from './components/Spinner';
import Movies from './components/Movies';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import ArrowUp from './components/ArrowUp';
//Estilos
import './App.css';

function App() {

  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);

  const currentPage = urlParams.get('page');

  //Creamos los estados
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(parseInt(currentPage) || 1);
  const [totalPage, setTotalPage] = useState(1);
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
        <Jumbotron />
        {
          loading
          ?
            <Spinner />
          :
            <Movies 
              movies = { movies }
            />
        }
        <Pagination 
          page = { page }
          totalPage = { totalPage }
          setPage = { setPage }
          setLoading = { setLoading }
        />
      </div>
      <Footer />
      <ArrowUp />
    </Fragment>
  );
}

export default App;
