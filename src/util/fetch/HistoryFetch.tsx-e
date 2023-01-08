import React, {useState, useEffect} from 'react'
import HistoryEntity from '../../entity/HistoryEntity'
// import { data } from '../../Graph/Graph';

let protocol = "http"

const fetchHistoryData = async (histories,setHistories) =>{
    const inputdata = await fetch(`http://localhost/backend/history`, {
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

const HistoryFetch = () => {

    const [histories, setHistories] = useState([]);

    useEffect(() => {
        fetchHistoryData(histories,setHistories);
    },[])

    return (
        <div>
            <ul>
                {histories.map(history => 
                    <div>{history.name}</div>
                )}
            </ul>
        </div>
    )
}

export default HistoryFetch;