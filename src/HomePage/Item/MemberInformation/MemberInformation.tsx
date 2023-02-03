import React from "react";
import styled from "styled-components";

function MemberInformation({
    selectedMember
}){


    return(
        <MemberInformationPane>
            <CategoryName>ユーザ情報</CategoryName>
            <MemberInformationPaneContent>
                <span>名前：{selectedMember.name==""?"---":selectedMember.displayName}様</span><br></br>
                <span>今月の支払い分：{selectedMember.umpayedAmount}円</span>
            </MemberInformationPaneContent>
        </MemberInformationPane>
    );
}

const MemberInformationPane = styled.div`
    margin-bottom:1em;
    border: 1px solid black;
`

const CategoryName=styled.div`
    background-color: #303030;
    color:greenyellow;
    font-weight: bold;
    font-size:2em;
`

const MemberInformationPaneContent = styled.div`
font-size:2em;
`

export default MemberInformation;