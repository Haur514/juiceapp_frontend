import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const postRecall = async (history) => {
  const inputdata = await fetch(
    `${window.location.protocol}//${window.location.host}${window.location.pathname}backend/recall?name=${history.name}&item=${history.item}&id=${history.id}&price=${history.price}`,
    {
      method: "GET",
      mode: "cors",
    }
  );
};

function CancelButton(props) {
  const [cancel_toggle, setCancelToggle] = useState(false);

  const cancel_style = useSpring({
    width: cancel_toggle ? "5em" : "0em",
    border: "none",
    padding:".5em 0em",
    color:"white",
    backgroundColor:"red",
    marginLeft:"auto",
    height:"100%"
    });

  const opacity_style = useSpring({ opacity: cancel_toggle ? 1 : 0 });
  const rotate_style = useSpring({
    transform: cancel_toggle ? "rotate(180deg)" : "rotate(0deg)",
  });

  const handle_cancel_toggle = () => {
    setCancelToggle(!cancel_toggle);
  };
  return (
    <CancelButtonPane>
      <animated.button
        style={cancel_style}
        onClick={async () => {
          setCancelToggle(false);
          await postRecall(props.history);
          props.updateHistory();
        }}
      >
        <animated.span style={opacity_style}>Cancel</animated.span>
      </animated.button>
      <CancelToggleButton
        onClick={() => {
          handle_cancel_toggle();
        }}
      >
        <animated.div
          style={rotate_style}
        >
          ▶︎
        </animated.div>
      </CancelToggleButton>
    </CancelButtonPane>
  );
}

const CancelButtonPane = styled.div`
    width:15%;
    position:relative;
    display:flex;
    right:0;
`

const CancelToggleButton = styled.button`
    position:relative;
    height:100%;
    background-color: rgb(48,48,48);
    vertical-align: middle;
    padding:.5em;
    top:0;
    right:0;
    color:greenyellow;
    border:0;
`

export default CancelButton;
