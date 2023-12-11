import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "../components/CartWidget.css"

const CartWidget = () => {
    return(
        <div className='Cart'>
            <ShoppingCartIcon/>
                <span> 12 </span>
        </div>
    );
}

export default CartWidget