import React from "react";
import './HistoryPane.css';
import ItemCard from "../../../component/ItemCard";
import LogoCocaCora from "../../../image/logo_coca_cora.jpeg";
import HistoryCard from "./HistoryCard";

const history_list = ["PotatoChips","Rice","Pasta","Dagashi"];
function HistoryPane(props){
    return(
        <div className="HistoryPane">
            <div className="Category">History</div>
            <div className="HistoryPane-flex">
            <HistoryCard 
                date="2022/11/1 10:00:00"
                purchasedItem="PotatoChips"
                money="100"/>
            <HistoryCard 
                date="2022/11/1 10:00:00"
                purchasedItem="PotatoChips"
                money="100"/>
            <HistoryCard 
                date="2022/11/1 10:00:00"
                purchasedItem="PotatoChips"
                money="100"/>
            </div>
        </div>
    );
}

export default HistoryPane;