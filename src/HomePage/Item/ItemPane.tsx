import React, { useState } from "react";
import './ItemPane.css';
import FoodPane from './Food/FoodPane'
import JuicePane from "./Juice/JuicePane";
import HistoryPane from "../History/HistoryPane";
import PopUpMenu from "./PopUpMenu/PopUpMenu";

import LogoCora from "./../../image/logo_coca_cora.jpeg"
import LogoFanta from "./../../image/logo_fanta.jpeg"
import LogoWater from "./../../image/logo_water.jpeg"
import LogoGogoTea from "./../../image/logo_tea.jpeg"
import LogoPotechi from "./../../image/logo_potechi.jpeg"
import LogoDagashi from "./../../image/logo_dagashi.jpeg"

function ItemPane(props){

    // const [selected_item, setValue] = useState("")
    const [is_popup_visible, setPopUpVisivility] = useState(false);

    let logoDictionary = {
        "CocaCora":LogoCora,
        "Fanta":LogoFanta,
        "Water":LogoWater,
        "GogoTea":LogoGogoTea,
        "PotatoChips":LogoPotechi,
        "Dagashi":LogoDagashi
    }

    const closePopUp = () => {
        setPopUpVisivility(false);
    }

    return(
        <div className="ItemPane">
            <JuicePane 
                setSelectedItem={props.setSelectedItem} 
                setPopUpVisivility={setPopUpVisivility}
                juiceList={props.juiceList}
                logoDictionary={logoDictionary}/>
            <FoodPane 
                setSelectedItem={props.setSelectedItem} 
                setPopUpVisivility={setPopUpVisivility}
                foodList={props.foodList}
                logoDictionary={logoDictionary}/>
            <HistoryPane 
                setValue={props.setSelectedItem}
                setPopUpVisivility={setPopUpVisivility}
                selectedMemberId={props.selectedMemberId}
                sumPurchased={props.sumPurchased}/>
            <PopUpMenu 
                name={props.selectedItem}
                visible={is_popup_visible}
                setPopUpVisivility={setPopUpVisivility}
                imgSrc={logoDictionary[props.selectedItem]}
                selectedMemberId={props.selectedMemberId}
                selectedItem={props.selectedItem}
                setSumPurchased={props.setSumPurchased}/>
        </div>
    );
}

export default ItemPane;