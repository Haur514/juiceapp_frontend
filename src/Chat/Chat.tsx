import React from "react";
import "./Chat.css";

const fetchMemberList = async (setMemberList) =>{
    const inputdata = await fetch(`http://localhost/backend/member`, {
        method: 'GET',
        mode: 'cors'
    })
    .then(res => res.json())
    .then(members => {
        setMemberList(members);
    });
}

function Chat(){
    return(
        <div>
            hoge
        </div>
    );
}

export default Chat;