import React, { useState } from "react";
import './MemberPane.css';
import MemberCard from "./MemberCard"

const members_list = ["haruka","iwase","takesige","mihara","ishino","fumiya","kaichi","kubo","kaimor"];

let selected_member: string = "haruka";

function MemberPane(){

    const [selected_member, setValue] = useState("");

    return(
        <div className="MemberPane">
            {members_list.map((member: string) => {
                return(
                    <MemberCard 
                    selected ={selected_member==member?true:false}
                    name={member}
                    setValue = {setValue}/>
                );
            })}
        </div>
    );
}

export default MemberPane;