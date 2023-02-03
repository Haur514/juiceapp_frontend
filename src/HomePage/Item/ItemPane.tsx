import React, { useState } from "react";

import FoodPane from "./Food/FoodPane";
import JuicePane from "./Juice/JuicePane";
import HistoryPane from "../History/HistoryPane";
import PopUpMenu from "./PopUpMenu/PopUpMenu";

import LogoCola from "./../../image/logo_coca_cora.jpg";
import LogoFanta from "./../../image/logo_fanta.jpg";
import LogoWater from "./../../image/logo_water.jpeg";
import LogoGogoTea from "./../../image/logo_tea.jpeg";
import LogoPotechi from "./../../image/logo_potechi.jpeg";
import LogoDagashi from "./../../image/logo_dagashi.jpeg";
import MemberInformation from "./MemberInformation/MemberInformation";
import styled from "styled-components";

function ItemPane(props) {
  const [is_popup_visible, setPopUpVisivility] = useState(false);

  let logoDictionary = {
    CocaCola: LogoCola,
    Fanta: LogoFanta,
    Water: LogoWater,
    GogoTea: LogoGogoTea,
    PotatoChips: LogoPotechi,
    Dagashi: LogoDagashi,
  };

  let popupmenuProps = {
    visibility: is_popup_visible,
    setPopUpVisivility: setPopUpVisivility,
    imgSrc:
      logoDictionary[
        props.selectedItem == null ? "CocaCola" : props.selectedItem.name
      ],
    selectedItem: props.selectedItem,
    setSumPurchased: props.setSumPurchased,
    selectedMember: props.selectedMember,
    setUpdate: props.setUpdate,
    update: props.update,
  };

  const closePopUp = () => {
    setPopUpVisivility(false);
  };

  return (
    <MainItemPane>
      <MemberInformation
        selectedMember={props.selectedMember}
      />
      <JuicePane
        setSelectedItem={props.setSelectedItem}
        setPopUpVisivility={setPopUpVisivility}
        selectedMember={props.selectedMember}
        juiceList={props.juiceList}
        logoDictionary={logoDictionary}
      />
      <FoodPane
        setSelectedItem={props.setSelectedItem}
        setPopUpVisivility={setPopUpVisivility}
        selectedMember={props.selectedMember}
        foodList={props.foodList}
        logoDictionary={logoDictionary}
      />
      <HistoryPane
        selectedMember={props.selectedMember}
      />
      <PopUpMenu 
          visibility={is_popup_visible}
          setPopUpVisivility={setPopUpVisivility}
          imgSrc={
            logoDictionary[
              props.selectedItem == null ? "CocaCola" : props.selectedItem.name
            ]}
          selectedItem={props.selectedItem}
          setSumPurchased={props.setSumPurchased}
          selectedMember={props.selectedMember}
          setUpdate={props.setUpdate}
          update={props.update}
       />
    </MainItemPane>
  );
}

const MainItemPane = styled.div`
width:70%;
height:90vh;
border-width:2px;
border-color:black;
border: solid 1px #333;
margin:5px;
overflow-y: scroll;
`

export default ItemPane;
