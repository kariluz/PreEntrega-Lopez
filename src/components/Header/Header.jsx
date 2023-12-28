import "./Header.css";
import img from "../../assets/Img/yeah-logo.png"

const Header = () => {
    return (
        <div className="Header">
            <img src={img} alt="Yeah Logo" width={200} />
        </div>
    )
}

export default Header