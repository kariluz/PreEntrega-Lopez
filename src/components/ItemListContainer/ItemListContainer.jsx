import {useState, useEffect} from "react";
import products from "../../products.json";
import "../ItemListContainer/ItemListContainer.css";
import CardProduct from "../CardProducts/CardProduct";
import {Link} from "react-router-dom";

const ItemListContainer = () => {
    const [garms, setGarms] = useState([]);

    useEffect(() => {
        setGarms(products.products)
    }, []);

    return (
        <div className="container">
            {garms.map((garm) => {
                return (
                    <div style={{margin: 10}} key={garm.id}>
                        <Link to={`/detail/${garm.id}`}>
                            <CardProduct product={garm}/>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}

export default ItemListContainer;
