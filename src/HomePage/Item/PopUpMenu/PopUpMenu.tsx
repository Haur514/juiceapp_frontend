import React, { useState } from "react";
import Button from "../../..//component/Button";
import './PopUpMenu.css';

// 引数メモ
// let popupmenuProps = {
//     visibility: is_popup_visible,
//     setPopUpVisivility: {setPopUpVisivility},
//     imgSrc: logoDictionary[props.selectedItem],
//     selectedMemberId: props.selectedMemberId,
//     selectedItem: props.selectedItem,
//     setSumPurchased:props.setSumPurchased,
//     selectedMember:props.selectedMember
// }

function PopUpMenu(props){
    
    const purchaseItem = async () =>{
        if(props.popupmenuProps.selectedMember==null){
            return;
        }
        
        let data = {
            name: props.popupmenuProps.selectedMember.name,
            item: props.popupmenuProps.selectedItem.name
        }
        console.log(JSON.stringify(data))
        const response = await fetch(`${window.location.protocol}//${window.location.host}${window.location.pathname}backend/purchase`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(data)
            });
        
        props.popupmenuProps.setSumPurchased((prev) => prev+1);
        closePopUp();
        console.log(response.json());
    }

    const closePopUp = () => {
        props.popupmenuProps.setPopUpVisivility(false);
    }

    return(
        <div className={`popup-menu-background ${props.popupmenuProps.visibility ? 'visible':'hidden'}`}>
            <div className={`popup-menu ${props.popupmenuProps.visibility ? 'visible':'hidden'}`}>
                <div className="popup-UserInformation">
                    {props.popupmenuProps.selectedMember == null ? "hoge" :props.popupmenuProps.selectedMember.displayName}さん
                </div>
                <div className="item-info">
                    <img src={props.popupmenuProps.imgSrc} className="menu-icon"/>
                    <div style={{marginRight:"1em"}}>{props.popupmenuProps.selectedItem == null? "hoge" : props.popupmenuProps.selectedItem.name}</div>
                    <div>{props.popupmenuProps.selectedItem == null? "hoge" : props.popupmenuProps.selectedItem.sellingPrice}円</div>
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
                        onClick={() => {
                            purchaseItem()
                            props.popupmenuProps.setSumPurchased(props.popupmenuProps.selectedItem.salesFigure+1);
                            props.popupmenuProps.setUpdate(!props.popupmenuProps.update);
                        }}
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