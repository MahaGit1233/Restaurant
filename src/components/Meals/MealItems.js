import React, { useContext, useState } from "react";
import './MealItems.css';
import CartContext from "../store/cart-context";

const MealItems = (props) => {
    const [quantity, setQuantity] = useState(1);

    const cartCtx = useContext(CartContext);

    const inputChangeHandler = (event) => {
        setQuantity(Number(event.target.value));
    }

    const addToCartHandler = (event) => {

        event.preventDefault();
        cartCtx.addItem({
            id: props.id,
            title: props.title,
            price: props.price,
            quantity: quantity
        });
    }

    return (
        <div className="Meals">
            <li>
                <div className="meal-title">{props.title}</div>
                <div className="meal-des">{props.description}</div>
                <div className="meal-cost">₹{props.price}</div>
            </li>
            <form className="form" onSubmit={addToCartHandler}>
                <div>
                    <label htmlFor="amount"><b>Amount  </b></label>
                    <input id="amount" type="number" value={quantity} onChange={inputChangeHandler} />
                </div>
                <button onClick={addToCartHandler}>+Add</button>
            </form>
        </div>
    );
}

export default MealItems;