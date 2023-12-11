
const ItemListContainer = (props) => {
    return(
        <div className="container" style={{backgroundColor: "black", textAlign:"center", color:"white"}}>
            <h3>{props.greeting}</h3>
        </div>
    );
}

export default ItemListContainer;
