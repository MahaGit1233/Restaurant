import React, { useContext } from "react";
import ReactDOM from 'react-dom';
import './Cart.css';
import CartContext from "../store/cart-context";

const Backdrop = (props) => {
    const cartCtx = useContext(CartContext);

    const cartItems=cartCtx.items.map((item,index)=>(
        <div key={index}>
            <p>{item.title} x {item.quantity}</p>
            <p>₹{item.price}</p>
        </div>
    ));

    const totalAmount=cartCtx.totalAmount.toFixed(2);

    return <div className="backdrop">
        <div className="cart">
            <div className="dosa"><p>{cartItems}</p></div>
            <div className="amount">
                <h2>Total Amount <span>₹{totalAmount}</span></h2>
            </div>
            <div className="buttons">
                <button className="button1" onClick={props.onClose}>Close</button>
                <button className="button2">Order</button>
            </div>
        </div>
    </div>
}

const Cart = (props) => {
    return <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById("backdrop-root"))}
    </React.Fragment>
}

export default Cart;