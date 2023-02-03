import React, { useState } from "react";
import Button from "../../../../component/Button";
import styled from "styled-components";

function SelectCancelPurchaseButtonPane({
  purchaseItem,
  selectedMember,
  selectedItem,
  setSumPurchased,
  closePopUp,
  setUpdate,
  update,
}) {
  return (
    <SelectButtonPane>
      <ButtonPane>
        <Button
          border="solid 1px black"
          color="gray"
          height="2em"
          width="40%"
          onClick={() => closePopUp()}
          radius="0.2em"
          fontColor="white"
          children={<div>キャンセル</div>}
          fontSize="0.7em"
        />
      </ButtonPane>
      <ButtonPane>
        <Button
          border="solid 1px black"
          color="darkred"
          height="2em"
          width="40%"
          onClick={() => {
            purchaseItem(selectedMember, selectedItem, setSumPurchased);
            closePopUp();
            setSumPurchased(selectedItem.salesFigure + 1);
            setUpdate(!update);
          }}
          radius="0.2em"
          fontColor="white"
          children={<div>購入</div>}
          fontSize="0.7em"
        />
      </ButtonPane>
    </SelectButtonPane>
  );
}

const SelectButtonPane = styled.div`
  vertical-align: bottom;
`;

const ButtonPane = styled.div`
  margin-left: 0.5em;
  margin-right: 0.5em;
  display:inline;
`;

export default SelectCancelPurchaseButtonPane;
