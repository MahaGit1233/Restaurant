import { useContext } from "react";
import './Header.css';
import CartContext from "../store/cart-context";
import Cart from "../Cart/Cart";

const Header = (props) => {
    const cartCtx = useContext(CartContext);

    let quantity = 0;
    cartCtx.items.forEach((item) => quantity = quantity + Number(item.quantity));

    // const numberOfCartItems = cartCtx.items.reduce((currentNum, item) => currentNum + Number(item.quantity), 0);

    return <div className="maindiv">
        <header className="header">
            <h1>React Meals</h1>
            <button onClick={props.onConfirm}>
                <h2>Your Cart <span>{quantity}</span></h2>
            </button>
        </header>
        <img src="https://i.pinimg.com/736x/06/ed/42/06ed4211eff090878101f035a02a9e31.jpg" />
        <div className="content">
            <h2>Delicious Food, Delivered To You</h2>
            <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
            <p>All our meals are cooked with high-quality ingredients, just-in-time and ofcourse by experienced chefs!</p>
        </div>
    </div>
}

export default Header;