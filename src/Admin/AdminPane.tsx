import React, { useState } from "react";
import "./AdminPane.css";
import backgroundImg from "./../image/background/admin-background.jpeg"
import PullDownMenu from "../component/PullDownMenu";

function userAddClicked(is_user_add_pulldown_visible,setUserAddVisivility){
    setUserAddVisivility(!is_user_add_pulldown_visible);
    alert(is_user_add_pulldown_visible);
}

function itemAddClicked(){
    alert("OK");
}

function slackSendClicked(){
    alert("OK");
}

function Admin(){

    const [is_user_add_pulldown_visible, setUserAddVisivility] = useState(false);
    const [is_item_add_pulldown_visible, setItemAddVisivility] = useState(true);
    const [is_slack_send_pulldown_visible, setSlackSendVisivility] = useState(true);

    
    return(
        <div className="AdminPane">
            <div className="TabPane"></div>
            <img src={backgroundImg}/>
            <div className="ContentPane">
                <PullDownMenu 
                    summary="ユーザの追加"
                    children={<div>hoge<div>hoge</div><div>hoge</div><div>hoge</div><div>hoge</div><div>hoge</div><div>hoge</div></div>}
                    />
                <PullDownMenu 
                    summary="アイテムの登録"
                    onClick={itemAddClicked}
                    children={<div>hoge</div>}
                    />
                <PullDownMenu 
                    summary="slackへの通知"
                    onClick={slackSendClicked}
                    children={<div>hoge</div>}
                    />
            </div>
        </div>
    );
}

export default Admin;
