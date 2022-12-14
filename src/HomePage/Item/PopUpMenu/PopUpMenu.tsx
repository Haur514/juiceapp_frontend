import React, { useState } from "react";
import Button from "../../..//component/Button";
import './PopUpMenu.css';

// let selected_item: SVGStringList = "";

function PopUpMenu(props){
    
    const purchaseItem = async () =>{
        if(props.selectedMemberId==""){
            return;
        }
        const inputdata = await fetch(`${window.location.protocol}//${window.location.host}${window.location.pathname}backend/purchase?name=${props.selectedMemberId}&item=${props.selectedItem}`, {
        method: 'GET',
        mode: 'cors'
        });
        props.setSumPurchased((prev) => prev+1);
        closePopUp();
    }

    const closePopUp = () => {
        props.setPopUpVisivility(false);
    }

    return(
        <div className={`popup-menu-background ${props.visible ? 'visible':'hidden'}`}>
            <div className={`popup-menu ${props.visible ? 'visible':'hidden'}`}>
                <div className="buying">購入</div>
                <div className="item-info">
                    <img src={props.imgSrc} className="menu-icon"/>
                    <div>{props.name}</div>
                </div>
                <div className="select-button-pane">
                    <Button
                        border="solid 1px black"
                        color="gray"
                        height = "2em"
                        width = "40%"
                        onClick={() => closePopUp()}
                        radius = "0.2em"
                        fontColor="white"
                        children = {
                            <div>キャンセル</div>
                        }
                        fontSize = "0.7em"
                    />
                    <Button
                        border="solid 1px black"
                        color="darkred"
                        height = "2em"
                        width = "40%"
                        onClick={() => purchaseItem()}
                        radius = "0.2em"
                        fontColor="white"
                        children = {
                            <div>購入</div>
                        }
                        fontSize = "0.7em"
                    />
                </div>
            </div>
        </div>
    );
}

export default PopUpMenu;