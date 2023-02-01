import React, { useState } from "react";
import "./AdminPane.css";
import backgroundImg from "./../image/admin-background.jpeg"
import PullDownMenu from "../component/PullDownMenu";
import UserAddPane from "./UserAdd/UserAddPane";
import UserDelete from "./UserDelete/UserDelete";
import ItemAddPane from "./ItemAdd/ItemAdd";
import SendSlack from "./SendSlack/SendSlack";
import UnpaidMember from "./UnpaidMember/UnpaidMember";
import ItemPane from "../HomePage/Item/ItemPane";
import ItemDelete from "./ItemDelete/ItemDelete";
import PassWordPane from "./PassWord/PassWordPane";

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
            <PassWordPane/>
            <div className="TabPane"></div>
            <div className="ContentPane">
                <PullDownMenu 
                    summary="ユーザの追加"
                    children={
                        <UserAddPane/>
                    }
                    />
                <PullDownMenu 
                    summary="ユーザの削除"
                    children={
                        <UserDelete/>
                    }
                    />
                <PullDownMenu 
                    summary="アイテムの登録"
                    onClick={itemAddClicked}
                    children={
                        <ItemAddPane/>
                    }
                    />
                <PullDownMenu 
                    summary="アイテムの削除"
                    onClick={itemAddClicked}
                    children={
                        <ItemDelete />
                    }
                    />
                <PullDownMenu 
                    summary="slackへの通知"
                    onClick={slackSendClicked}
                    children={
                        <SendSlack/>
                    }
                    />
                <PullDownMenu 
                    summary="金額未払い者の管理"
                    onClick={slackSendClicked}
                    children={
                        <UnpaidMember/>
                    }
                    />
            </div>
        </div>
    );
}

export default Admin;
