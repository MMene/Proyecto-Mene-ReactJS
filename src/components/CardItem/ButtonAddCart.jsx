import shoppingCart from "../../assets/image/shopping-cart.svg"
import Button from "react-bootstrap/esm/Button";

const ButtonAddCart = () => {
    return (
        <Button id="AddCart">
            <img src={shoppingCart} alt="add" />
        </Button>
    )
}

export default ButtonAddCart;