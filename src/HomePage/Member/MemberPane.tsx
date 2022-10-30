import React from "react";
import './MemberPane.css';
import MemberCard from "./MemberCard"

const members_list = ["haruka","iwase","takesige","mihara","ishino","fumiya","kaichi","kubo","kaimor"];

let selected_member: string = "haruka";

function hoge(){
    console.log("OK");
}

function MemberPane(){
    return(
        <div className="MemberPane">
            {members_list.map((member: string) => {
                return(
                    <MemberCard 
                    selected ={selected_member==member?true:false}
                    name={member}/>
                );
            })}
        </div>
    );
}

export default MemberPane;