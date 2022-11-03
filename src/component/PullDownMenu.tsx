import React, { useState, useEffect, useRef } from "react";
import internal from "stream";
import { isPropertySignature } from "typescript";
import "./PullDownMenu.css";
import { useSpring, animated } from "react-spring";

interface Props {
  summary: string;
  onClick?;
  children;
}


const PullDownMenu: React.FC<Props> = ({ summary, onClick, children }) => {
  const [isVisible, setVisibility] = useState(false);

  const styles = useSpring({
    to: { height: isVisible ? "auto": 0 },
    from: { height: isVisible ? 0 : "auto" },
  });

  useEffect(() => {}, []);

  return (
    <div className="PullDownMenu">
      <button
        className="SummaryButton"
        onClick={() => {
          setVisibility(!isVisible);
        }}
      >
        <div className="pull-down-menu-summary">
        <div className={`${isVisible?"rotate-90":"rotate-0"}`}>▶︎</div>
        {summary}
        </div>
      </button>
      <animated.div
        className={`PullDownMenu-Content ${isVisible ? "visible" : ""}`}
        style={styles}
      >
        {children}
      </animated.div>
    </div>
  );
};

export default PullDownMenu;
