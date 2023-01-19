import React from "react";
import './JuicePane.css';
import ItemCard from "../../../component/ItemCard";

function JuicePane(props){
    return(
        <div className="JuicePane">
            <div className="CategoryName">Juice</div>
            <div className="ItemPane-Content JuicePane-flex">
            {props.juiceList.sort((a,b) => {return - a.salesFigure + b.salesFigure;}).map((juice) => {
                return(
                <ItemCard
                    color={props.selected?"#121258":"#FFC039"}
                    onClick={() => {
                        props.setSelectedItem(juice);
                        if(props.selectedMember!=null){
                            props.setPopUpVisivility(true);
                        }
                    }}
                    name = {juice.name}
                    imgSrc = {props.logoDictionary[juice.name]}
                    width = "100px"
                    key={juice.name}
                />
                )
            })}
            </div>
        </div>
    );
}

export default JuicePane;