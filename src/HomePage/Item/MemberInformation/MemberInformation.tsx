import React from "react";
import './MemberInformation.css';
import ItemCard from "../../../component/ItemCard";

function MemberInformation(props){
    return(
        <div className="MemberInformation">
            <div className="CategoryName">ユーザ情報</div>
            <div className="MemberInformationPane-Content">
            {/* {props.juiceList.sort((a,b) => - a.salesFigure + b.salesFigure).map((juice) => {
                return(
                <ItemCard
                    color={props.selected?"#121258":"#FFC039"}
                    onClick={() => {
                        props.setSelectedItem(juice);
                        if(props.selectedMember!=null){
                            props.setPopUpVisivility(true);
                        }
                    }}
                    name = {juice.name}
                    item={juice}
                    imgSrc = {props.logoDictionary[juice.name]}
                    width = "100px"
                    key={juice.name}
                />
                )
            })} */}
                <span>名前：{props.selectedMember.name==""?"---":props.selectedMember.displayName}</span><br></br>
                <span>今月の支払い分：{props.selectedMember.umpayedAmount}円</span>
            </div>
        </div>
    );
}

export default MemberInformation;