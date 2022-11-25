import React, { useState } from "react";
import './ItemPane.css';
import FoodPane from './Food/FoodPane'
import JuicePane from "./Juice/JuicePane";
import HistoryPane from "../History/HistoryPane";
import PopUpMenu from "./PopUpMenu/PopUpMenu";

import LogoCora from "./../../image/logo_coca_cora.jpeg"

function ItemPane(props){

    // const [selected_item, setValue] = useState("")
    const [is_popup_visible, setPopUpVisivility] = useState(false);

    const closePopUp = () => {
        setPopUpVisivility(false);
    }

    return(
        <div className="ItemPane">
            <JuicePane 
                setValue={props.setSelectedItem} 
                setPopUpVisivility={setPopUpVisivility}
                juiceList={props.juiceList}/>
            <FoodPane 
                setValue={props.setSelectedItem} 
                setPopUpVisivility={setPopUpVisivility}
                foodList={props.foodList}/>
            <HistoryPane 
                setValue={props.setSelectedItem}
                setPopUpVisivility={setPopUpVisivility}
                selectedMember={props.selectedMember}/>
            <PopUpMenu 
                name={props.selectedItem}
                visible={is_popup_visible}
                setPopUpVisivility={setPopUpVisivility}
                selectedMember={props.selectedMember}
                selectedItem={props.selectedItem}
                imgSrc={LogoCora}/>
        </div>
    );
}

export default ItemPane;