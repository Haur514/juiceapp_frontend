import React from "react";
import ItemCard from "../component/ItemCard";
import styled from "styled-components";

function JuicePane(props){
    return(
        <JuicePaneMain>
            <CategoryName>ジュース</CategoryName>
            <JuicePaneContent>
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
            </JuicePaneContent>
        </JuicePaneMain>
    );
}

const JuicePaneContent = styled.div`
    overflow-x: scroll;
    display:flex;
    width:100%;
    height:85%;
    border: solid 1px black;
    margin-bottom: 1em;
    background-color:#787878;
`

const JuicePaneMain = styled.div`
    height:20em;
    margin-bottom:1em;
`

const CategoryName = styled.div`
    background-color: #303030;
    color:greenyellow;
    font-weight: bold;
    font-size:2em;
`

export default JuicePane;