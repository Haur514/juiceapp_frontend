import React, { useState } from "react";
import './HistoryCard.css';
import Button from "../../component/Button";

// import ToggleButton from 'react-bootstrap/Switch';

const postRecall = async (history) =>{
    const inputdata = await fetch(`http://localhost/backend/recall?name=${history.name}&item=${history.item}&id=${history.id}&price=${history.price}`, {
        method: 'GET',
        mode: 'cors'
    });
}
function HistoryCard(props){

    const [checked,setChecked] = useState(false);
    return(
        <div className="HistoryCard">
            <div className="history-date">{props.history.date}</div>
            <div className="history-purchasedItem">{props.history.item}</div>
            <div className="history-money">{props.history.price}円</div>
            <div className="cancel-button">
                {/* <ToggleButton 
                    className="mb-2"
                    // id="toggle-check"
                    type="checkbox"
                    variant="outline-primary"
                    checked={checked}
                    value="1"
                    onChange={(e) => setChecked(e.currentTarget.checked)}>
                        Checked
                </ToggleButton> */}
                <Button
                    border = "solid 1px black"
                    color = "red"
                    onClick= {async () => {
                        await postRecall(props.history);
                        props.updateHistory();
                    }}
                    radius = "0.2em"
                    fontColor = "white"
                    height="100%"
                >
                    Cancel
                </Button>
            </div>
        </div>
    );
}

export default HistoryCard;