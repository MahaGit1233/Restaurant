import React from "react";
import ReactDOM from 'react-dom';
import './Cart.css';

const Backdrop = () => {
    return <div className="backdrop">
        <div className="cart">
            <div className="dosa"><p>Dosa</p></div>
            <div className="amount">
                <h2>Total Amount <span>100</span></h2>
            </div>
            <div className="buttons">
                <button className="button1">Close</button>
                <button className="button2">Order</button>
            </div>
        </div>
    </div>
}

const Cart = () => {
    return <React.Fragment>
        {ReactDOM.createPortal(<Backdrop />,document.getElementById("backdrop-root"))}
    </React.Fragment>
}

export default Cart;