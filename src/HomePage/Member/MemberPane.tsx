import React, { useState } from "react";
import "./MemberPane.css";
import MemberCard from "./MemberCard";

function MemberPane(props) {
  return (
    <div className="MemberPane">
      <div className="attribute">Teature</div>
      {props.memberList
        .filter(function (member) {
          return member.attribute == "teature";
        })
        .sort(function(a,b){ 
          if (a.displayName > b.displayName){
            return 1;
          }else{
            return -1;
          }
        })
        .map((member) => {
          return (
            <MemberCard
              selected={props.selectedMemberId == member.name ? true : false}
              member={member}
              setSelectedMemberId={props.setSelectedMemberId}
              setSelectedMember={props.setSelectedMember}
              key={member.name}
            />
          );
        })}
      <div className="attribute">Master 2</div>
      {props.memberList
        .filter(function (member) {
          return member.attribute == "m2";
        })
        .sort(function(a,b){ 
          if (a.displayName > b.displayName){
            return 1;
          }else{
            return -1;
          }
        })
        .map((member) => {
          return (
            <MemberCard
              selected={props.selectedMemberId == member.name ? true : false}
              member={member}
              setSelectedMemberId={props.setSelectedMemberId}
              setSelectedMember={props.setSelectedMember}

              key={member.name}
            />
          );
        })}
      <div className="attribute">Master 1</div>
      {props.memberList
        .filter(function (member) {
          return member.attribute == "m1";
        })
        .sort(function(a,b){ 
          if (a.displayName > b.displayName){
            return 1;
          }else{
            return -1;
          }
        })
        .map((member) => {
          return (
            <MemberCard
              selected={props.selectedMemberId == member.name ? true : false}
              member={member}
              setSelectedMemberId={props.setSelectedMemberId}
              setSelectedMember={props.setSelectedMember}

              key={member.name}
            />
          );
        })}
      <div className="attribute">Bachelor 4</div>
      {props.memberList
        .filter(function (member) {
          return member.attribute == "b4";
        })
        .sort(function(a,b){ 
          if (a.displayName > b.displayName){
            return 1;
          }else{
            return -1;
          }
        })
        .map((member) => {
          return (
            <MemberCard
              selected={props.selectedMemberId == member.name ? true : false}
              member={member}
              setSelectedMemberId={props.setSelectedMemberId}
              setSelectedMember={props.setSelectedMember}

              key={member.name}
            />
          );
        })}
    </div>
  );
}

export default MemberPane;
