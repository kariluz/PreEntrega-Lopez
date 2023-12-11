import "./NavBar.css";
import img from "../assets/Img/yeah-logo-2.png";
import CartWidget from "./CartWidget.jsx";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-body-tertiary NavBar-Yeah">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img className="Logo2" src={img} alt="img" />Yeah Shirt´s</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">T-Shirt´s</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Hoodies</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Motivos
                        </a>
                        <ul className="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Anime</a></li>
                            <li><a class="dropdown-item" href="#">Gamer</a></li>
                            <li><a class="dropdown-item" href="#">Tv/Series</a></li>
                            <li><a class="dropdown-item" href="#">Música</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
                <div><CartWidget/></div>
                </nav>
        </div>
    );
};

export default NavBar