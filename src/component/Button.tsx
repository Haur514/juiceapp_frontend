import React from "react";
import internal from "stream";

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string;
  width: string;
  fontColor: string;
}

const Button: React.FC<Props> = ({ 
    border,
    color,
    children,
    height,
    onClick, 
    radius,
    width,
    fontColor
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
         backgroundColor: color,
         border,
         borderRadius: radius,
         height,
         width,
         fontSize: "50px",
         color: fontColor
      }}
    >
    {children}
    </button>
  );
}

export default Button;