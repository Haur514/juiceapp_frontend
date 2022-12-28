import React, { useEffect, useState } from "react";
import "./MemberCard.css";
import Button from "./../../component/Button";
import DefaultIcon from "./../../image/userimg/defaultimg.png";

import { useSpring, animated } from "react-spring";

const default_member_card_color: string = "#303030";
const selected_member_card_color: string = "#303030";
const font_color: string = "white";

function MemberCard(props) {
  const styles = useSpring({ opacity: props.selected ? 1 : 0 });

  return (
    <div
      className={`MemberCard`}
    >
      <animated.div className="MemberCard-Selected" style={styles}>
      </animated.div>
      <Button
        color={
          props.selected
            ? selected_member_card_color
            : default_member_card_color
        }
        height="15%"
        width="100%"
        onClick={() => {
          props.setSelectedMemberId(props.member.name);
        }}
        radius=".3em"
        border="greenyellow"
        fontColor={font_color}
        children={
          <div className={`MemberCardChildren`}>
            <img src={DefaultIcon} />
            <div className={"MemberCardChildren-content"}>
            <span>{props.member.displayName}</span>
            {/* <div className={"MemberCardChildren-id"}>
              {props.member.name}
            </div> */}
            </div>
          </div>
        }
        fontSize="3em"
      />
    </div>
  );
}

export default MemberCard;
