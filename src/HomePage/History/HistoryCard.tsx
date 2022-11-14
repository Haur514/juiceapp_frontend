import React from "react";
import './HistoryCard.css';
import ItemCard from "../../component/ItemCard";
import LogoCocaCora from "../../../image/logo_coca_cora.jpeg";
import Button from "../../component/Button";

function HistoryCard(props){
    return(
        <div className="HistoryCard">
            <span className="history-date">{props.date}</span>
            <span className="history-purchasedItem">{props.purchasedItem}</span>
            <span className="history-money">{props.money}円</span>
            <div className="cancel-button">
                <Button
                    border = "solid 1px black"
                    color = "darkred"
                    onClick= {() => {
                        alert("OK");
                    }}
                    radius = "0.2em"
                    fontColor = "white"
                    height="2em"
                >
                    Cancel
                </Button>
            </div>
        </div>
    );
}

export default HistoryCard;