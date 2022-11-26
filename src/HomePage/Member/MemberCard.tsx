import React from "react";
import './MemberCard.css';
import Button from "./../../component/Button";
import DefaultIcon from "./../../image/userimg/defaultimg.png"

const default_member_card_color: string = "#14001a";
const selected_member_card_color: string = "#166a88";
const font_color: string = "white";

function MemberCard(props){
    return(
        <Button
            border="solid 1px white"
            color={props.selected?selected_member_card_color:default_member_card_color}
            height = "15%"
            width = "100%"
            onClick={() => props.setValue(props.name)}
            radius = "0%"
            fontColor={font_color}
            children = {
                <div className={`MemberCard ${props.selected?"selected":"selected"}`}> 
                    <img src={DefaultIcon}/>
                    {props.name}
                </div>
            }
            fontSize = "3em"
        />
    );
}

export default MemberCard;