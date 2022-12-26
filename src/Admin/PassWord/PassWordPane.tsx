import React from "react";
import './PassWordPane.css'

function Admin(){

    
    return(
        <div className="PassWordPane">
            
            <div className="PassWordInputWindow">
            <div className="TitleBar">
                <div className="Exit-Button"></div>
                <div className="Close-Button"></div>
                <div className="Open-Button"></div>
                PassWord
            </div>
            <div className="PassWordInputWindow-content">
                パスワードを入力してください<br></br><br></br>
                Password: <input type="text"></input>
                <button
                onClick={() =>{
                    
                }}>入力</button><br></br>
                ヒント: 円周率の最後の4桁
            </div>
            </div>
        </div>
    );
}

export default Admin;