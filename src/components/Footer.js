import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 px-4 mt-2 bg-primary">
            <div className="col-md-4 d-flex align-items-center lead">
                <Link to="/" className="me-2 text-white text-decoration-none lh-1">
                    Popular Movies
                </Link>
                <span className="text-white">© 2022 Company, Inc</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li></li>
            </ul>
        </footer>
    );
}
 
export default Footer;