import {useState, useEffect} from "react";
import CardProduct from "../../components/CardProducts/CardProduct";
import { useParams } from "react-router-dom";
import products from "../../products.json";
import "../ItemDetailContainer/ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [garm, setGarm] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        setGarm(products.products.find((product) => product.id == id))
    }, [id]);

    return (
        <div className="container prenda">
            {garm.id ? <CardProduct product={garm}/> : null}
        </div>
    )
}

export default ItemDetailContainer