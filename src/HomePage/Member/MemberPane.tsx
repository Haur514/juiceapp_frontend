import React, { useState } from "react";
import './MemberPane.css';
import MemberCard from "./MemberCard"


function MemberPane(props){

    return(
        <div className="MemberPane">
            {props.memberList.map((member) => {
                return(
                    <MemberCard 
                    selected ={props.selectedMember==member.displayName?true:false}
                    name={member.displayName}
                    setValue = {props.setSelectedMember}/>
                );
            })}
        </div>
    );
}

export default MemberPane;