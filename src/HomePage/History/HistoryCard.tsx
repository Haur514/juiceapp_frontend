import React, { useState } from "react";
import "./HistoryCard.css";
import Button from "../../component/Button";
import { Transition } from "react-transition-group";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

// import ToggleButton from 'react-bootstrap/Switch';

const transitionStyle = {
  entering: {
    transition: "all 1s ease",
    transform: "translateX(100px)",
    backgroundColor: "gray",
  },
  exited: {
    transition: "all 1s ease",
    transform: "tranlateX(200px)",
    backgroundColor: "blue",
  },
};

const postRecall = async (history) => {
  const inputdata = await fetch(
    `${window.location.protocol}//${window.location.host}${window.location.pathname}backend/recall?name=${history.name}&item=${history.item}&id=${history.id}&price=${history.price}`,
    {
      method: "GET",
      mode: "cors",
    }
  );
};
function HistoryCard(props) {
  const [checked, setChecked] = useState(false);
  const [cancel_toggle, setCancelToggle] = useState(false);
  const cancel_style = useSpring({ width: cancel_toggle ? "5em" : "0em" });
  const opacity_style = useSpring({ opacity: cancel_toggle ? 1 : 0 });
  const rotate_style = useSpring({
    transform: cancel_toggle ? "rotate(180deg)" : "rotate(0deg)",
  });

  const handle_cancel_toggle = () => {
    setCancelToggle(!cancel_toggle);
  };

  return (
    <HistoryCardPane>
      <HistoryCardDate>{props.history.date}</HistoryCardDate>
      <HistoryCardItem>{props.history.item}</HistoryCardItem>
      <HistoryCardMoney>{props.history.price}円</HistoryCardMoney>
      <animated.div
        className="cancel-button"
        style={cancel_style}
        onClick={async () => {
          setCancelToggle(false);
          await postRecall(props.history);
          props.updateHistory();
        }}
      >
        <animated.span style={opacity_style}>Cancel</animated.span>
      </animated.div>
      <div
        className="cancel_toggle_button"
        onClick={() => {
          handle_cancel_toggle();
        }}
      >
        <animated.div
          className="cancel_toggle_button_content"
          style={rotate_style}
        >
          ▶︎
        </animated.div>
      </div>
    </HistoryCardPane>
  );
}

const HistoryCardPane = styled.div`
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

const CancelButton = styled.div`
  position: relative;
  height: 100%;
  background-color: red;
  margin-left: auto;
  color: white;
  padding: 0.5em 0;
`;

const CancelToggleButton = styled.div`
  position:relative;
  height:100%;
  background-color: rgb(48,48,48);
  vertical-align: middle;
  padding-left:.5em;
  padding-right:.5em;
`

export default HistoryCard;
