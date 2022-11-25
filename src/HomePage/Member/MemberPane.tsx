import React, { useState } from "react";
import './MemberPane.css';
import MemberCard from "./MemberCard"


function MemberPane(props){

    return(
        <div className="MemberPane">
            {props.memberList.map((member: string) => {
                return(
                    <MemberCard 
                    selected ={props.selectedMember==member?true:false}
                    name={member}
                    setValue = {props.setSelectedMember}/>
                );
            })}
        </div>
    );
}

export default MemberPane;