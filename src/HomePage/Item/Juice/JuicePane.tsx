import React from "react";
import './JuicePane.css';
import ItemCard from "../../../component/ItemCard";
import styled from "styled-components";

function JuicePane(props){
    return(
        <div className="JuicePane">
            <CategoryName>Juice</CategoryName>
            <div className="ItemPane-Content JuicePane-flex">
            {props.juiceList.sort((a,b) => - a.salesFigure + b.salesFigure).map((juice) => {
                return(
                <ItemCard
                    color={props.selected?"#121258":"#FFC039"}
                    onClick={() => {
                        props.setSelectedItem(juice);
                        if(props.selectedMember.name!=""){
                            props.setPopUpVisivility(true);
                        }
                    }}
                    name = {juice.name}
                    item={juice}
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

const CategoryName = styled.div`
    background-color: #303030;
    color:greenyellow;
    font-weight: bold;
    font-size:2em;
`

export default JuicePane;