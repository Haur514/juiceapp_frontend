import React from "react";
import './MemberCard.css';
import Button from "./../../component/Button";

function MemberCard(props){
    return(
        <Button
            border="solid 1px black"
            color={props.selected?"#121258":"#FFC039"}
            height = "15%"
            width = "100%"
            onClick={() => props.setValue(props.name)}
            radius = "0%"
            fontColor={props.selected?"#FFC039":"#121258"}
            children = {props.name}
        />
    );
}

export default MemberCard;