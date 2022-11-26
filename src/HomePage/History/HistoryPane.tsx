import React, { useEffect, useState } from "react";
import './HistoryPane.css';
import ItemCard from "../../component/ItemCard";
import LogoCocaCora from "../../../image/logo_coca_cora.jpeg";
import HistoryCard from "./HistoryCard";
import HistoryEntity from "../../entity/HistoryEntity";
import { hasProps } from "@react-spring/core/dist/declarations/src/helpers";

const fetchHistoryData = async (selectedMemberId: string,setHistories) =>{
    let data = [];
    if(selectedMemberId==""){
        return;
    }

    const inputdata = await fetch(`http://localhost/backend/history?name=${selectedMemberId}`, {
        method: 'GET',
        mode: 'cors'
    })
    .then(res => res.json())
    .then(histories => {
        setHistories(histories);
    });
    
}

function HistoryPane(props){

    const [histories, setHistories] = useState([]);

    useEffect(() => {
        fetchHistoryData(props.selectedMemberId,setHistories);
    },[props.selectedMemberId,props.sumPurchased])
    

    return(
        <div className="HistoryPane">
            <div className="Category">History</div>
            <div className="HistoryPane-flex">
            {histories.map(history=>
                <HistoryCard 
                    date={history.date}
                    purchasedItem={history.item}
                    money={history.price}/>
            )}
            </div>
        </div>
    );
}

export default HistoryPane;