import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ setPage, page, totalPage }) => {

    const nextPage = () => {
        if (page < totalPage) setPage(page + 1);
    }

    const previousPage = () => {
        if (page > 1) setPage(page - 1);
    }

    return ( 
        <nav className="d-flex justify-content-center">
            <ul className="pagination">
                <li className={ `page-item ${(page === 1) ? 'disabled' : ''}`}>
                    <Link className="page-link" to={ `?page=${page - 1}` } onClick={ previousPage } >Anterior</Link>
                </li>
                <li className={ `page-item ${(page === totalPage) ? 'disabled' : ''}`}>
                    <Link className="page-link" to={ `?page=${page + 1}` } onClick={ nextPage }>Siguiente</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Pagination;