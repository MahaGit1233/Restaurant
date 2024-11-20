import React from "react";
import './MealItems.css';

const MealItems = (props) => {
    return (
        <div className="Meals">
            <li>
                <div className="meal-title">{props.title}</div>
                <div className="meal-des">{props.description}</div>
                <div className="meal-cost">₹{props.price}</div>
            </li>
            <form className="form">
                <div>
                    <label htmlFor="amount"><b>Amount  </b></label>
                    <input id="amount" type="number" placeholder="1" />
                </div>
                <button>+Add</button>
            </form>
        </div>
    );
}

export default MealItems;