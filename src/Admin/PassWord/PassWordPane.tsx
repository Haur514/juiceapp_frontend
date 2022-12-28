import React, { useState } from "react";
import './PassWordPane.css'
import { isVisible } from "@testing-library/user-event/dist/utils";

function Admin(){

    const [password,setPassword] = useState("");
    const [visible,setVisible] = useState(true);

    
    return(
        <div className="PassWordPane" 
        style={{visibility: visible ? "visible":"hidden"}}>
            
            <div className="PassWordInputWindow">
            <div className="TitleBar">
                <div className="Exit-Button"></div>
                <div className="Close-Button"></div>
                <div className="Open-Button"></div>
                管理者権限
            </div>
            <div className="PassWordInputWindow-content">
                パスワードを入力してください<br></br><br></br>
                Password: 
                <input 
                type="text"
                value={password}
                onChange={(event) => setPassword(event.target.value)}></input>
                <button
                onClick={() =>{
                    if(password == "password"){
                        alert("認証されました");
                        setVisible(false);
                    }else{
                        alert("パスワードが違います");
                    }
                }}
                >入力</button><br></br>
                ヒント: 円周率の下4桁
            </div>
            </div>
        </div>
    );
}

export default Admin;