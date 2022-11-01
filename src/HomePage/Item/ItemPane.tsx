import React, { useState } from "react";
import './ItemPane.css';
import FoodPane from './Food/FoodPane'
import JuicePane from "./Juice/JuicePane";

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
            <div className={`popup-menu ${is_popup_visible ? 'visible':'hidden'}`}>
                <div>購入</div>
                <div>{selected_item}</div>
                <button onClick={closePopUp}>
                    Close Menu
                </button>
            </div>
        </div>
    );
}

export default ItemPane;