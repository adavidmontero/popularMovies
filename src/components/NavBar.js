import { Link } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router-dom';

const NavBar = () => {

    let navigate = useNavigate();
    let location = useLocation();

    return (
        <nav className="navbar navbar-expand-sm navbar-primary bg-primary d-flex justify-content-between">
            <Link className="navbar-brand" to="/">Popular Movies</Link>
            {
                !location.pathname.includes('/popular-movies')
                ?
                    <button className="btn btn-sm btn-light me-2" onClick={ () => navigate(-1) }>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-back-up me-2" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" /></svg>
                        Volver
                    </button>
                :
                    null
            }
        </nav>
    );
}
 
export default NavBar;