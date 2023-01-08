import React, { useState } from "react";
import "./HistoryCard.css";
import Button from "../../component/Button";
import { Transition } from "react-transition-group";
import { useSpring, animated } from "react-spring";

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
    <div className="HistoryPane">
      <div className="HistoryCardPane">
        <div className="history-date">{props.history.date}</div>
        <div className="history-purchasedItem">{props.history.item}</div>
        <div className="history-money">{props.history.price}円</div>
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
      </div>
    </div>
  );
}

export default HistoryCard;
