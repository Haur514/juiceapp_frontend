import React, { useEffect, useState } from "react";
import Button from "../../../component/Button";
import DefaultIcon from "./../../../image/userimg/defaultimg.png";

import { useSpring, animated } from "react-spring";
import { isAbsolute } from "node:path/win32";
import styled from "styled-components";

const default_member_card_color: string = "#303030";
const selected_member_card_color: string = "#303030";
const font_color: string = "white";

function MemberCard(props) {
  const styles = useSpring({
    opacity: props.selected ? 1 : 0,
  });

  return (
    <MemberCardPane>
      <SelectedMemberCard as={animated.div} style={styles}></SelectedMemberCard>
      <Button
        color={
          props.selected
            ? selected_member_card_color
            : default_member_card_color
        }
        height="15%"
        width="100%"
        onClick={() => {
          props.setSelectedMember(props.member);
        }}
        radius=".3em"
        border="greenyellow"
        fontColor={font_color}
        children={
          <MemberCardChildren>
            <MemberCardImage src={DefaultIcon} />
            <MemberCardChildrenContent>
              <span>{props.member.displayName}</span>
            </MemberCardChildrenContent>
          </MemberCardChildren>
        }
        fontSize="3em"
      />
    </MemberCardPane>
  );
}

const SelectedMemberCard = styled.div`
  position: absolute;
  width: 1em;
  background-color: greenyellow;
  top: -0.2em;
  left: -0.2em;
  bottom: -0.2em;
`;

const MemberCardPane = styled.div`
  position: relative;
  background-color: rgb(47, 47, 47);
  border: 0.2em solid greenyellow;
  margin: 1em 0.3em;
  border-top-color: transparent;
  border-right-color: transparent;
`;

const MemberCardChildren = styled.div`
  height: 1.5em;
  text-align: left;
  display: flex;
  align-items: center;
  padding-top: 0em;
`;

const MemberCardChildrenContent = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 60% 40%;
  font-size: 1em;
`;

const MemberCardImage = styled.img`
  display: block;
  height: 1em;
  padding-left: auto;
  margin-right: 0.5em;
  margin-left: 0.5em;
  border-radius: 50%;
`;

export default MemberCard;
