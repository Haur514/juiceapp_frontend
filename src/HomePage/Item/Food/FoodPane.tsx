import React from "react";
import './FoodPane.css';
import ItemCard from "../../../component/ItemCard";
import LogoCocaCora from "../../../image/logo_coca_cora.jpeg";
import { a } from "react-spring";
import styled from "styled-components";

function FoodPane(props){
    return(
        <div className="FoodPane">
            <CategoryName>食品</CategoryName>
            <div className="ItemPane-Content FoodPane-flex">
            {props.foodList.sort((a,b) => - a.salesFigure + b.salesFigure).map((food) => {
                return(
                <ItemCard
                    color={props.selected?"#121258":"#FFC039"}
                    onClick={() => {
                        props.setSelectedItem(food);
                        if(props.selectedMember.name!=""){
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

const CategoryName = styled.div`
    background-color: #303030;
    color:greenyellow;
    font-weight: bold;
    font-size:2em;
`

export default FoodPane;