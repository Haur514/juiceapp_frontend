import React from "react";
import './MemberInformation.css';

function MemberInformation(props){


    return(
        <div className="MemberInformation">
            <div className="CategoryName">ユーザ情報</div>
            <div className="MemberInformationPane-Content">
                <span>名前：{props.selectedMember.name==""?"---":props.selectedMember.displayName}</span><br></br>
                <span>今月の支払い分：{props.selectedMember.umpayedAmount}円</span>
            </div>
        </div>
    );
}

export default MemberInformation;