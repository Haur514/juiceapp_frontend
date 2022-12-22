import React, { useState } from "react";
import './MemberCard.css';
import Button from "./../../component/Button";
import DefaultIcon from "./../../image/userimg/defaultimg.png"


const default_member_card_color: string = "#303030";
const selected_member_card_color: string = "#303030";
const font_color: string = "white";

function MemberCard(props){

    return(
        <div className = {`MemberCard  ${props.selected?"MemberCard-selected":""}`}>
        <Button
            color={props.selected?selected_member_card_color:default_member_card_color}
            height = "15%"
            width = "100%"
            onClick={() => {
                props.setSelectedMemberId(props.member.name)
                console.log("OK")
            }}
            radius = ".3em"
            border="greenyellow"
            fontColor={font_color}
            children = {
                <div className={`MemberCardChildren`}> 
                    <img src={DefaultIcon}/>
                    {props.member.displayName}
                </div>
            }
            fontSize = "3em"
        />
        
        </div>
    );
}

export default MemberCard;