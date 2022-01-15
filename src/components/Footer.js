import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-primary text-white d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center px-4 py-2 mt-2 border-top border-secondary">
            <div className="lead">
                <Link to="/" className="me-2 text-decoration-none">
                    Popular Movies
                </Link>
                <span>© 2022</span>
            </div>

            <span className="personal-logo text-capitalize">
                amonferez
            </span>
        </footer>
    );
}
 
export default Footer;