import React, { useState } from "react";
import styled from "styled-components";
import CancelButton from "./cancell/CancelButton";


type CancelButtonProps = {
  updateHistory: () => any;
  history: any;
}

function HistoryCard(props) {

  return (
    <HistoryCardPane>
      <HistoryCardDate>{props.history.date}</HistoryCardDate>
      <HistoryCardItem>{props.history.item}</HistoryCardItem>
      <HistoryCardMoney>{props.history.price}円</HistoryCardMoney>
      <CancelButton
        updateHistory={props.updateHistory}
        history={props.history}>
      </CancelButton>
    </HistoryCardPane>
  );
}

const HistoryCardPane = styled.div`
  width:100%;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgb(180, 180, 180);
  height: 2em;
  font-size: 1em;
  display: flex;
  margin: 0.5em 0em 0.5em 0em;
`;

const HistoryCardDate = styled.div`
  margin-left: 1em;
  width: 50%;
  padding: 0.5em 0;
`;

const HistoryCardItem = styled.div`
  margin-left: 2em;
  width: 15%;
  padding: 0.5em 0;
`;

const HistoryCardMoney = styled.div`
  margin-left: 2em;
  width: 15%;
  padding: 0.5em 0;
`;

export default HistoryCard;
