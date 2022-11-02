import React from "react";
import './MemberCard.css';
import Button from "./../../component/Button";
import HarukaIcon from "./../../image/userimg/haruka-icon.png"

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
            children = {
                <div className="MemberCard"> 
                    <img src={HarukaIcon}/>
                    {props.name}
                </div>
            }
            fontSize = "50px"
        />
    );
}

export default MemberCard;