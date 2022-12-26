import React, { useEffect, useState } from "react";
import './HistoryPane.css';
import ItemCard from "../../component/ItemCard";
import LogoCocaCora from "../../../image/logo_coca_cora.jpeg";
import HistoryCard from "./HistoryCard";
import HistoryEntity from "../../entity/HistoryEntity";
import { hasProps } from "@react-spring/core/dist/declarations/src/helpers";
import { update } from "react-spring";

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

    const updateHistory = () =>{
        fetchHistoryData(props.selectedMemberId,setHistories);
    }
    

    return(
        <div className="HistoryPane">
            <div className="CategoryName">History</div>
            <div className="HistoryPane-flex">
            {histories.map(history=>
                <HistoryCard 
                    history={history}
                    updateHistory={updateHistory}
                    key={history.id}/>
            )}
            </div>
        </div>
    );
}

export default HistoryPane;