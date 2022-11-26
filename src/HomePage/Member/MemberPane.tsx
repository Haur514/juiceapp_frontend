import React, { useState } from "react";
import './MemberPane.css';
import MemberCard from "./MemberCard"


function MemberPane(props){

    return(
        <div className="MemberPane">
            <div className="attribute">
                Master 2
            </div>
            {props.memberList
            .filter(function(member) {
                return member.attribute=="m2";
            })
            .map((member) => {
                return(
                    <MemberCard 
                    selected ={props.selectedMember==member.displayName?true:false}
                    name={member.displayName}
                    setValue = {props.setSelectedMember}/>
                );
            })}
            <div className="attribute">
                Master 1
            </div>
            {props.memberList
            .filter(function(member) {
                return member.attribute=="m1";
            })
            .map((member) => {
                return(
                    <MemberCard 
                    selected ={props.selectedMember==member.displayName?true:false}
                    name={member.displayName}
                    setValue = {props.setSelectedMember}/>
                );
            })}
            <div className="attribute">
                Bachelor 4
            </div>
            {props.memberList
            .filter(function(member) {
                return member.attribute=="b4";
            })
            .map((member) => {
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