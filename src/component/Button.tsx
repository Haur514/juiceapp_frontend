import React from "react";
import internal from "stream";

interface Props {
  border?: string;
  color: string;
  children?: React.ReactNode;
  height?: string;
  onClick: () => void;
  radius?: string;
  width?: string;
  fontColor: string;
  fontSize?: string;
}

const Button: React.FC<Props> = ({ 
    border,
    color,
    children,
    height,
    onClick, 
    radius,
    width,
    fontColor,
    fontSize
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
         color: fontColor,
         fontSize: fontSize
      }}
    >
    {children}
    </button>
  );
}

export default Button;