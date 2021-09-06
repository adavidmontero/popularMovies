import React from 'react';

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
                    <button className="page-link" onClick={ previousPage } >Anterior</button>
                </li>
                <li className={ `page-item ${(page === totalPage) ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={ nextPage }>Siguiente</button>
                </li>
            </ul>
        </nav>
     );
}
 
export default Pagination;