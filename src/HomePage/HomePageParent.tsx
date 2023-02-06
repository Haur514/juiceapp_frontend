import React, { useEffect, useState } from "react";
import ItemPane from "./Item/ItemPane";
import MemberPane from "./Member/MemberPane";
import styled from "styled-components";


const fetchMemberList = async (setMemberList) =>{
    const inputdata = await fetch(`${window.location.protocol}//${window.location.host}${window.location.pathname}backend/member`, {
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
    const inputdata = await fetch(`${window.location.protocol}//${window.location.host}${window.location.pathname}backend/item`, {
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

function memberFindByName(memberList,searchName){
    memberList.map((member) => {
        if(member.name == searchName){
            return member;
        }
    })
    return {name:"",displayName:"",umpayedAmount:0,attribute:"",active:true};
}

function HomePageParent(){

    const [selectedMemberId, setSelectedMemberId] = useState("");
    const [selectedMember, setSelectedMember] = useState({name:"",displayName:"",umpayedAmount:0,attribute:"",active:true});
    const [selectedItem,setSelectedItem] = useState(null);
    const [memberList,setMemberList] = useState([]);
    // const [itemList,setItemList] = useState([]);
    const [juiceList,setJuiceList] = useState([]);
    const [foodList,setFoodList] = useState([]);

    const [update,setUpdate] = useState(false);

    // 再レンダリング用のトリガとして利用するステート
    // もう少し賢い実装がありそうなので，TODO としておく
    // TODO
    const [sumPurchased,setSumPurchased] = useState(0);

    useEffect(() => {
        fetchMemberList(setMemberList);
        fetchItemList(setJuiceList,setFoodList);
        setSelectedMember(memberFindByName(memberList,selectedMember.name));
    },[sumPurchased])

    const forseRender = () => {
        setUpdate(!update);
    }

    
    return(
        <HomePageParentPane>
            <MemberPane 
                selectedMember={selectedMember}
                setSelectedMember={setSelectedMember}
                memberList={memberList}/>
            <ItemPane
                setSelectedItem={setSelectedItem}
                selectedItem={selectedItem}
                juiceList={juiceList}
                update={update}
                setUpdate={setUpdate}
                foodList={foodList}
                selectedMemberId={selectedMemberId}
                selectedMember={selectedMember}
                setSumPurchased={setSumPurchased}
                sumPurchased={sumPurchased}/>
        </HomePageParentPane>
    );
}

const HomePageParentPane = styled.div`
display: flex;
`

export default HomePageParent;