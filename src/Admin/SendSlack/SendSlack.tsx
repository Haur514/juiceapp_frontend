import React from "react";
// import Select from "react-select";
import Button from "../../component/Button";
import "./SendSlack.css"

function SendSlack(){
    const options = [
        { value: 'value1', label: '値1'},
        { value: 'value2', label: '値2'},
        { value: 'value2', label: '値3'},
      ]

    return(
        <div className="SendSlack">
                <label>
                    <div>アイコン：</div>
                </label>
                <label>
                    名前：
                    <input type="text" name="name" />
                </label>
                <label>
                    属性：
                    <select name="new-user-attribute">
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
                    <Button
                        color="blue"
                        onClick={() =>{
                            console.log("OK");
                        }}
                        fontColor="white"
                    >
                        追加
                    </Button>
                </label>
        </div>
    );
}

export default SendSlack;