import React from "react";
import './HistoryCard.css';
import ItemCard from "../../component/ItemCard";
import LogoCocaCora from "../../../image/logo_coca_cora.jpeg";
import Button from "../../component/Button";

function HistoryCard(props){
    return(
        <div className="HistoryCard">
            <div className="history-date">{props.date}</div>
            <div className="history-purchasedItem">{props.purchasedItem}</div>
            <div className="history-money">{props.money}円</div>
            <div className="cancel-button">
                <Button
                    border = "solid 1px black"
                    color = "red"
                    onClick= {() => {
                        alert("OK");
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