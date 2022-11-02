import React, { useState } from "react";
import Button from "../../component/Button";
import './PopUpMenu.css';

// let selected_item: SVGStringList = "";

function ItemPane(props){

    const closePopUp = () => {
        props.setPopUpVisivility(false);
    }

    return(
        <div className={`popup-menu ${props.visible ? 'visible':'hidden'}`}>
            <div className="buying">購入</div>
            <div>{props.name}</div>
            <Button
                border="solid 1px black"
                color="gray"
                height = ""
                width = "40%"
                onClick={() => closePopUp()}
                radius = "0.2em"
                fontColor="white"
                children = {
                    <div>キャンセル</div>
                }
                fontSize = "50px"
            />
            <Button
                border="solid 1px black"
                color="darkred"
                height = ""
                width = "40%"
                onClick={() => closePopUp()}
                radius = "0.2em"
                fontColor="white"
                children = {
                    <div>購入</div>
                }
                fontSize = "50px"
            />
        </div>
    );
}

export default ItemPane;