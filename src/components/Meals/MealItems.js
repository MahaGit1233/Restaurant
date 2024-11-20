import React from "react";
import './MealItem.css';

const MealItems = (props) => {
    return (
        <div className="Meals">
            <li>
                <div className="meal-title">{props.title}</div>
                <div className="meal-des">{props.description}</div>
                <div className="meal-cost">₹{props.price}</div>
            </li>
        </div>
    );
}

export default MealItems;