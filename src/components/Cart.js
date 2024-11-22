import React from "react";
import ReactDOM from 'react-dom';
import './Cart.css';

const Backdrop = (props) => {
    return <div className="backdrop">
        <div className="cart">
            <div className="dosa"><p>Dosa</p></div>
            <div className="amount">
                <h2>Total Amount <span>100</span></h2>
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
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,document.getElementById("backdrop-root"))}
    </React.Fragment>
}

export default Cart;