import {useState, useEffect} from "react";
import CardProduct from "../../components/CardProducts/CardProduct";
import { useParams } from "react-router-dom";
import products from "../../products.json";
import {Link} from "react-router-dom";
import "../ItemDetailContainer/ItemDetailContainer.css"

const Category = () => {
    const [garms, setGarms] = useState([]);
    let { categoryId } = useParams();

    useEffect(() => {
        console.log('paso aporas adsd')
        setGarms(products.products.filter((product) => product.categoria == categoryId))
    }, [categoryId]);
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
    )
}

export default Category