import React from "react";
import './JuicePane.css';
import ItemCard from "../../../component/ItemCard";
import LogoCocaCora from "../../../image/logo_coca_cora.jpeg";

const juices_list = ["CocaCora","Fanta","Water","Tea"];


function JuicePane(props){
    return(
        <div className="JuicePane">
            <div className="Category">Juice</div>
            <div className="JuicePane-flex">
            {juices_list.map((juice) => {
                return(
                <ItemCard
                color={props.selected?"#121258":"#FFC039"}
                onClick={() => {
                    props.setValue(juice);
                    props.setPopUpVisivility(true);
                }}
                name = {juice}
                imgSrc = {LogoCocaCora}
                width = "100px"
                />
                )
            })}
            </div>
        </div>
    );
}

export default JuicePane;