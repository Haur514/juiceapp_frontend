import React from "react";
// import Select from "react-select";
import Button from "../../component/Button";
import "./ItemAdd.css"

function ItemAdd(){
    const options = [
        { value: 'value1', label: '値1'},
        { value: 'value2', label: '値2'},
        { value: 'value2', label: '値3'},
      ]

    return(
        <div className="ItemAdd">
                <label>
                    <div>アイコン：</div>
                </label>
                <label>
                    名前：
                    <input type="text" name="name" />
                </label>
                <label>
                    カテゴリ：
                    <select name="new-user-attribute">
                        <option value="Juice">Juice</option>
                        <option value="Food">Food</option>
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

export default ItemAdd;