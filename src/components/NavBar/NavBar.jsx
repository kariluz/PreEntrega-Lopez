import "./NavBar.css";
import img from "../../assets/Img/yeah-logo-2.png";
import CartWidget from "../CartWidget/CartWidget.jsx";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-body-tertiary NavBar-Yeah">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img className="Logo2" src={img} alt="img" />Yeah Shirt´s</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <Link className="nav-item nav-link active" to="/">
                        Home
                        </Link>
                        <Link className="nav-item nav-link" to="/category/Franela">
                        T-Shirt´s                   
                        </Link>
                        <Link className="nav-item nav-link" to="/category/Hoodie">
                        Hoodies
                        </Link>
                        <Link className="nav-item nav-link" to="/category/Sweater">
                        Sweaters
                        </Link>
                    </ul>
                    </div>
                </div>
                <div><CartWidget/></div>
                </nav>
        </div>
    );
};

export default NavBar