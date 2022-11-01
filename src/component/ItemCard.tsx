import React from "react";
import internal from "stream";
import { isPropertySignature } from "typescript";
import './ItemCard.css'

interface Props {
  color: string;
  name:string;
  onClick: () => void;
  imgSrc: string;
  width: string;
}

const ItemCard: React.FC<Props> = ({ 
    name,
    onClick, 
    imgSrc,
    width
  }) => { 
  return (
    <button 
      onClick={onClick}
      className="ItemCard"
    >
    <img 
      src={imgSrc}
    ></img>
    <span>{name}</span>
    </button>
  );
}

export default ItemCard;