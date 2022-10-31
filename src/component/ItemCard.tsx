import React from "react";
import internal from "stream";
import './ItemCard.css'

interface Props {
  border: string;
  color: string;
  name:string;
  onClick: () => void;
  radius: string;
  imgSrc: string;
}

const ItemCard: React.FC<Props> = ({ 
    border,
    color,
    name,
    onClick, 
    radius,
    imgSrc
  }) => { 
  return (
    <button 
      onClick={onClick}
      className="ItemCard"
      style={{
         border,
         borderRadius: radius,
         height: "80%",
         width: "30vh",
         fontSize: "50px"
      }}
    >
    <img 
        src={imgSrc}
        style={{
            
        }}></img>
    <span>{name}</span>
    </button>
  );
}

export default ItemCard;