import React, { useState } from "react";
import './ItemPane.css';
import FoodPane from './Food/FoodPane'
import JuicePane from "./Juice/JuicePane";
import HistoryPane from "../History/HistoryPane";
import PopUpMenu from "./PopUpMenu";

import LogoCora from "./../../image/logo_coca_cora.jpeg"

// let selected_item: SVGStringList = "";

function ItemPane(){

    const [selected_item, setValue] = useState("")
    const [is_popup_visible, setPopUpVisivility] = useState(false);

    const closePopUp = () => {
        setPopUpVisivility(false);
    }

    return(
        <div className="ItemPane">
            <JuicePane setValue={setValue} setPopUpVisivility={setPopUpVisivility}/>
            <FoodPane setValue={setValue} setPopUpVisivility={setPopUpVisivility}/>
            <HistoryPane setValue={setValue} setPopUpVisivility={setPopUpVisivility}/>
            <PopUpMenu 
                name={selected_item}
                visible={is_popup_visible}
                setPopUpVisivility={setPopUpVisivility}
                imgSrc={LogoCora}/>
        </div>
    );
}

export default ItemPane;