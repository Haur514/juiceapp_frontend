import React, { useState } from "react";
import MemberPane from "./Member/MemberPane";
import ItemPane from "./Item/ItemPane";
import "./HomePageParent.css";
import { setTextRange } from "typescript";

let selected_member: string = "haruka";

function HomePageParent(){

    const [selectedMember, setSelectedMember] = useState("px0047ex7");
    const [selectedItem,setSelectedItem] = useState("");
    const [memberList,setMemberList] = useState(["haruka","iwase","takesige","mihara","ishino","fumiya","kaichi","kubo","kaimor"]);
    const [juiceList,setJuiceList] = useState(["CocaCora","Fanta","Water","GogoTea"]);
    const [foodList,setFoodList] = useState(["PotatoChips","Dagashi"]);

    // 再レンダリング用のトリガとして利用するステート
    // もう少し賢い実装がありそうなので，TODO としておく
    // TODO
    const [sumPurchased,setSumPurchased] = useState(0);


    
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