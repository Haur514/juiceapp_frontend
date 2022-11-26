import React from "react";
import './FoodPane.css';
import ItemCard from "../../../component/ItemCard";
import LogoCocaCora from "../../../image/logo_coca_cora.jpeg";

function FoodPane(props){
    return(
        <div className="FoodPane">
            <div className="Category">Food</div>
            <div className="FoodPane-flex">
            {props.foodList.map((food) => {
                return(
                <ItemCard
                    color={props.selected?"#121258":"#FFC039"}
                    onClick={() => {
                        props.setSelectedItem(food.name);
                        props.setPopUpVisivility(true);
                    }}
                    name = {food.name}
                    imgSrc = {props.logoDictionary[food.name]}
                    width = "100px"
                />
                )
            })}
            
            </div>
        </div>
    );
}

export default FoodPane;