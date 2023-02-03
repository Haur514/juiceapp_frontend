import React from "react";
import styled from "styled-components";
import MemberCard from "./MemberCard";

function MemberPanePerAttribute({
  description,
  attribute,
  memberList,
  selectedMember,
  setSelectedMember,
}) {
  return (
    <div>
      <Attribute>{description}</Attribute>
      {memberList
        .filter(function (member) {
          return member.attribute == attribute;
        })
        .sort(function (a, b) {
          if (a.displayName > b.displayName) {
            return 1;
          } else {
            return -1;
          }
        })
        .map((member) => {
          return (
            <MemberCard
              selected={selectedMember == member ? true : false}
              member={member}
              setSelectedMember={setSelectedMember}
              key={member.name}
            />
          );
        })}
    </div>
  );
}

const Attribute = styled.div`
  width: 100%;
  margin-top: 1em;
`;

export default MemberPanePerAttribute;
