import React, { useState } from "react";
import "./HistoryCard.css";
import Button from "../../component/Button";
import { Transition } from "react-transition-group";

// import ToggleButton from 'react-bootstrap/Switch';

const transitionStyle = {
    entering:{
        transition:"all 1s ease",
        transform: "translateX(100px)",
        backgroundColor:"gray"
    },
    exited:{
        transition:"all 1s ease",
        transform:"tranlateX(200px)",
        backgroundColor:"blue"
    }
}

const postRecall = async (history) => {
  const inputdata = await fetch(
    `http://localhost/backend/recall?name=${history.name}&item=${history.item}&id=${history.id}&price=${history.price}`,
    {
      method: "GET",
      mode: "cors",
    }
  );
};
function HistoryCard(props) {
  const [checked, setChecked] = useState(false);
  const [cancelBarVisibility, setCancelBarVisibility] = useState(true);

  return (
    <>
      <div className="HistoryCard">
        <div className="history-date">{props.history.date}</div>
        <div className="history-purchasedItem">{props.history.item}</div>
        <div className="history-money">{props.history.price}円</div>
        <div className="cancel-button">
          <Button
            border="solid 1px black"
            color="red"
            onClick={async () => {
            //   await postRecall(props.history);
            //   props.updateHistory();
            setCancelBarVisibility((prev) => !prev);
            }}
            radius="0.2em"
            fontColor="white"
            height="100%"
          >
            Cancel
          </Button>
          <Transition in={cancelBarVisibility} timeout={2000} unmountOnExit>
            {(state) => {
              return (
              <div className="cancel-button-pane" style={transitionStyle[state]}>
                hoge
              </div>
              );
            }}
          </Transition>
        </div>
      </div>
    </>
  );
}

const slideWidth = 500;

// const Inner = styled.div<{ state: TransitionStatus }>`
//   position: absolute;
//   transition: 0.5s;
//   right: -${slideWidth}px;
//   width: ${slideWidth}px;
//   transform: translateX(
//     ${({ state }) => (state === "entered" ? -slideWidth : 0)}px
//   );
// `;

export default HistoryCard;
