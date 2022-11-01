import React from "react";
import './HistoryPane.css';
import ItemCard from "../../../component/ItemCard";
import LogoCocaCora from "../../../image/logo_coca_cora.jpeg";

const history_list = ["PotatoChips","Rice","Pasta","Dagashi"];
function HistoryPane(props){
    return(
        <div className="HistoryPane">
            <div className="Category">History</div>
            <div className="HistoryPane-flex">
            {history_list.map((history) => {
                return(
                <ItemCard
                    color={props.selected?"#121258":"#FFC039"}
                    onClick={() => {
                        props.setValue(history);
                        props.setPopUpVisivility(true);
                    }}
                    name = {history}
                    imgSrc = {LogoCocaCora}
                    width = "100px"
                />
                )
            })}
            
            </div>
        </div>
    );
}

export default HistoryPane;