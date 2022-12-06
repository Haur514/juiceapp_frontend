import React, { useState } from "react";
// import Select from "react-select";
import Button from "../../component/Button";
import "./UserAddPane.css"

const addUser = async (userId,displayName,attribute) =>{
    const inputdata = await fetch(`http://localhost/backend/member/add?name=${userId}&displayName=${displayName}&attribute=${attribute}`, {
    method: 'GET',
    mode: 'cors'
    });
}

function UserAddPane(){
    const [userId,setUserId] = useState("");
    const [displayName,setDisplayName] = useState("");
    const [attribute,setAttribute] =  useState("teature");
    return(
        <div className="UserAddPane">
                <label>
                    <div>アイコン：</div>
                </label>
                <label>
                    ID:
                    <input 
                    type="text" 
                    name="name" 
                    value={userId}
                    onChange={(event) => setUserId(event.target.value)}/>
                </label>
                <label>
                    表示名:
                    <input 
                    type="text" 
                    name="displayName" 
                    value={displayName}
                    onChange={(event) => setDisplayName(event.target.value)}/>
                </label>
                <label>
                    属性：
                    <select 
                    name="new-user-attribute"
                    defaultValue="teature" 
                    value={attribute}
                    onChange={(event) => setAttribute(event.target.value)}>
                        <option value="teature">Teature</option>
                        <option value="m2">M2</option>
                        <option value="m1">M1</option>
                        <option value="b4">B4</option>
                    </select>
                </label>
                <label>
                    <Button
                        color="gray"
                        onClick={() =>{
                            console.log("OK");
                        }}
                        fontColor="white"
                    >
                        キャンセル
                    </Button>
                </label>
                <label>
                    <Button
                        color="blue"
                        onClick={() =>{
                            console.log(userId);
                            console.log(displayName);
                            console.log(attribute);
                            addUser(userId,displayName,attribute);
                        }}
                        fontColor="white"
                    >
                        追加
                    </Button>
                </label>
        </div>
    );
}

export default UserAddPane;