import React, { useEffect, useState } from "react";
import ChatMessageComponent from "./ChatMessageComponent";
import "./ChatPane.css";
import DefaultIcon from "./../image/userimg/defaultimg.png"
import ChatInputPane from "./input/ChatInputPane";


const fetchMessagesList = async (setMessagesList) =>{
    const inputdata = await fetch(`http://localhost/backend/chat`, {
        method: 'GET',
        mode: 'cors'
    })
    .then(res => res.json())
    .then(messages => {
        setMessagesList(messages);
    });
}

function Chat(){

    const [messages,setMessagesList] = useState([]);

    const [lastUpdated,setLastUpdated] = useState("");

    useEffect(() => {
        fetchMessagesList(setMessagesList);
    },[lastUpdated])

    return(
        <div className="ChatPane">

            {messages.map(chat=>
                <ChatMessageComponent 
                chatMessage={chat.message}/>
            )}
            <ChatInputPane
                setLastUpdated={setLastUpdated}/>
        </div>
    );
}

export default Chat;