import React, { useEffect, useState } from "react";
import "./HomePageParent.css";
import ItemPane from "./Item/ItemPane";
import MemberPane from "./Member/MemberPane";


const fetchMemberList = async (setMemberList) =>{
    const inputdata = await fetch(`http://localhost/backend/member`, {
        method: 'GET',
        mode: 'cors'
    })
    .then(res => res.json())
    .then(members => {
        setMemberList(members.filter((member) => {
            return member.active;
        }));
    });
}

const fetchItemList = async (setJuiceList,setFoodList) => {
    const inputdata = await fetch(`http://localhost/backend/item`, {
        method: 'GET',
        mode: 'cors'
    })
    .then(res => res.json())
    .then(itemList => {
        setJuiceList(
            itemList
            .filter((item) => {
                return item.active;
            })
            .filter(
                item => item.grouping == "juice"
            )
        );
        setFoodList(
            itemList
            .filter((item) => {
                return item.active;
            })
            .filter(
                item => item.grouping == "food"
            )
        );
    });
}

function HomePageParent(){

    const [selectedMemberId, setSelectedMemberId] = useState("");
    const [selectedItem,setSelectedItem] = useState("");
    const [memberList,setMemberList] = useState([]);
    // const [itemList,setItemList] = useState([]);
    const [juiceList,setJuiceList] = useState([]);
    const [foodList,setFoodList] = useState([]);

    // 再レンダリング用のトリガとして利用するステート
    // もう少し賢い実装がありそうなので，TODO としておく
    // TODO
    const [sumPurchased,setSumPurchased] = useState(0);

    useEffect(() => {
        fetchMemberList(setMemberList);
        fetchItemList(setJuiceList,setFoodList);
    },[])

    
    return(
        <div className="HomePageParent">
            <MemberPane 
                setSelectedMemberId={setSelectedMemberId}
                selectedMemberId={selectedMemberId}
                memberList={memberList}/>
            <ItemPane
                setSelectedItem={setSelectedItem}
                selectedItem={selectedItem}
                juiceList={juiceList}
                foodList={foodList}
                selectedMemberId={selectedMemberId}
                setSumPurchased={setSumPurchased}
                sumPurchased={sumPurchased}/>
        </div>
    );
}

export default HomePageParent;