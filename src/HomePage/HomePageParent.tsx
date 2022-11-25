import React, { useState } from "react";
import MemberPane from "./Member/MemberPane";
import ItemPane from "./Item/ItemPane";
import "./HomePageParent.css";

let selected_member: string = "haruka";

function HomePageParent(){

    const [selectedMember, setSelectedMember] = useState("");
    const [selectedItem,setSelectedItem] = useState("");
    const [memberList,setMemberList] = useState(["haruka","iwase","takesige","mihara","ishino","fumiya","kaichi","kubo","kaimor"]);
    const [juiceList,setJuiceList] = useState(["CocaCora","Fanta","Water","GogoTea-Milk","GogoTea-Lemon","Gogotea-straight"]);
    const [foodList,setFoodList] = useState(["PotatoChips","Rice","Pasta","Dagashi"]);


    
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
                selectedMember={selectedMember}/>
        </div>
    );
}

export default HomePageParent;