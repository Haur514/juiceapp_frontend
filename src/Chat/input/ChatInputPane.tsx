import React, { useEffect, useState } from "react";
import "./ChatInputPane.css";
import DefaultIcon from "./../image/userimg/defaultimg.png"

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import { Button } from "react-bootstrap";


const addMessage = async (message) =>{
    const inputdata = await fetch(`http://localhost/backend/chat/add?message=${message}`, {
        method: 'GET',
        mode: 'cors'
    });
}

function ChatInputPane(props){
    const [message,setMessage] = useState("");

    // useEffect(() => {
    //     (props.selectedMemberId,setHistories);
    // },[props.selectedMemberId,props.sumPurchased])


    return(
        <div className="ChatInputPane">
            <InputGroup className="mb-3">
            <Form.Control
                placeholder="140字まで入力可能．それ以上は入力しないで．"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={message}
                onChange={(event)=> setMessage(event.target.value)}
            />
            <Button 
            variant="outline-secondary" 
            id="button-addon2"
            onClick={async () =>{
                await addMessage(message)
                setMessage("")
                let date = new Date();
                props.setLastUpdated(date.getFullYear() + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' +('0' + date.getDate()).slice(-2) + ' ' +  ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) + ':' + ('0' + date.getSeconds()).slice(-2) + '.' + date.getMilliseconds())
            }}>
                送信
            </Button>
        </InputGroup>
        </div>
    );
}

export default ChatInputPane;