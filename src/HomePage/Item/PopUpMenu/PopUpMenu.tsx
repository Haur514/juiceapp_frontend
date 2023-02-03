import React, { useState } from "react";
import "./PopUpMenu.css";
import styled from "styled-components";
import SelectCancelPurchaseButtonPane from "./component/SelectCancelPurchaseButtonPane";
import UserInformationPane from "./component/UserInformationPane";
import ItemInformationPane from "./component/ItemInformationPane";

const purchaseItem = async (selectedMember, selectedItem, setSumPurchased) => {
  if (selectedMember == null) {
    return;
  }

  let data = {
    name: selectedMember.name,
    item: selectedItem.name,
  };
  console.log(JSON.stringify(data));
  const response = await fetch(
    `${window.location.protocol}//${window.location.host}${window.location.pathname}backend/purchase`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(data),
    }
  );

  setSumPurchased((prev) => prev + 1);
  console.log(response.json());
};

function PopUpMenu({
  visibility,
  setPopUpVisivility,
  imgSrc,
  selectedItem,
  setSumPurchased,
  selectedMember,
  setUpdate,
  update,
}) {
  const Background = styled.div`
    position: fixed;
    inset: 0;
    margin: auto;
    visibility: ${visibility ? "visible" : "hidden"};
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
  `;

  const closePopUp = () => {
    setPopUpVisivility(false);
  };

  return (
    <Background>
      <div className={`popup-menu ${visibility ? "visible" : "hidden"}`}>
        <UserInformationPane
            selectedMember={selectedMember} />
        <ItemInformationPane 
            imgSrc={imgSrc}
            selectedItem={selectedItem}/>
        <SelectCancelPurchaseButtonPane
            purchaseItem={purchaseItem}
            selectedMember={selectedMember}
            selectedItem={selectedItem}
            setSumPurchased={setSumPurchased}
            closePopUp={closePopUp}
            setUpdate={setUpdate}
            update
        />
      </div>
    </Background>
  );
}

export default PopUpMenu;
