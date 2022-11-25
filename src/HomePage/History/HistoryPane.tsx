import React, { useEffect, useState } from "react";
import './HistoryPane.css';
import ItemCard from "../../component/ItemCard";
import LogoCocaCora from "../../../image/logo_coca_cora.jpeg";
import HistoryCard from "./HistoryCard";
import HistoryEntity from "../../entity/HistoryEntity";

const fetchHistoryData = async (histories,selectedMember: string,setHistories) =>{
    const inputdata = await fetch(`http://localhost/backend/history?name=${selectedMember}`, {
        method: 'GET',
        mode: 'cors'
    })
    .then(res => res.json())
    .then(histories => {
        histories.map(history => {
            let history_element = new HistoryEntity(
                history.id,
                history.name,
                history.item,
                history.prince,
                history.date
            );
            setHistories([...histories,history_element]);
        })
    });
}


function HistoryPane(props){

    const [histories, setHistories] = useState([]);

    useEffect(() => {
        fetchHistoryData(histories,props.selectedMember,setHistories);
    },[])

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