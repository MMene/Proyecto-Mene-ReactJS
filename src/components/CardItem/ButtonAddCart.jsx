import shoppingCart from "../../assets/image/shopping-cart.svg"

const ButtonAddCart = () => {
    return (
        <button id="addCart">
            <img src={shoppingCart} alt="add" />
            </button> 
        
    )
}

export default ButtonAddCart;