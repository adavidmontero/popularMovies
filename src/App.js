import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movies from './components/Movies';
import Pagination from './components/Pagination';
import Modal from './components/Modal';

function App() {

  //Creamos los estados
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [idMovie, setIdMovie] = useState(null);

  useEffect(() => {
    const consultAPI = async () => {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=187a4dd9fcb912ed459990053e6266b8&page=${page}`;

      const results = await axios.get(url);
      
      setTotalPage(results.data.total_pages);
      setMovies(results.data.results);

      document.querySelector('#jumbotron').scrollIntoView({
        behavior: "smooth"
      });
    };

    consultAPI();
  }, [page]);

  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid mt-4" id="jumbotron">
        <div className="container text-center">
          <h1 className="display-4">Popular Movies</h1>
          <p className="lead">Mantente actualizado con las películas que son tendencia en la industria del cine.</p>
        </div>
      </div>
      <Movies 
        movies = { movies }
        setShowModal = { setShowModal }
        setIdMovie = { setIdMovie }
      />
      <Pagination 
        setPage = { setPage }
        page = { page }
        totalPage = { totalPage }
      />
      {
        showModal
        ? 
          <Modal 
            idMovie = { idMovie }
            setShowModal = { setShowModal }
            setIdMovie = { setIdMovie }
          />
        :
          null
      }
    </div>
  );
}

export default App;
