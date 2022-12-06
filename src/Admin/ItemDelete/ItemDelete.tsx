import React, { useEffect, useState } from "react";
// import Select from "react-select";
import Button from "../../component/Button";
import "./ItemDelete.css"


const fetchItemList = async (setItemList) =>{
    const inputdata = await fetch(`http://localhost/backend/item`, {
        method: 'GET',
        mode: 'cors'
    })
    .then(res => res.json())
    .then(items => {
        setItemList(items);
    });
}

const deleteItem = async (item) =>{
    await fetch(`http://localhost/backend/item/delete?name=${item}`,{
        method: 'GET',
        mode: 'cors'
    })
}

function UserAddPane(){
    const [itemList,setItemList] = useState([]);

    useEffect(() => {
        fetchItemList(setItemList);
    },[])

    return(
        <div className="ItemDelete">
            <table border={1}>
                <tr>
                    <th>
                        アイテム名
                    </th>
                    <th>
                        グルーピング
                    </th>
                    <th>
                        削除ボタン
                    </th>
                </tr>
                {itemList.map(member => 
                    <tr>
                        <th>
                        {member.name}
                        </th>
                        <th>
                            {member.grouping}
                        </th>
                        <th>
                        <Button
                            color="gray"
                            radius="0.5em"
                            onClick={async () => {
                                await deleteItem(member.name);
                                await fetchItemList(setItemList);
                            }}
                            fontColor="white"
                        >
                            削除
                        </Button>
                        </th>
                    </tr>
                )}
            </table>
        </div>
    );
}

export default UserAddPane;