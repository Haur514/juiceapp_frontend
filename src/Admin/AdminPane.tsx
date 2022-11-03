import React from "react";
import "./AdminPane.css";
import backgroundImg from "./../image/background/admin-background.jpeg"

function Admin(){
    return(
        <div className="AdminPane">
            <div className="TabPane"></div>
            <img src={backgroundImg}/>
            <div className="ContentPane">
                <div className="MsgBox">▶︎ ユーザーの追加</div>
                <div className="MsgBox">▶︎ 商品の追加</div>
                <div className="MsgBox">▶︎ slackへの送信</div>
            </div>
        </div>
    );
}

export default Admin;