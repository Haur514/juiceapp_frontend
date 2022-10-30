import React from "react";
import MemberPane from "./Member/MemberPane";
import ItemPane from "./Item/ItemPane";
import "./HomePageParent.css";

function HomePageParent(){
    return(
        <div className="HomePageParent">
            <MemberPane/>
            <ItemPane/>
        </div>
    );
}

export default HomePageParent;