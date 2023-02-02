import React, { useState } from "react";
// import Select from "react-select";
import Button from "../../component/Button";

const addItem = async (itemId,sellingPrice,costPrice,grouping) =>{
    let data = {
        name: itemId,
        sellingprice: sellingPrice,
        costprice: costPrice,
        grouping: grouping
    }
    const response = await fetch(`${window.location.protocol}//${window.location.host}${window.location.pathname}backend/item/add`, {
    method: 'POST',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    console.log(response);
}

function ItemAdd(){
    
    const [itemId,setItemId] = useState("");
    const [sellingPrice,setSellingPrice] = useState(0);
    const [costPrice,setCostPrice] =  useState(0);
    const [grouping,setGrouping] = useState("juice");
    return(
        <div className="ItemAdd">
                <label>
                    <div>アイコン：</div>
                </label>
                <label>
                    アイテムID：
                    <input 
                    type="text"
                    value={itemId}
                    onChange={(event) => setItemId(event.target.value)}/>
                </label>
                <label>
                    定価:
                    <input 
                    type="number"
                    value={sellingPrice}
                    onChange={(event) => setSellingPrice(Number(event.target.value))}/>
                </label>
                <label>
                    原価:
                    <input 
                    type="number"
                    value={costPrice}
                    onChange={(event) => setCostPrice(Number(event.target.value))}/>
                </label>
                <label>
                    カテゴリ：
                    <select 
                    value={grouping}
                    defaultValue="juice"
                    onChange={(event) => setGrouping(event.target.value)}>
                        <option value="juice">Juice</option>
                        <option value="food">Food</option>
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
                            addItem(itemId,sellingPrice,costPrice,grouping);
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