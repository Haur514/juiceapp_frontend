import React from "react";
import "./AdminPane.css";
import backgroundImg from "./../image/background/admin-background.jpeg"

function Admin(){
    return(
        <div className="AdminPane">
            <div className="TabPane"></div>
            <img src={backgroundImg}/>
            <div className="ContentPane">
                <div className="MsgBox">hoge</div>
            </div>
        </div>
    );
}

export default Admin;