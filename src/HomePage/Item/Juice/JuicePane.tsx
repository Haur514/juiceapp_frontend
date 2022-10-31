import React from "react";
import './JuicePane.css';
import ItemCard from "../../../component/ItemCard";
import LogoCocaCora from "../../../image/logo_coca_cora.jpeg";

function JuicePane(props){
    return(
        <div className="JuicePane">
            <div>Juice</div>
            <ItemCard
            border="solid 1px black"
            color={props.selected?"#121258":"#FFC039"}
            onClick={() => props.setValue(props.name)}
            radius = "0%"
            name = "CocaCola"
            imgSrc = {LogoCocaCora}
            />
        </div>
    );
}

export default JuicePane;