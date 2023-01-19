import React from "react";
import './FoodPane.css';
import ItemCard from "../../../component/ItemCard";
import LogoCocaCora from "../../../image/logo_coca_cora.jpeg";
import { a } from "react-spring";

function FoodPane(props){
    return(
        <div className="FoodPane">
            <div className="CategoryName">Food</div>
            <div className="ItemPane-Content FoodPane-flex">
            {props.foodList.sort((a,b) => - a.salesFigure + b.salesFigure).map((food) => {
                return(
                <ItemCard
                    color={props.selected?"#121258":"#FFC039"}
                    onClick={() => {
                        props.setSelectedItem(food);
                        if(props.selectedMember!=null){
                            props.setPopUpVisivility(true);
                        }
                    }}
                    name = {food.name}
                    item={food}
                    imgSrc = {props.logoDictionary[food.name]}
                    width = "100px"
                    key={food.name}
                />
                )
            })}
            
            </div>
        </div>
    );
}

export default FoodPane;