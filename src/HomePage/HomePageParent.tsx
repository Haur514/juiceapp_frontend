import React, { useEffect, useState } from "react";
import MemberPane from "./Member/MemberPane";
import ItemPane from "./Item/ItemPane";
import "./HomePageParent.css";
import { setTextRange } from "typescript";

let selected_member: string = "haruka";

const fetchMemberData = async (setMemberList) =>{
    const inputdata = await fetch(`http://localhost/backend/member`, {
        method: 'GET',
        mode: 'cors'
    })
    .then(res => res.json())
    .then(members => {
        setMemberList(members);
    });
}

function HomePageParent(){

    const [selectedMember, setSelectedMember] = useState("");
    const [selectedItem,setSelectedItem] = useState("");
    const [memberList,setMemberList] = useState([]);
    const [juiceList,setJuiceList] = useState(["CocaCora","Fanta","Water","GogoTea"]);
    const [foodList,setFoodList] = useState(["PotatoChips","Dagashi"]);

    // 再レンダリング用のトリガとして利用するステート
    // もう少し賢い実装がありそうなので，TODO としておく
    // TODO
    const [sumPurchased,setSumPurchased] = useState(0);

    useEffect(() => {
        fetchMemberData(setMemberList);
    },[])

    
    return(
        <div className="HomePageParent">
            <MemberPane 
                setSelectedMember={setSelectedMember}
                selectedMember={selectedMember}
                memberList={memberList}/>
            <ItemPane
                setSelectedItem={setSelectedItem}
                selectedItem={selectedItem}
                juiceList={juiceList}
                foodList={foodList}
                selectedMember={selectedMember}
                setSumPurchased={setSumPurchased}
                sumPurchased={sumPurchased}/>
        </div>
    );
}

export default HomePageParent;