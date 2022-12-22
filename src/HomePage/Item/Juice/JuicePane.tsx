import React from "react";
import './JuicePane.css';
import ItemCard from "../../../component/ItemCard";

function JuicePane(props){
    return(
        <div className="JuicePane">
            <div className="CategoryName">Juice</div>
            <div className="ItemPane-Content JuicePane-flex">
            {props.juiceList.map((juice) => {
                return(
                <ItemCard
                color={props.selected?"#121258":"#FFC039"}
                onClick={() => {
                    props.setSelectedItem(juice.name);
                    props.setPopUpVisivility(true);
                }}
                name = {juice.name}
                imgSrc = {props.logoDictionary[juice.name]}
                width = "100px"
                />
                )
            })}
            </div>
        </div>
    );
}

export default JuicePane;