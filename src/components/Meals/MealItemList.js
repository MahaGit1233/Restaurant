import React from "react";
import MealItems from "./MealItems";
import './MealItemList.css';

const MealItemList=(props)=>{
    return (
        <ul>
            {props.meals.map((item)=>(
                <MealItems key={item.id} id={item.id} title={item.title} description={item.description} price={item.price}/>
            ))}
        </ul>
    )
}

export default MealItemList;