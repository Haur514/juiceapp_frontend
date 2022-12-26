import React from "react";
import Button from "../component/Button";
import "./ChatMessageComponent.css";
import DefaultIcon from "./../image/userimg/defaultimg.png"



function ChatMessageComponent(props){

    return(
        <div className="ChatMessageComponent">
            <img src={DefaultIcon}/>
            <div className="MessageBox">
                {props.chat.message}
                <div className="ChatMessageDate">
                    {props.chat.date}
                </div>
            </div>
        </div>
    );
}

export default ChatMessageComponent;