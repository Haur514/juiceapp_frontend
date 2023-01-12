import React, { useEffect, useState } from "react";
import ChatMessageComponent from "./ChatMessageComponent";
import "./ChatPane.css";
import DefaultIcon from "./../image/userimg/defaultimg.png";
import ChatInputPane from "./input/ChatInputPane";

const fetchMessagesList = async (setMessagesList) => {
  const inputdata = await fetch(
    `${window.location.protocol}//${window.location.host}${window.location.pathname}backend/chat`,
    {
      method: "GET",
      mode: "cors",
    }
  )
    .then((res) => res.json())
    .then((messages) => {
      setMessagesList(messages.reverse());
    });
};

function Chat() {
  const [messages, setMessagesList] = useState([]);

  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    fetchMessagesList(setMessagesList);
  }, [lastUpdated]);

  return (
    <div className="ChatPane">
      <ChatInputPane setLastUpdated={setLastUpdated} />
      {messages.map((chat) => (
        <ChatMessageComponent chat={chat} key={chat.id} setLastUpdated={setLastUpdated}/>
      ))}
    </div>
  );
}

export default Chat;
