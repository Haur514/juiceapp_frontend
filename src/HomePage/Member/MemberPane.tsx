import React, { useState } from "react";
import MemberCard from "./component/MemberCard";
import styled from "styled-components";
import MemberPanePerAttribute from "./component/MemberPanePerAttribute";

function MemberPane({
  selectedMember,
  setSelectedMember,
  memberList,
}) {
  return (
    <MainMemberPane>
      <MemberPanePerAttribute
        description={"先生"}
        attribute={"teature"}
        memberList={memberList}
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
      />
      <MemberPanePerAttribute
        description={"修士2年"}
        attribute={"m2"}
        memberList={memberList}
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
      />
      <MemberPanePerAttribute
        description={"修士1年"}
        attribute={"m1"}
        memberList={memberList}
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
      />
      <MemberPanePerAttribute
        description={"学部4年"}
        attribute={"b4"}
        memberList={memberList}
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
      />
    </MainMemberPane>
  );
}

const MainMemberPane = styled.div`
  overflow: scroll;
  width: 30%;
  height: 90vh;
  border-width: 2px;
  border-color: black;
  border: solid 1px #333;
  margin: 5px;
  
  background-color: rgb(47, 47, 47);
  color: greenyellow;
`;

export default MemberPane;
