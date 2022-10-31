import React from "react";
import './ItemPane.css';
import FoodPane from './Food/FoodPane'
import JuicePane from "./Juice/JuicePane";

function ItemPane(){
    return(
        <div className="ItemPane">
            <JuicePane/>
            <FoodPane/>
        </div>
    );
}

export default ItemPane;